
const display = document.getElementById("display");
const historyList = document.getElementById("history-list");


function appendToDisplay(input){
    display.value += input;


}



function clearDisplay(){

    display.value = ""


}


function calcDisplay(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Hi";
    }
}

function updateHistory(expression, result){

    const historyItem = document.createElement('li');
            historyItem.textContent = `${expression} = ${result}`;
            historyList.appendChild(historyItem);

}