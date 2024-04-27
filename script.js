var fundo_slider = document.getElementById("fundo")
var fundos = ["url(assets/1.png)", "url(assets/2.png)", "url(assets/3.png)", "url(assets/4.png)", "url(assets/5.png)"]
var circulos = document.querySelectorAll(".circulo")
var i = 0

circulos[i].classList.toggle("circulo_selecionado")
fundo_slider.style.backgroundImage = fundos[i]

function mudaFundo(lado){
    if(lado == "esquerdo"){
        circulos[i].classList.remove("circulo_selecionado")
        i--
        if(i < 0){
            i = 4
        }
    }else if(lado == "direito"){
        circulos[i].classList.remove("circulo_selecionado")
        i++
        if(i > 4){
            i = 0
        }
    }
    circulos[i].classList.toggle("circulo_selecionado")
    fundo_slider.style.backgroundImage = fundos[i]
}

