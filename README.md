---
Title: Remember Jeju 4.3 Tragedy
Author: Nasol Kim, Sekwang Oh, Sooyoung Hyun
Date: March 2019
Mail: hyunsy822@gmail.com
File: README
---

# 프로젝트명: 영원히 기억하라(가칭)

# (제주BUG - Jeju Blockchain User Group)

## Index

- [프로젝트-개요](#프로젝트-개요)
- [개발-환경-설정](#개발-환경-설정)
- [DApp-동작-방식](#DApp-동작-방식)

## 프로젝트-개요

### 배경

- 제주 4.3사건의 희생자를 기억하자

- 시민이 기억하려는 노력이 중요하다

- 일회성이 아니라, 지속적으로 기억하는 것이 중요하다.

- 블록체인 기술의 강점을 활용해보자

### 내용

- 제주 4.3사건 희생자 (현재 공개된 14,500명)의 목록을 블록체인 이더리움 메인넷에 등록함.

- 시민 43명을 모집하고, 온라인 또는 오프라인에서 모여서 희생자의 데이터를 직접 등록하는 밋업을 진행함. (월 1회, 매월 3일)

- 기타 추가적인 밋업은, 청년활동가, 일반 시민 등이 자발적으로 독립적으로 밋업을 열 수 있도록 독려하기.

- 기획팀에서는 기본 월1회의 밋업만 진행

- 독립적인 밋업 진행에 관한 홍보 서포트 (참여자 시민 43명 대상)

- 프로젝트 진행을 위한 개별 스킬 : 자원봉사 참여 받기

- 예: 오픈소스 프로젝트, publishing 작업

- 명단 리스트 업로드를 자동화 하지 않는 이유는 시민들의 참여와 지속성을 위해

- 이더리움을 개발자 영역이 아닌 곳에서 비개발자들도 사용하게 해봄으로써 이더리움에 대한 생태계 넓힐 수 있음

### 추진일정

- 3.21 : 현수영 - 발의

- 3.21 : 오세광, 김나솔 - 제청

- 3.21 : 김나솔, 현수영 - 기획방향 구체화

- 3.26 : 선언문 작성 - 오세광

- 3.26 : 시민 참여단 모집을 위한 글 전체 마스터링: 김나솔

- 3.26 : 시민 참여단 모집을 위한 글 - 기술 방식: 현수영

### 주요 마일스톤

- 3.28 : 시민 참여단 모집 공고 오픈 (제주스퀘어 사이트, 밋업으로 게시)

- 4.2 : 시민 참여단 모집완료

- 4.3 : 1차 오프라인 밋업 진행, 19:00-21:00

- 4.3 : 선언문 낭독

- 4.3 : 선언문 업로드

- 4.3 : 희생자 명단 데이터 업로드 시작

- 5.3 : 2차 오프라인 밋업 진행

- 6.3 : 3차 오프라인 밋업 진행

- 매월 3일 : 오프라인 밋업 진행

- 2020년 3월 3일까지 입력하는 게 우선 목표..

- 그 이후에도 계속 진행하는 게 목표..

## 개발-환경-설정

- Framework : truffle-react box

- UI : material-ui

- 현재 https://hsy822.github.io/remember43 링크를 통해 접근 -> 도메인 구입 예정

Clone this repository.

```
$ git clone https://github.com/hsy822/43remember.git
$ cd 43remember/
```

Go to the repository folder.

```
$ cd client/
$ npm install
$ npm run start
```

Go to [http//localhost:3000](http://localhost:3000/)

---

- 테스트는 트러플에서 진행하였으나, 테스트넷 배포시 truffle-hdwallet-provider 임포트 에러가 발생해 컨트랙트 배포는 리믹스에서 진행하였습니다. 배포한 코드는 Deployed_Remember43.sol 파일과 deployed_address.txt 를 참고바랍니다.

<!--
## How to use this DApp?
* Account deployed contract is Admin.(ex: accounts[0])
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s1.PNG)

* Connect with another user account.(ex: accounts[1])
* Click the REQUEST button to get 'Store Owner' permission.
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s2.PNG)

* When you send a request, the state value changes.(User -> Requested)
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s3.PNG)

* Connect with admin account.(ex: accounts[0])
* Click the ADMIN PAGE ONOFF button to get request list.
* You can give the user permissions by clicking on the address.
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s4.PNG)

* Connect with user account.(ex: accounts[1])
* The state value is changed from 'Requested' to 'Store owner'.
* Click the OPEN MY STORE button to add product.
* The uploaded photo file is stored on IPFS.
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s5.PNG)

* Connect with another user account.(ex: accounts[2])
* You can see store list. Click on the address to view the list of products in that store.
* If you enter the amount(ex: 5) and click the BUY button, the balance of ether is decreased.
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s6.PNG)

* Connect with Store Owner account.(ex: accounts[1])
* You can see that there is a deposit of 50 in the contract.
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s7.PNG)

* When you click the WITHDRAW button, the ether is withdrawn from the contract to the store owner account.
![Alt text](https://github.com/dev-bootcamp-2019/final-project-hsy822/blob/master/screenshot/s8.PNG)

* In fact, more specific features need to be implemented in addition, but not all. In order to upgrade, functions such as product inventory management and order management should be added.
--- -->
