let counter_a = 0;
let counter_e = 0;
let counter_i = 0;
let counter_o = 0;
let counter_u = 0;

const user_input = prompt("Enter any string").toLowerCase();
const splitted_input = [...user_input];

splitted_input.forEach(element => {
    if(element == 'a'){
        counter_a += 1
    }else if(element == 'e'){
        counter_e += 1
    }else if(element == 'i'){
        counter_o += 1
    }else if(element == 'o'){
        counter_o += 1
    }else if(element == 'u'){
        counter_u += 1
    }
});

document.write("A: " + counter_a)
document.write("E: " + counter_e)
document.write("I: " + counter_i)
document.write("O: " + counter_o)
document.write("U: " + counter_u)