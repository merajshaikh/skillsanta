function call(msg,callback){
    const msg1 =  "hello " + msg 
    callback(msg1)
}

function display(str){
    alert(str)
}
const user_Name = prompt("Enter your name")
call(user_Name, display)