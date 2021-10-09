function myObject()
{
    var a = 300;
    this.x = 100;
    this.y = 200;
    this.z = function(){
        return this.x + this.y;
    }
}
    var Obj = new myObject();
    console.log(Obj.a);
    console.log(Obj.x);
    console.log(Obj.y);
    console.log(Obj.z());