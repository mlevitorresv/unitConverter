function changeUnit(){
    const inputUnit = document.getElementById("unit");
    switch(getSelected()){
        case "km-miles":
            inputUnit.value="km";
            inputResultUnit.value= "miles";
        break;
        case "miles-km":
            inputUnit.value="miles";
            inputResultUnit.value= "km";
        break;
        case "foot-m":
            inputUnit.value="foot";
            inputResultUnit.value= "m";
        break;
        case "m-foot":
            inputUnit.value="m";
            inputResultUnit.value= "foot";
        break;
        case "cm-inch":
            inputUnit.value="cm";
            inputResultUnit.value= "inch";
        break;
        case "inch-cm":
            inputUnit.value="inch";
            inputResultUnit.value= "cm";
        break;
    }
    convert();
}


function convert(){
    var result;
    const inputResult = document.getElementById("inputResult");
    const inputResultUnit = document.getElementById("inputResultUnit");
    const quantity = document.getElementById("quantity").value;

    switch(getSelected()){
        case "km-miles":            
            result = quantity * 0.621371;
            inputResult.value=result.toFixed(2);
        break;
        case "miles-km":      
            result = quantity * 1.60934;
            inputResult.value=result.toFixed(2);
        break;
        case "foot-m":           
            result = quantity * 0.3048;
            inputResult.value=result.toFixed(2);
        break;
        case "m-foot":           
            result = quantity * 3.28084;
            inputResult.value=result.toFixed(2);
        break;
        case "cm-inch":
            result = quantity * 0.393701;
            inputResult.value=result.toFixed(2);
        break;
        case "inch-cm":
            result = quantity * 2.54;
            inputResult.value=result.toFixed(2);
        break;
    }
}

function exchangeUnits(){
    const values = document.getElementById("unitsSelector");
    const quantity = document.getElementById("quantity");
    const result = document.getElementById("inputResult");
    const userValue = quantity.value;
    const resultValue = result.value;

    switch(getSelected()){
        case "km-miles":            
            values.options.selectedIndex = 1;
            quantity.value = resultValue;
            result.value = userValue;
        break;
        case "miles-km":      
            values.options.selectedIndex = 0;
            quantity.value = resultValue;
            result.value = userValue;
        break;
        case "foot-m":           
            values.options.selectedIndex = 3;
            quantity.value = resultValue;
            result.value = userValue;
        break;
        case "m-foot":           
            values.options.selectedIndex = 2;
            quantity.value = resultValue;
            result.value = userValue;
        break;
        case "cm-inch":
            values.options.selectedIndex = 5;
            quantity.value = resultValue;
            result.value = userValue;
        break;
        case "inch-cm":
            values.options.selectedIndex = 4;
            quantity.value = resultValue;
            result.value = userValue;
        break;
    }
    changeUnit();
}

//function for save conversions
function save(){
    //Create elements for get or modified values
    const inputQuantity = document.getElementById("quantity");
    const inputResult = document.getElementById("inputResult");
    const inputUnit = document.getElementById("unit");
    const inputResultUnit = document.getElementById("inputResultUnit");

    //Getting values from elements
    const unit = inputUnit.value;
    const resultUnit = inputResultUnit.value;
    const result = inputResult.value;
    const quantity = inputQuantity.value;

    //creating <p> for shows info
    const p = document.createElement("p");
    p.setAttribute("class", "infoSaved")
    const text = document.createTextNode(quantity + " " + unit + " → " + result + " " + resultUnit);
    p.appendChild(text);

    //CSS for <p>
    p.style.backgroundColor = "#acaaaa";
    p.style.padding = "1%";
    p.style.color = "black";
    p.style.borderRadius = "10px";
    p.style.width = "48%";
    p.style.display = "inline-block"

    const divSaved = document.getElementById("saved");
    divSaved.appendChild(p);

    //clearing input
    inputQuantity.value="";
    convert();
    
}


//function for get the selected option in <select> element
function getSelected(){
    const units = document.getElementById("unitsSelector").options.selectedIndex;

    switch(units){
        case 0:            
            return "km-miles"
        break;
        case 1:      
            return "miles-km"
        break;
        case 2:           
            return "foot-m"            
        break;
        case 3:           
            return "m-foot"
        break;
        case 4:
            return "cm-inch"
        break;
        case 5:
            return "inch-cm"
        break;
    }
}