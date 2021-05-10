let user_input = prompt("Enter you dob in format DD/MM/YYYY")
dob(user_input)


function dob(user_input){
        let split_dob = user_input.split("/")
        let day = split_dob[0];
        let month = split_dob[1];
        let year = split_dob[2];
        let d = new Date();
        let age = d.getFullYear() - year 

        if (age > 18 & age < 44){
            window.open('https://selfregistration.cowin.gov.in')
        } 
}

