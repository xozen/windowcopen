# windowcopen
Centerized javascript window.open since 2007.11.12

windowcopen 함수는, 기존의 window.open 의 기능강화 함수입니다.
새 창을 열때, 화면의 중앙에 열어줍니다.

예를들어 window.open(url, title, 'width=500, height=500') 으로 새 창을 열면,
PC화면 가장 왼쪽 위에 500x500 픽셀의 창이 열릴 것 입니다.
이것은 UI측면에서의 고려가 부족한 결과라고 할 수 있습니다.

하지만 똑같은 문법으로 windowcopen(url, title, 'width=500, height=500') 이렇게 함수 이름만 살짝 바꿔서 새 창을 열면,
사용자의 코앞인 PC화면의 가운데에 창이 나타나게 됩니다.

이렇듯 windowcopen 은 개발자는 편리하게 사용할 수 있고,
사용자도 매번 새 창이 열리면 내가 원하는 (주로 화면 가운데) 위치로
드래그 해서 이동시켜줘야 하는 불편함을 해소시켜주는 편의성을 제공합니다.


[version history]

- 1.11 : 2018.09.14 : Minified js, sample html file added
- 1.1 : 2018.09.14 : 대량의 소스에 적용시 문제되는 옵션인식 문제 수정
- 1.0 : 2008.12.02 : 실무 적용
- 0.8 : 2008.11.20 : w, h 값을 options 에 통합, options 값 인식처리
- 0.5 : 2007.11.12 : 최초 작성
