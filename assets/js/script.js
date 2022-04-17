const btn = document.querySelector("#send");
const view = document.getElementById("#resultado");


btn.addEventListener("click", function(){
    const nome = document.querySelector("#peso");
    const nome2 = document.querySelector("#altura");
    const value = (nome.value/(nome2.value**2))
    const view = document.getElementById("resultado").innerHTML = value;

});


