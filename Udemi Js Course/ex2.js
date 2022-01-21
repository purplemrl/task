//mark mass and height
const markM=78;
const markH=1.69;

//john mass and height
const johnM=92;
const johnH=1.95;

//BMI
const markB= markM/markH**2
const johnB=johnM/johnH**2;

//if check
if(markB > johnB){
    console.log("mark's BMI is higher than john",`mark's BMI (${markB}) is higher than john's BMI (${johnB})`);
} else {
    console.log("john's BMI is higher than mark", `john's BMI (${johnB}) is higher than mark's BMI (${markB})`);
}