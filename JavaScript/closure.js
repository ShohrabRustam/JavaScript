function x()
{
var a= 20;
function y()
{
    console.log(a);
}
// y();
return y;
}
var z = x();
z();
or 
x()(); 