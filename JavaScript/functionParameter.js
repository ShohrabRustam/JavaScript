function fun1(string1,string2){
    console.log(string1,string2);
}
fun1("hello",15);

function fun2(string1,string2=0){
    console.log(string1,string2);
}
fun1('okay',true);
fun2("hello");
fun2(1,'got');
