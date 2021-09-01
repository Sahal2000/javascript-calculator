let plus = 0,minus = 0,mul = 0,div = 0,dot = 0,dotDivider = 1;
let displayNumber,displayNumber2,firstValue = 0,secondValue = 0,operator = 0;

function inputNumber(value)
{
    if(!operator)
    {
        if(!dot)firstValue = firstValue * 10 + value;
        else 
        {
            dotDivider /= 10;
            value *= dotDivider;
            firstValue += value;
        }
        document.getElementById("display").innerText = firstValue;
    }
    else
    {
        if(!dot)secondValue = secondValue * 10 + value;
        else 
        {
            dotDivider /= 10;
            value *= dotDivider;
            secondValue += value;
        }
        displayNumber = displayNumber2 + secondValue.toString();
        document.getElementById("display").innerText = displayNumber;
    }
}

function acButton()
{
    plus = 0,minus = 0,mul = 0,div = 0;
    firstValue = 0,secondValue = 0,operator = 0;
    displayNumber = " ",displayNumber2 = " ";
    document.getElementById("display").innerText = " ";
}

function delButton()
{
    if(!operator)
    {
        let temp = firstValue % 10;
        firstValue /= 10;
        firstValue = firstValue - temp/10;
        document.getElementById("display").innerText = firstValue;
    }
    else
    {
        let temp = secondValue % 10;
        secondValue /= 10;
        secondValue = secondValue - temp/10;
        displayNumber = displayNumber2 + secondValue.toString();
        document.getElementById("display").innerText = displayNumber;
    }
}

function dotButton()
{
    dot = 1;
    let temp = document.getElementById("display").innerText;
    document.getElementById("display").innerText = temp + ".";
}

function operateNumber(operation)
{
    dot = 0,dotDivider = 1;
    if(operation=='+')plus = 1;
    else if(operation=='-')minus = 1;
    else if(operation=='*')mul = 1;
    else if(operation=='/')div = 1;
    operator = 1;
    displayNumber = firstValue.toString();
    displayNumber = displayNumber + operation;
    document.getElementById("display").innerText = displayNumber;
    displayNumber2 = displayNumber;
}

function equalFunction()
{
    dot = 0,dotDivider = 1;
    operator = 0;
    if(plus)
    {
        let temp = firstValue + secondValue;
        document.getElementById("display").innerText = temp.toFixed(4);
        firstValue = firstValue + secondValue;
        secondValue = 0;
        plus = 0;
    }
    else if(minus)
    {
        let temp = firstValue - secondValue;
        document.getElementById("display").innerText = temp.toFixed(4);
        firstValue = firstValue - secondValue;
        secondValue = 0;
        minus = 0;
    }
    else if(mul)
    {
        let temp = firstValue * secondValue;
        document.getElementById("display").innerText = temp.toFixed(4);
        firstValue = firstValue * secondValue;
        secondValue = 0;
        mul = 0;
    }
    else 
    {
        let temp = firstValue / secondValue;
        document.getElementById("display").innerText = temp.toFixed(4);
        firstValue = firstValue / secondValue;
        secondValue = 0;
        div = 0;
    }
}