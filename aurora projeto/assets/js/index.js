let slideIndex = 0  
showSlides()        

function showSlides() {
  let slides = document.getElementsByClassName("carousel-image")  

  let n = slides.length 

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"  
    }
    slideIndex = (slideIndex + 1) % n

    slides[slideIndex].style.display = "block"  

    setTimeout(showSlides, 2000)
  }

  function openTry () {
    window.location.href = "teste.html" 
  }


  function projects () {
    window.open('projetos.html', '_blank')  
  }


  function openCatalog () {
    window.location.href = "catalogo.html"
  }


  function buttonFaq (event) {
    event.preventDefault()  

    const message = document.getElementById("message")

    message.textContent = "Nossa equipe enviará a resposta à sua pergunta por email o mais rápido possível!"
    message.style.color = "white"
  }