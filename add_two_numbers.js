function doSomething(){
    let a = document.getElementById('InputA').value;
    let b = document.getElementById('InputB').value;
    document.getElementById("valueA").innerHTML = a;
    document.getElementById("valueB").innerHTML = b;
    document.getElementById("valueC").innerHTML = Number(a) + Number(b);
}