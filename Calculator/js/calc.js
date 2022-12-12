// display(function)

function display(val) {
    document.getElementById('result').value += val
    return val
}

//solve function

function solve() {
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y;
}

//clearscreen function

function clearscreen(){
    document.getElementById('result').value ="0"
}