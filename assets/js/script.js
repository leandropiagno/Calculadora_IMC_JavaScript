//Calculo de IMC.

const btn = document.querySelector("#send");


btn.addEventListener("click", function(e){
    e.preventDefault();

    const nome = document.querySelector("#peso");
    const nome2 = document.querySelector("#altura");
    const value = (nome.value/(nome2.value**2))

    document.getElementById("resultado").innerHTML = value.toFixed(1);

    

});







