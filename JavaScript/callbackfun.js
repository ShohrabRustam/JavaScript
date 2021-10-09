setTimeout(function (){
    console.log("Hello Timer");
},3000);

function x(y){
    console.log("this is x function");
    y();
}
 
x(function y()
{
    console.log("this is function y");
});

function attachEventListeners()
{
    let count = 0;
    document.getElementById('clickme').addEventListener('click',function(){
        console.log('you clicked :', ++count);
    })
}
attachEventListeners();