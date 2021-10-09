// var redius = [5,6,3,4];
// function calculateArea(radius){
//     let output = []; 
//     for (let i=0;i<radius.length;i++){
//     output.push (Math.PI*radius[i]*redius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(redius));

// function calculateCercumference(redius){
//     let output = []; 
//     for (let i=0;i<redius.length;i++){
//     output.push (2*Math.PI*redius[i]);
//     }
//     return output;
// }
// console.log(calculateCercumference(redius));

// function calculateDiameter(redius){
//     let output = []; 
//     for (let i=0;i<redius.length;i++){
//     output.push (2*redius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(redius));


var redius = [5,6,3,4];

const area = function(redius){
    return Math.PI*redius*redius
}

var cercumference = function (redius){
return 2* Math.PI*redius;
}

const diameter = function(redius)
{
    return 2*redius;
}
 
const calculate = function (redius,logic){
const output  = [];
for (let i=0;i<redius.length;i++)
{
    output.push(logic(redius[i]));
}
return output;
}

console.log(calculate(redius,area));







