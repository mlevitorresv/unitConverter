var result;
const inputResult = document.getElementById("inputResult");
const inputUnit = document.getElementById("unit");

function changeUnit(value){
    switch(value){
        case "km-miles":
            inputUnit.value="km";
        break;
        case "miles-km":
            inputUnit.value="miles";
        break;
        case "foot-m":
            inputUnit.value="foot";
        break;
        case "m-foot":
            inputUnit.value="m";
        break;
        case "cm-inch":
            inputUnit.value="cm";
        break;
        case "inch-cm":
            inputUnit.value="inch";
        break;
        default:
            inputUnit.value="=";


    }
}


// function convert(units, n){
//     //onchange() de input de cantidad

//     switch(units){
//         case "km-miles":
//             result = n * 0,621371;
//             console.log(result);
//             inputResult.innerHTML=result;
//         break;
//         case "miles-km":

//         break;
//         case "foot-m":

//         break;
//         case "m-foot":

//         break;
//         case "cm-inch":

//         break;
//         case "inch-cm":

//         break;
        
//     }

// }