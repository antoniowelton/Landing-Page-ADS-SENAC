// Script leve para menu responsivo e formulário 
    
        // Lógica simples de alternância do menu mobile
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Simulação de envio do formulário de contato
        function handleForm(event) {
            event.preventDefault();
            alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso. Em breve retornarei.');
            document.getElementById('contactForm').reset();
        }
    