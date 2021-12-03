/*Array(배열)은 한개의 변수명에 여러 개의 값을 순차적으로 저장하는 데이터묶음(데이터 원소는 index로 구분)
배열선언1 : const array_name = [itme1, item2, ...];
배열선언2 : new 키워드 사용, const array_name = new Array(item1, item2, ...);
배열원소 : index로 구분, index는 0부터 시작*/

// // 배열선언
const a = [40,50,80,100]; //데이터묶음
// // a.length = 4
// // 배열선언 (new 이용)
const b = new Array(70,10,40,70,50); //함수, 생성자 메소드 => 괄호
// // console.log(a);
// // console.log(b);
// //배열원소는 index로 구분
// // console.log(a[2]);
// hap = 0;
// for (let i = 0; i < a.length; i++){  // 1) 제어변수를 사용
//     // console.log(a[i]);
//     hap += a[i];
// }
// // console.log("합="+hap);

// sum =0 ;
// for (let val of b){  // 2) of를 사용 b에 있는 원소 하나하나 가져와서 val에 넣음. 배열 원소가 더이상 없을때까지 반복
//     console.log(val);
//     sum += val;
// }
// // console.log("b의 합=>" + sum);


/* 추가, 삭제, 수정
추가 : push(마지막에 아이템을 추가), unshift(맨앞에 아이템을 추가)

삭제 : pop(마지막 아이템을 삭제), shift(맨앞 아이템을 삭제)
shift와 unshift는 속도가 느림

검색
indexOf : 값이 있는 index 를 찾음
inclueds :  값이 있으면 True, 아니면 False*/

a.push(90);
a.push(99);
console.log(a);
a.unshift(22);
console.log(a);
console.log(a.indexOf(80)); // => 3
console.log(a.indexOf(1000)); // => -1 : 인덱스가 마이너스 값을 가지면 배열에 원소가 없는것
console.log(a.includes(80)); // => true
console.log(a.includes(1000)); // => false

