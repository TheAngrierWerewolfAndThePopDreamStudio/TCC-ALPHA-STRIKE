// * ------------------------------------- FORMULÁRIO LOGUIN/CADASTRO ---------------------------------------------\\
// ~ Felipe ~ \\
// ~ Wanderson ~ \\
// ^ Modificado: 11/05/2024 ^ \\

// ? A mudança de Login para Cadastro não estava funcionando antes por que o modal de cadastro não era fechado antes de abrir o modal de login. ? \\
// ? Tentei usar o formulário em outras páginas, mas não funcionou. ? \\
// ?  Tentei usar outras ids no botão Entrar de cada página e no querySelector, mas não funcionou ? \\
// ? O Login/Cadastro não abria em outras páginas por que precisave de um arquivo JS separado(?). ? \\

document.addEventListener("DOMContentLoaded", function() 
{
    // Função para abrir o modal de login
    function abrirModalLogin() 
    {
        var loginDialog = document.getElementById("loginDialog");
        loginDialog.showModal();
    }

    // Função para abrir o modal de cadastro
    function abrirModalCadastro() 
    {
        var signupDialog = document.getElementById("signupDialog");
        signupDialog.showModal();
    }

    // Função para fechar o modal de cadastro
    function fecharModalCadastro() 
    {
        var signupDialog = document.getElementById("signupDialog");
        signupDialog.close();
    }

    // Evento de clique no botão "Entrar" na navbar e no link "Login" dentro do formulário de cadastro
    document.querySelectorAll("#entrar, .login-link").forEach(function(elemento) 
    {
        elemento.addEventListener("click", function(event) 
        {
            event.preventDefault(); // Previne o comportamento padrão do link
            fecharModalCadastro(); // Fecha o modal de cadastro
            abrirModalLogin(); // Abre o modal de login
        });
    });

    // Evento de clique no link "Inscrever-se" dentro do formulário de login
    document.querySelector(".signup-link").addEventListener("click", function(event) 
    {
        event.preventDefault(); // Previne o comportamento padrão do link
        abrirModalCadastro(); // Abre o modal de cadastro
    });

    // Função para fechar o modal de login
    function fecharModalLogin() 
    {
        var loginDialog = document.getElementById("loginDialog");
        loginDialog.close();
    }

    // Função para fechar o modal de cadastro
    function fecharModalSignup() 
    {
        var signupDialog = document.getElementById("signupDialog");
        signupDialog.close();
    }

    // Evento de clique na imagem de fechar do modal de login
    document.querySelector(".fechar_modal_login").addEventListener("click", function() 
    {
        fecharModalLogin(); // Chama a função para fechar o modal de login
    });

    // Evento de clique na imagem de fechar do modal de cadastro
    document.querySelector(".fechar_modal_signup").addEventListener("click", function() 
    {
        fecharModalSignup(); // Chama a função para fechar o modal de cadastro
        fecharModalLogin();
    });
});