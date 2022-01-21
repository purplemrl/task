//if statement
const yourAge=10;
const isOldEnough= yourAge>=18;
if(isOldEnough){
    console.log(`you can get driving license`);
} else{
    const licenseage= 18-yourAge;
    const check=`you can get your license ${licenseage} year(s) later ✌`; //emoji : windose + .
    console.log(check);
}

const birthYear=1995;
let century;
if(birthYear<=2000){
    century=20;
} else{
    century=21;
}
console.log(century);