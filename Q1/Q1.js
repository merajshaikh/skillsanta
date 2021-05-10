// accepting numbers from user using prompt
num1 = prompt("enter 1st number");
num2 = prompt("enter 2nd number");
num3 = prompt("enter 3rd number");

// printing largest from above
if(num1 > num2 & num1 > num3){
    document.write(num1 + " is largest")
}else if(num2 > num1 & num2 > num3){
    document.write(num2 + " is largest")
}else{
    document.write(num3 + " is largest")
}