function calculate(){
    var n1,n2,res;
    n1 = document.getElementById("txtN1");
    n2 = document.getElementById("txtN2");
    res = document.getElementById("spanResult");
    res.innerText = Number(n1.value)+Number(n2.value);
}