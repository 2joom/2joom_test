/*
 *자바스크립트: 웹문서를 제어하는 기능을 가진 스크립트 언어
 *변수 : 변하는 수, 어떠한 값을 저장하는 저장소
 *호이스트 현상: 모든 값을 가진 것은 레벨과 상황에맞게 끌어오려지는 현상이 존재.
              : 함수, 변수명이 상단으로 끌어어올려짐.
 *형타입(자료형): 기본형과 참조형이존재
      - 기본형: 숫자, 문자, 판단비교, undefined/null
      - 참조형: 객체(배열, 객체), 함수

 *연산자: 사칙연산( +, -, *, /, %)
         비교연산( ==(동위비교연산), ===(동치비교연산), !=, !==, <, >, <=, >=) 
           - ==(숫자 1, 문자 '1'이 같은것으로 인지하는 것으로 비교, 실제로 사용을 권장하지 않는다.)
           - ===(숫자1, 문자 '1'은 전혀 다른것으로 인지하는것으로 비교, 실제 권장)
         논리연산자(||, &&)
         산술연산자(+=, -=, *=, /=, %=, 후치++, ++전치, 후치--, --전치)
         비트연산자(>>, <<, >>>, <<<) : 2진수로 변환하여 처리하는 기능, 당장은 버리세요~
-----------------------------------------------------------------------------------------------
 *문법: 조건문(단항)
         - if (조건비교){
             해당조건이 참인경우에 실행
           }else if (최초의 조건이 거짓인경우 다시 비교){
             다시비교한내용이 참인경우 실행
           }else if (위 조건이 거짓인경우 다시 비교){
             비교한 내용이 참인경웨 실행
           }else {
             위 모든상황에 거짓인경우에 실행
           }
        
        반복문
         - for(최초의 선언(처음만 사용); 선언된변수의 조건(추가연산후에도 비교); 반복문을 수행후에 추가연산){
            선언된 변수의 조건이 참인경우에 실행(조건이 거짓으로 변할때까지 반복 수행)
         }
--------------------------------------------------------------------------------------------------------
 *객체: 
    - object: 객체는 다양한 자료를 모아서 처리할때 사용, 속성(attribute)의 형태로 
             속성명(property), 값(value)으로 구분해서 사용, 
             각각의 속성을 구분은 콤마(,)로 구분,
             해당하는 값을 가져올때에는 변수이름뒤에 '.'을 붙이고뒤에 속성명을 작성하거나,
             변수이름뒤에 '[]'를 사용하여 내부에 속성명을 작성해서 불러온다.

             ex)
               var obj = {apple  : 'red', 
                          banana : 'yellow',
                          peach  : 'pink',
                         };
              console.log( obj.banana );      // 결과: yellow 도출
              console.log( obj['banana'] );   // 결과: yellow 도출
 *배열:
    - array: 배열은 객체의 일종으로 처리되는 아이로, 여러개의 항목을 리스트형식으로 나열하는 것.
             값(value)만 존재한다.
             각각의 값은 콤마(,)로 구분
             변수이름뒤에 '[]'를 사용하여, 순번을 입력하여 불러온다. (순번은 0부터 사용)

             ex)
               var arr = ['apple', 'banana', 'peach', 'grape', obj];
               console.log( arr[0] );    //결과: apple 도출
 *함수:
    - function: 함수는 다양한 식을 반복해서 사용하는것을 방지하고, 
                좀더 간단하게 수행 명령할 수 있도록 복합기능을 묶어놓은 형태를 의미.
                가급적 일반사용시 함수 표현식(변수를 선언하고 함수를 담는기법)을 사용할것을 권장
                매개변수(인수)와 리턴(return)을 명확하게 사용하자
                함수를 호출할때에는 함수명(변수명)을 작성후 뒤에 이어서(띄어쓰기없이) '()'를 붙여 사용.

                var Fn = function( 매개변수작성 ){
                  함수내부에 사용할 다양한 식을 작성
                  return 마지막부분에 최종으로 결론을 도출시킬값을 처리
                  };

                Fn(매개변수값);

------------------------------------------------------------------------------------------------------
* ';'을 작성하는 위치......
   변수선언 후 종료시 마지막에,
   변수의 값을 변경후 마지막에(변수가 있는 곳의 마무리...)
   함수를 실행하고 마무리
   어떠한 기능을 수행명령을 하고 마무리할때 사용

*/