# Stop Watch 웹 애플리케이션

<img src="./screen.png"  width="50%" height="50%" >

## 소개

Stop Watch는 간단한 스톱워치 시간 관리 웹 애플리케이션입니다. 사용자는 시간을 추가, 삭제 할 수 있으며, 완료한 작업을 저장할 수 있습니다. 또한 통계그래프를 볼수 있습니다.

## 주요 기능

- 시간 추가, 삭제
- 통계 그래프
- 스톱 워치

## 사용된 기술

- Front-end: React, css modules, javascript
- Deployment: netlify

## 사용 예제

<img src="./screen_record.gif"  width="50%" height="50%" >

## 개발 배경 및 과정

일요일 의 통계 그래프가 표시되지않아 코드를 찾아봤고 계산된 일주일 기간의 길이가 총 6일 이었습니다. 결국 6일을 7일로 계산되도록 바꿨습니다.

useEffect 를 사용할때 unmounted 될시 에 버튼이 작동하도록 하여서 예상대로 작동하지 않았습니다. use Effect 를 사용시에는 unmouted 에 실행되는 함수인지 잘파악 해야겠습니다.

reducer 를 사용하여 리팩토링 하였지만 큰 도움이 된것같진 않았습니다. 엄청나게 관계있는 state 들이 아니었기에 리듀서 활용을 잘 못한것 같습니다. 
