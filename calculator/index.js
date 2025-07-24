var display=document.getElementById("input")

function appendtodisplay(input){
    display.value += input;
}

function cleardis(){
    display.value= "";
}

function calculate(){
    display.value=eval(display.value);
}

