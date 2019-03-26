const Remember43 = artifacts.require("./Remember43.sol");
var assertThrow = require("./assertExceptions");

/**
 * @author Sooyoung Hyun
 * @ Test for Remember43.sol
 * Declaration of variables that will be useful to test the functions and attributes values.
 * In each of the test, the function or attribute is called and it's verified that the value is the expected one.
 */
contract("Remember43", accounts => {
  const owner = accounts[0];
  const contributor = accounts[1];
  const user = accounts[2];

  beforeEach("setup contract for each test", async function() {
    remember43Instance = await Remember43.deployed();
  });

  it("should only owner be able to set contributor", async () => {
    var eventEmitted = false;
    var state = true;

    // set contributor
    var result = await remember43Instance.setContributor(contributor, state, {
      from: owner
    });

    // check for events
    var loggedContributor;

    if (result.logs[0] && result.logs[0].event) {
      loggedContributor = result.logs[0].args.contributor;
      eventEmitted = true;
    }

    // test user
    const isContributor = await remember43Instance.isContributor.call(
      contributor
    );
    assert.equal(
      eventEmitted,
      true,
      "setting a contributor should emit contributor setted event"
    );
    assert.equal(
      loggedContributor,
      contributor,
      "Contributor has been added successfully"
    );
    assert.equal(isContributor, state, "should be marked as a 'state' value");
  });

  it("only contributor can add victim", async () => {
    var name = "victim_name";
    var addr = "local_address";
    // test run under the assumption that user is not contributor
    await assertThrow.expectRevert(
      remember43Instance.addVictim(name, addr, { from: user })
    );

    var isContributor = await remember43Instance.isContributor.call(user);
    assert.equal(isContributor, false, "should not be marked as contributor");
  });

  it("only admin can modify added victim within time limit", async () => {
    var name = "victim_name";
    var addr = "local_address";
    var result = await remember43Instance.addVictim(name, addr, {
      from: contributor
    });

    var idx;
    if (result.logs[0] && result.logs[0].event) {
      idx = result.logs[0].args.idx.toNumber();
    }

    var updateName = "update_name";
    var updateAddr = "update_addr";

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    await timeout(5000);

    await assertThrow.expectRevert(
      remember43Instance.modifyVictim(idx, updateName, updateAddr, {
        from: contributor
      })
    );

    var getVictim = await remember43Instance.getVictim.call(idx);

    assert.equal(getVictim[1], name, "should not be updated");
  });
});
