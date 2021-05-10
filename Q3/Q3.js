function temp_converter(type,value){
    if (type == 1){
        let result = (value * 1.8)+32
        document.write("Celsius to Fahrenheit conversion = " + result  + '°F')
    }else if(type == 2){
        let result = (value -32)/1.8
        document.write("Fahrenheit to Celsius conversion = " + result  + '°C')
    }

}

let conversion_Type = prompt(`Enter 1 for Celsius to Fahrenheit and 2 for Fahrenheit to Celsius`)
let value = prompt("enter value to be converted")

temp_converter(conversion_Type,value)