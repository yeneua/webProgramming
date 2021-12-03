/* class는 fields(data)와 method(기능.function)로 구성(자바스크립트에서 클래스)
class와 object 
class는 template(형식)
object는 class의 instance => 메모리에 올라감. 메모리게 올라가서 사용할 수 있게 한 것
object 선언
    const name = { name1 : value1,  name2 : vlaue2, ....} //object data
object 속성 사용
    object이름.속성 또는 object이름["속성"]
object 메소드 사용
    object이름.method()*/

const product = {
    designer : "홍길동", // field
    price : 1500, //field
    name : "액자", //field
    print : function(){ //method
        console.log(this.designer+","+this.price+","+this.name); // this:현재객체를 의미
    }
}
console.log(product.price+","+product["name"]);
product.print(); //method사용