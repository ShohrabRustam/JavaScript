function a()
{
    //local memory space
console.log(b + "  access the gobal variable  in side the b() function ");
c();
function c()
{
    console.log(b +" access global variable for inside the function c() which exist inside the function b");
}
}
 
var b = 10;
console.log(b + "  for global access");
a();