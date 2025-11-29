function helpWarning () {
        const low = document.getElementById("low").checked
        const medium = document.getElementById("medium").checked
        const high = document.getElementById("high").checked

        const message = document.getElementById("message")

        if (low) {
            message.textContent = "Mantenha-se atenta e evite lugares isolados."
            message.style.color = "green"
        }

        else if (medium) {
            message.textContent = "Seus contatos de confiaça estão sendo notificados."
            message.style.color = "orange"
        }

        else if (high) {
            message.textContent = "Sua localização já foi enviada para a base polical mais próxima, a ajuda chegará em breve!"
            message.style.color = "red"
        }

        else {
            message.textContent = "Selecione uma opção."
            message.style.color = "grey"
        }
    }

    function openPlaystore () {
          window.open("https://play.google.com/store/games?hl=pt_BR", "_blank")
      }

      function openApplestore () {
          window.open("https://www.apple.com/br/app-store/", "_blank")
      }