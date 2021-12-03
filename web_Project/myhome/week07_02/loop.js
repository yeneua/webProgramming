/* 4.반복문 (for, while, do~while문)
   1)for (초기값; 조건식; 증감) {
         반복실행될 명령문 코드}  ㅋ*/


const data=parseInt(prompt("데이터입력",0)) //초기값을 0으로 준 것
let sum = 0; //합을 구하는 변수. 초기값0 -> 데이터타입 number로 됨. global변수
for(let i=1; i<=data; i++){ // for([초기값;][조건;][증가식])
    sum+=i;
}
console.log("합은=>" + sum); // 연결 +

//alert("합은"+sum); // alert(대화상자)로 출력
//document.getElementById("result").innerHTML="합="+sum; // errer : set properties -> 순서대로니까 html문서에서 script내용을 #result 밑에 넣어줘야됨. 해당하는 body가 만들어지고 난 뒤 수행


/* 2)for(변수 of 객체) {
    반복실행될 명령문 코드}   ES6*/
const a = [40,70,90,100,30]; // const : 상수(변화X), a라는 객체는 데이터 그룹에 해당하는 내용을 가리킴
let hap=0; //합 구하기
for(let val of a){ //a에서 원소 하나를 가져와 val에 넣어라
    hap += val;
}
console.log('결과:'+hap);


/* 3)while(조건식) {
    반복실행될 명령문 코드}
 => 조건이 참(True)이면 반복수행, false이면 빠져나감 
 무한loop인 경우도 있음 */
let i=1; // i는 위에 for문 안에서만 선언되어 있어서 local변수임. 에러 안남
hap=0; //syntax error: 이미 선언되어 있음. let 선언 안하고 그냥 초기화만 해줘야함
while(i<=data){
    hap+=i;
    i++;
}
console.log(`1~${data}까지 합 = ${hap}`); //백틱


/* 4) do{
    반복실행될 명령문 코드}
    while조건식);  */



// 기타 : break, continue;
i = 1; //31행에서 let으로 선언했기 때문에 초기화
hap =0;
while(i<= data){
    hap +=i;
    if(hap>=50) break; //hap이 50이상이면 break
    i++;
}
console.log(`합이 50이 넘는${i}값 합= ${hap}`);

i = 0;
hap =0;
while(i< data){
    i++;  // 순서중요
    if(i%2==0) continue; //2로 나눴을 때 나머지가 0이면 위로 올라감. continue형태니까 증감식을 countinue보다 먼저 써줘야함
    hap +=i;
}
console.log(`홀수의 합= ${hap}`);