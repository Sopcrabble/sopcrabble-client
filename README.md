# word-relay-client
## 1. 서비스 소개
서비스명 : 솝말잇기  
서비스 한 줄 소개 : 솝트인을 위한 릴레이 솝조어 생성기

## 2. 개발자 소개
|김지윤|백지연|석상언|
|-|-|-|
|[@Jiyun Kim](https://github.com/small-j)|[@Jiyeon Baek](https://github.com/100Gyeon)|[@Sangeon Seok](https://github.com/sharpcoder312)|

## 3. Convention
### Code convention
- eslint, prettier사용
- 변수, 함수 Camel case 기본, 폴더이름 소문자 시작, 파일 이름(컴포넌트만) 대문자 시작
- Styled 컴포넌트 : 컴포넌트 이름 앞에 Styled 붙여주기
- 함수 선언 방식 : arrow function
- 함수 이름 : 동사 시작 ex) is : return [Boolean]
- Event handler의 이름 : on으로 시작
- api 호출 함수 : api.js에 넣어놓기

### Commit message convention
- feat: 새로운 기능 추가  
- fix: 버그 수정
- docs: 문서 수정
- style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- refactor: 코드 리팩토링
- test: 테스트 코트, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)


## 4. 브랜치 전략
- master - feature
- master : 배포
- feat/[기능] : 기능 개발을 진행하는 브랜치
