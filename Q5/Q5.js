function palindrome(word){
    const len = word.length;
    for(let i = 0; i < (len/2); i++){
        if (word[i] != word[len - 1 - i] ){
            return(`${word} : its not palindrome`)
        }
    }return(`${word} : its palindrome`)
}

const word = prompt("Enter any String")
let check = palindrome(word)
alert(check)