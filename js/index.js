var result;
const inputResult = document.getElementById("inputResult");



function convert(units, n){
    //onchange() de input de cantidad

    switch(units){
        case "km-miles":
            result = n * 0,621371;
            inputResult.attribute=result;
        break;
        case "miles-km":

        break;
        case "foot-m":

        break;
        case "m-foot":

        break;
        case "cm-inch":

        break;
        case "inch-cm":

        break;
        
    }

}