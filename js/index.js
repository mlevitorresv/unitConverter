var result;
const inputResult = document.getElementById("inputResult");

function changeUnit(value){
    switch(value.value){
        case "km-miles":
            document.getElementById("unit").value="km";
        break;
        case "miles-km":
            document.getElementById("unit").value="miles";
        break;
        case "foot-m":
            document.getElementById("unit").value="foot";
        break;
        case "m-foot":
            document.getElementById("unit").value="m";
        break;
        case "cm-inch":
            document.getElementById("unit").value="cm";
        break;
        case "inch-cm":
            document.getElementById("unit").value="inch";
        break;
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