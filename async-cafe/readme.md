### chashier.js
주문 받는 역할을 함
주문 받으면 대기표에 추가
유저 아이디 할당

### manager.js
1초마다 주문 대기표 확인
작업이 비어있는 바리스타에게 작업 이벤트 전달
**Barista**에게 전달받은 완료 이벤트 표시

### barista.js
동시에 2개의 음료 만들 수 있음
음료 완료하면 **Manager** 에게 전달함

### dashboard.js
고객별 대기중/제작중/완료상태 표시 (주기적으로)

### order.js
고객 id, 메뉴

### orderState.js
대기, 제작, 완료 Order Queue 관리