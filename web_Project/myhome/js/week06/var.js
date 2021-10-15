// 4.변수(variable) : 데이터를 저장하는 기억장소, 자료형을 입력하지 않음
// dynamic data typing(변수에 값이 대입되는 순간, 자료형이 결정, 선언하지 않아도 사용할 수 있음)
// let과 var 구분
// 자료형 : number(수치형), string(문자열), boolean(불형), object(객체형)
// typeof() : 자료형을 확인
let age = 100; // global variable(글로벌변수)
{
let age = 20; //local variable(로컬변수)
console.log(age);
age = 30
console.log(age); // 20,30이 출력됨(콘솔창에)
}
console.log(age); /*블럭 설정 -> referenceError
                    age -> local variable(블럭 안에서만 통용되는 변수)
                    블럭 밖에서 conosle했기 때문에 age변수는 정의되어 있지 않음 */

b = 70;
var b;
console.log("b="+b); //변수를 선언하기 전에 값을 줬는데도 값이나옴
b = "검정";
console.log("b="+b); //b=검정 이라고 출력됨 -> 막 바뀌는건 위험하다 !!

let c;
c = 100;
console.log("c="+c); //ReferenceError:Cannot access 'c' before initialization  =>  선언하고 변수사용
console.log(typeof(c)); //number