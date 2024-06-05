// * 2 - Animação automática do Carrossel_1 * //

document.addEventListener("DOMContentLoaded", function () {
  let slideAtual = 0;
  const slides = document.querySelectorAll(".C1_Itens");

  function proximoSlide() {
    slides[slideAtual].style.display = "none";
    slideAtual = (slideAtual + 1) % slides.length;
    slides[slideAtual].style.display = "block";
  }

  setInterval(proximoSlide, 18000); // Troca os slides a cada 18 segundos
});

// * 2 - Animação com as setas do Carrossel_1 * //

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides(slideIndex);

  // Função para avançar ou retroceder os slides
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Função para mostrar os slides
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("C1_Itens");

    // Verificar se slideIndex está fora dos limites
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    // Ocultar todos os slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Exibir o slide atual
    slides[slideIndex].style.display = "block";
  }

  // Adicionar evento de clique para os botões de avançar e voltar
  document.querySelector(".Seta_Voltar").addEventListener("click", function () {
    plusSlides(-1);
  });

  document
    .querySelector(".Seta_Avançar")
    .addEventListener("click", function () {
      plusSlides(1);
    });

  // Chamar a função para trocar de slide automaticamente a cada 18 segundos
  setInterval(function () {
    plusSlides(1);
  }, 18000);

  // Adicionar evento de escuta de teclado para mudar os slides com as setas
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
      // Seta esquerda
      plusSlides(-1); // Retrocede um slide
    } else if (event.keyCode === 39) {
      // Seta direita
      plusSlides(1); // Avança um slide
    }
  });
});

// * 4 - Animação do Carrossel_2 * //

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".C2_slides_1");

  function mostrarSlide(n) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block";
  }

  document
    .querySelector(".Seta_Avançar_C2")
    .addEventListener("click", function () {
      slideIndex++;
      mostrarSlide(slideIndex);
    });

  document
    .querySelector(".Seta_Voltar_C2")
    .addEventListener("click", function () {
      slideIndex--;
      mostrarSlide(slideIndex);
    });
});

// * 5 - botões_P_1 do Pricing_1 * //

// Função para mostrar os cards desejados
function mostrarCards(classe) {
  // Oculta todos os conjuntos de cards
  document
    .querySelectorAll(".cards_P_Open, .cards_P_Eventos, .cards_P_Treinamentos")
    .forEach(function (el) {
      el.style.display = "none";
    });
  // Exibe apenas o conjunto de cards correspondente à classe passada como parâmetro
  document.querySelector("." + classe).style.display = "flex";
}

// Mostra os cards de OPEN quando a página carregar
window.onload = function () {
  mostrarCards("cards_P_Open");
};

// Adiciona evento de clique para o botão OPEN
document
  .querySelector(".btn_P_1_Opçao_1")
  .addEventListener("click", function () {
    mostrarCards("cards_P_Open");
  });

// Adiciona evento de clique para o botão EVENTO
document
  .querySelector(".btn_P_1_Opçao_2")
  .addEventListener("click", function () {
    mostrarCards("cards_P_Eventos");
  });

// Adiciona evento de clique para o botão TREINAMENTO
document
  .querySelector(".btn_P_1_Opçao_3")
  .addEventListener("click", function () {
    mostrarCards("cards_P_Treinamentos");
  });

// * 8 - Botões do Carrossel_3 * //

// Função para mostrar o slide C3_01 e o Conteudo_C3_1 quando btn_q_1 for clicado
function mostrarSlideConteudo1() {
  // Oculta todos os slides e conteúdos do Carrossel_3
  var slides = document.querySelectorAll(".C3_slides");
  var conteudos = document.querySelectorAll(".Box_C3 > div");

  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  conteudos.forEach(function (conteudo) {
    conteudo.style.display = "none";
  });

  // Mostra o slide C3_01 e o Conteudo_C3_1
  var slideToShow = document.querySelector(".C3_01");
  var conteudoToShow = document.querySelector(".Conteudo_C3_1");
  if (slideToShow && conteudoToShow) {
    slideToShow.style.display = "block";
    conteudoToShow.style.display = "block";
  }
}

// Adiciona funcionalidade de clique ao btn_q_1
document.querySelector(".btn_q_1").addEventListener("click", function () {
  mostrarSlideConteudo1();
});

// Função para mostrar o slide C3_02 e o Conteudo_C3_2 quando btn_q_2 for clicado
function mostrarSlideConteudo2() {
  // Oculta todos os slides e conteúdos do Carrossel_3
  var slides = document.querySelectorAll(".C3_slides");
  var conteudos = document.querySelectorAll(".Box_C3 > div");

  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  conteudos.forEach(function (conteudo) {
    conteudo.style.display = "none";
  });

  // Mostra o slide C3_02 e o Conteudo_C3_2
  var slideToShow = document.querySelector(".C3_02");
  var conteudoToShow = document.querySelector(".Conteudo_C3_2");
  if (slideToShow && conteudoToShow) {
    slideToShow.style.display = "block";
    conteudoToShow.style.display = "block";
  }
}

// Adiciona funcionalidade de clique ao btn_q_2
document.querySelector(".btn_q_2").addEventListener("click", function () {
  mostrarSlideConteudo2();
});

// Função para mostrar o slide C3_03 e o Conteudo_C3_3 quando btn_q_3 for clicado
function mostrarSlideConteudo3() {
  // Oculta todos os slides e conteúdos do Carrossel_3
  var slides = document.querySelectorAll(".C3_slides");
  var conteudos = document.querySelectorAll(".Box_C3 > div");

  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  conteudos.forEach(function (conteudo) {
    conteudo.style.display = "none";
  });

  // Mostra o slide C3_03 e o Conteudo_C3_3
  var slideToShow = document.querySelector(".C3_03");
  var conteudoToShow = document.querySelector(".Conteudo_C3_3");
  if (slideToShow && conteudoToShow) {
    slideToShow.style.display = "block";
    conteudoToShow.style.display = "block";
  }
}

// Adiciona funcionalidade de clique ao btn_q_3
document.querySelector(".btn_q_3").addEventListener("click", function () {
  mostrarSlideConteudo3();
});

// * ------------------------------------- FORMULÁRIO LOGUIN/CADASTRO ---------------------------------------------\\
// ? Não estava funcionando antes por que o modal de cadastro não era fechado antes de abrir o modal de login. ? \\

document.addEventListener("DOMContentLoaded", function () {
  // Função para abrir o modal de login
  function abrirModalLogin() {
    var loginDialog = document.getElementById("loginDialog");
    loginDialog.showModal();
  }

  // Função para abrir o modal de cadastro
  function abrirModalCadastro() {
    var signupDialog = document.getElementById("signupDialog");
    signupDialog.showModal();
  }

  // Função para fechar o modal de cadastro
  function fecharModalCadastro() {
    var signupDialog = document.getElementById("signupDialog");
    signupDialog.close();
  }

  // Evento de clique no botão "Entrar" na navbar e no link "Login" dentro do formulário de cadastro
  document
    .querySelectorAll("#entrar, .login-link")
    .forEach(function (elemento) {
      elemento.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        fecharModalCadastro(); // Fecha o modal de cadastro
        abrirModalLogin(); // Abre o modal de login
      });
    });

  // Evento de clique no link "Inscrever-se" dentro do formulário de login
  document
    .querySelector(".signup-link")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      abrirModalCadastro(); // Abre o modal de cadastro
    });

  // Função para fechar o modal de login
  function fecharModalLogin() {
    var loginDialog = document.getElementById("loginDialog");
    loginDialog.close();
  }

  // Função para fechar o modal de cadastro
  function fecharModalSignup() {
    var signupDialog = document.getElementById("signupDialog");
    signupDialog.close();
  }

  // Evento de clique na imagem de fechar do modal de login
  document
    .querySelector(".fechar_modal_login")
    .addEventListener("click", function () {
      fecharModalLogin(); // Chama a função para fechar o modal de login
    });

  // Evento de clique na imagem de fechar do modal de cadastro
  document
    .querySelector(".fechar_modal_signup")
    .addEventListener("click", function () {
      fecharModalSignup(); // Chama a função para fechar o modal de cadastro
      fecharModalLogin();
    });
});

// * ------------------------------------- SECURITY_LAYER/NÍVEL_1 ---------------------------------------------\\
// ^ 23/05/2024 ^ \\

// Função para verificar a senha e alterar a cor dos itens da lista
function verificarSenha() {
  // Obtém o valor da senha
  var senha = document.getElementById("senha_1").value;

  // Verifica se a senha atende aos critérios
  var possuiMinimoCaracteres = senha.length >= 20;
  var possuiLetraMinuscula = /[a-z]/.test(senha);
  var possuiLetraMaiuscula = /[A-Z]/.test(senha);
  var possuiNumero = /[0-9]/.test(senha);
  var possuiCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    senha
  );

  // Muda a cor do item da lista de acordo com a validação
  mudarCorItem(possuiMinimoCaracteres, 0);
  mudarCorItem(possuiLetraMinuscula, 1);
  mudarCorItem(possuiLetraMaiuscula, 2);
  mudarCorItem(possuiNumero, 3);
  mudarCorItem(possuiCaractereEspecial, 4);

  // Validação da força da senha
  var linhas = document.querySelectorAll(".val_line");
  linhas.forEach(function (linha) {
    linha.style.display = "none";
  });

  if (senha === "") return;

  if (
    senha.length >= 30 &&
    /[a-zA-Z]/.test(senha) &&
    /[0-9]/.test(senha) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)
  ) {
    exibirLinhaValidacao(1); // Incrível
  } else if (
    senha.length >= 25 &&
    /[a-zA-Z]/.test(senha) &&
    /[0-9]/.test(senha) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)
  ) {
    exibirLinhaValidacao(2); // Muito Forte
  } else if (
    senha.length > 20 &&
    /[a-zA-Z]/.test(senha) &&
    /[0-9]/.test(senha)
  ) {
    exibirLinhaValidacao(3); // Forte
  } else if (
    senha.length > 15 &&
    /[a-zA-Z]/.test(senha) &&
    /[0-9]/.test(senha)
  ) {
    exibirLinhaValidacao(4); // Média
  } else if (
    senha.length <= 15 &&
    (/[a-zA-Z]/.test(senha) ||
      /[0-9]/.test(senha) ||
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha))
  ) {
    exibirLinhaValidacao(5); // Fraca
  } else if (
    senha.length <= 10 &&
    (/[a-zA-Z]/.test(senha) ||
      /[0-9]/.test(senha) ||
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha))
  ) {
    exibirLinhaValidacao(6); // Muito Fraca
  }
}

// Função para mudar a cor de um item da lista
function mudarCorItem(valido, indice) {
  var item = document.querySelectorAll(".SLN_1_ul_val .SLN_1_li_val")[indice];
  if (valido) {
    item.style.color = "#fe5001"; // Muda a cor para #fe5001 se o critério for válido
  } else {
    item.style.color = ""; // Mantém a cor padrão se o critério não for válido
  }
}

// Função para exibir a linha de validação correspondente à força da senha
function exibirLinhaValidacao(forca) {
  var linha = document.querySelector(".val_line_" + forca);
  linha.style.display = "block"; // Exibe a linha de validação correspondente à força da senha
}

// Chama a função verificarSenha quando o usuário digitar algo na senha_1
document.getElementById("senha_1").addEventListener("input", verificarSenha);
