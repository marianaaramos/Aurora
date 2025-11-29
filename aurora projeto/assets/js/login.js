const form = document.getElementById('loginForm')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        localStorage.setItem('loggedEmail', JSON.stringify({email})) 
        localStorage.setItem('loggedPassword', JSON.stringify({password}))
    
        alert('Salvo no LocalStorage')

        window.location.href = 'index.html'
    })