function calculate() {
    var a=document.getElementById("screen").value;
    var b=eval(a);
    document.getElementById("screen").value=b;


}


function clearC() {
    document.getElementById("screen").value="";
}

function del() {
    document.getElementById("screen").value;
}

function display(value) {
    document.getElementById("screen").value +=value;

}

function equation(val) {

}