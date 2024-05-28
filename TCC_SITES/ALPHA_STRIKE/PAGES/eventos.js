// * EVENTOS - Calendário * \\
// ~ Wanderson ~ \\
// ^ 18/04/2024 ^ \\
// ^ Modificado - 01/05/2024 ^ \\

// * Variáveis Globais * \\
let mesAtual;
let anoAtual;
let ano_atual;
let mes_atual;
let dia_atual;

// * Atualizar o calendário * \\
// Função para preencher os botões do calendário com os dias do mês atual   // ^ 27/04/2024 ^ \\
function preencherDiasDoMes() 
{
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth() + 1; // Mês atual (1 a 12)
    const anoAtual = dataAtual.getFullYear(); // Ano atual

    // Obter o número de dias no mês atual
    const numeroDeDias = new Date(anoAtual, mesAtual, 0).getDate();

    // Obter o dia da semana do primeiro dia do mês atual
    const primeiroDiaDoMes = new Date(anoAtual, mesAtual - 1, 1).getDay();

    // Selecionar os botões de dias do calendário
    const botoesDias = document.querySelectorAll('.cal_dias .btn_dias');

    // Preencher os dias do mês atual nos botões
    let dia = 1;
    for (let i = primeiroDiaDoMes; i < primeiroDiaDoMes + numeroDeDias; i++) 
    {
        botoesDias[i].textContent = dia++;
        botoesDias[i].setAttribute('dia-numero', dia - 1); // Ajuste para começar do dia 1
    }

    // Limpar os botões restantes
    for (let i = 0; i < primeiroDiaDoMes; i++) 
    {
        botoesDias[i].textContent = "";
        botoesDias[i].removeAttribute('dia-numero');
    }
    for (let i = primeiroDiaDoMes + numeroDeDias; i < botoesDias.length; i++) 
    {
        botoesDias[i].textContent = "";
        botoesDias[i].removeAttribute('dia-numero');
    }

    // Desativar os botões dos dias anteriores e posteriores
    desativarDiasAnteriores();
    desativarDiasPosteriores(numeroDeDias, primeiroDiaDoMes);
}

// Chamada para preencher os botões do calendário quando a página é carregada
document.addEventListener('DOMContentLoaded', preencherDiasDoMes)


// Função para atualizar a data atual   // ^ 19/04/2024 ^ \\
function atualizarDataAtual() 
{
    const dataAtual = new Date();
    ano_atual = dataAtual.getFullYear();
    mes_atual = dataAtual.getMonth() + 1; // Janeiro é 1
    dia_atual = dataAtual.getDate();
}

// Chamada para atualizar a data atual quando a página é carregada
document.addEventListener("DOMContentLoaded", atualizarDataAtual);


// Função auxiliar para obter o nome do mês // ^ 19/04/2024 ^ \\
function obterNomeDoMes(numeroDoMes) 
{
    const meses = 
    [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return meses[numeroDoMes - 1]; // Subtrai 1 porque os meses começam de 0 no JavaScript
}

// Função para atualizar o mês e o ano no HTML  // ^ 19/04/2024 ^ \\
function atualizarCalendario() 
{
    console.log("Atualizando calendário");
    const dataAtual = new Date(); // Obtem a data atual
    mesAtual = dataAtual.getMonth() + 1; // Obtém o mês atual (começando de 0, por isso adicionamos 1)
    anoAtual = dataAtual.getFullYear(); // Obtém o ano atual

    // Atualiza o mês e o ano no HTML
    const h2Mes = document.querySelector(".e_mes");
    const h2Ano = document.querySelector(".e_ano");
    h2Mes.textContent = obterNomeDoMes(mesAtual);
    h2Ano.textContent = anoAtual.toString();

    atualizarDiasDoMes()
}

// Chamada para atualizar o calendário quando a página é carregada
document.addEventListener("DOMContentLoaded", atualizarCalendario);

// Função para atualizar a data conforme a vontade do usuário   // ^ 22/04/2024 ^ \\
function atualizarData(avancar) 
{
    console.log("Atualizando data");

    // Atualiza o mês e o ano de acordo com a ação do usuário
    if (avancar) 
    {
        if (mesAtual === 12) 
        {
            mesAtual = 1;
            anoAtual++;
        } 
        else 
        {
            mesAtual++;
        }
    } 
    else 
    {
        if (mesAtual === 1) 
        {
            mesAtual = 12;
            anoAtual--;
        } 
        else 
        {
            mesAtual--;
        }
    }

    // Atualiza o mês e o ano no HTML
    const h2Mes = document.querySelector(".e_mes");
    const h2Ano = document.querySelector(".e_ano");
    h2Mes.textContent = obterNomeDoMes(mesAtual);
    h2Ano.textContent = anoAtual.toString();
    atualizarDiasDoMes()
}

// Chamada para atualizar a data quando a página é carregada    // ^ 22/04/2024 ^ \\
document.addEventListener("DOMContentLoaded", function() 
{
    // Adicionar manipuladores de eventos para as setas de avançar e voltar
    const btnAvancar = document.querySelector(".btn_eventos.btn-e_avançar");
    const btnVoltar = document.querySelector(".btn_eventos.btn-e_voltar");
    console.log("Botões de avançar e voltar encontrados:", btnAvancar, btnVoltar);
    btnAvancar.addEventListener("click", function() { atualizarData(true); });
    btnVoltar.addEventListener("click", function() { atualizarData(false); });
});

// Função para atualizar os dias do mês   // ^ 23/04/2024 ^ \\
function atualizarDiasDoMes() 
{
    console.log("Atualizando dias do mês");

    // Obtém o número de dias no mês atual
    const numeroDeDias = new Date(anoAtual, mesAtual, 0).getDate();

    // Obtém o dia da semana do primeiro dia do mês atual
    const primeiroDiaDoMes = new Date(anoAtual, mesAtual - 1, 1).getDay();

    // Seleciona todos os botões de dias do calendário
    const botoesDias = document.querySelectorAll(".cal_dias .btn_dias");

    // Calcula os dias anteriores que devem ser exibidos no calendário
    const diasAnteriores = (primeiroDiaDoMes + 6) % 7; // 6 representa o domingo, o último dia da semana

    // Preenche os dias anteriores correspondentes aos dias finais do mês anterior
    let dia = new Date(anoAtual, mesAtual - 1, 0).getDate() - diasAnteriores + 1;
    for (let i = 0; i < diasAnteriores; i++) 
    {
        botoesDias[i].textContent = dia++;
    }

    // Preenche os dias do mês atual nos botões
    dia = 1;
    for (let i = diasAnteriores; i < diasAnteriores + numeroDeDias; i++) 
    {
        botoesDias[i].textContent = dia++;
    }

    // Limpa os botões restantes
    for (let i = diasAnteriores + numeroDeDias; i < botoesDias.length; i++) 
    {
        botoesDias[i].textContent = "";
    }
}

// ? Não consegui criar uma função que desative os dias anteriores. Toda tentativa desativava a posição dos botões do mês atual ? //
// ? Desativando a posição do mês atual, desativava as mesmas posições/botões nos outros meses. O mesmo aconteceu com o botão "Voltar" ? //
// ? Então foi deixado apenas um alerta caso o dia seja anterior a data atual ? //

// * Alerta para o usuário * \\
// ~ Wanderson ~ \\
// ^ Modificado - 01/05/2024 ^ \\
// ! BUG ENCONTRADO - No mês atual, o alerta não aparece para os dias do mês anterior ! \\

// Cria um Alerta para avisar que a data selecionada é inválida     // ^ 27/04/2024 ^ \\
function verificarDataSelecionada(diaSelecionado, mesSelecionado, anoSelecionado) 
{
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1; // Janeiro é 1
    const anoAtual = dataAtual.getFullYear();

    if (anoSelecionado < anoAtual || (anoSelecionado === anoAtual && mesSelecionado < mesAtual) || 
    (anoSelecionado === anoAtual && mesSelecionado === mesAtual && diaSelecionado < diaAtual)) 
    {
        const mensagem = "Desculpe, esta data não está mais disponível. Por favor, escolha uma outra data.";

        // Criando o elemento de mensagem
        const divMensagem = document.createElement('div');
        divMensagem.classList.add('mensagem');
        
        // Criando o conteúdo da mensagem
        const conteudoMensagem = document.createElement('p');
        conteudoMensagem.textContent = mensagem;
        // Estilizando a mensagem
        conteudoMensagem.style.fontFamily = 'Roboto, sans-serif';
        conteudoMensagem.style.fontSize = '18px';
        conteudoMensagem.style.fontWeight = 'bold';
        conteudoMensagem.style.filter = 'drop-shadow(1px 1px 2px #ccc)';
        conteudoMensagem.style.marginBottom = '10px';
        conteudoMensagem.style.color = '#000000';   // ! Alteração da cor para preto (não estava mostrando a mensagem) ! \\ 

        // Criando o botão de fechar
        const botaoFechar = document.createElement('button');
        botaoFechar.textContent = 'Fechar';
        botaoFechar.classList.add('fechar');
        // Estilizando o botão de fechar
        botaoFechar.style.fontFamily = 'Roboto, sans-serif';
        botaoFechar.style.fontSize = '14px';
        botaoFechar.style.fontWeight = 'bold';
        botaoFechar.style.padding = '5px 10px';
        botaoFechar.style.border = '2px solid black';
        botaoFechar.style.backgroundColor = '#857058';
        botaoFechar.style.cursor = 'pointer';
        botaoFechar.style.float = 'right'; // Posiciona o botão à direita
        botaoFechar.addEventListener('click', function() 
        {
            divMensagem.remove(); // Remove a mensagem quando o botão de fechar é clicado
        });

        // Adicionando o conteúdo e o botão à mensagem
        divMensagem.appendChild(conteudoMensagem);
        divMensagem.appendChild(botaoFechar);

        // Posicionando a mensagem no centro da página
        divMensagem.style.position = 'fixed';
        divMensagem.style.top = '50%';
        divMensagem.style.left = '50%';
        divMensagem.style.transform = 'translate(-50%, -50%)';
        divMensagem.style.backgroundColor = '#f4f4f4';
        divMensagem.style.padding = '20px';
        divMensagem.style.border = '1px solid #ccc';
        divMensagem.style.boxShadow = '2px 2px 4px black';
        divMensagem.style.zIndex = '999'; // Garante que a mensagem apareça sobre outros elementos
        divMensagem.style.border = '3px solid #fe5001';

        // Adicionando a mensagem à página
        document.body.appendChild(divMensagem);

        return false; // Retorna falso para indicar que a data selecionada é anterior à data atual
    }

    return true; // Retorna verdadeiro se a data selecionada for posterior à data atual
}

document.addEventListener('DOMContentLoaded', function() 
{
    const botoesDias = document.querySelectorAll('.cal_dias .btn_dias');
    
    botoesDias.forEach(function(botao) 
    {
        botao.addEventListener('click', function() 
        {
            const diaSelecionado = parseInt(this.textContent);
            const mesSelecionado = mesAtual; // Usamos a variável mesAtual definida globalmente
            const anoSelecionado = anoAtual; // Usamos a variável anoAtual definida globalmente
            
            if (verificarDataSelecionada(diaSelecionado, mesSelecionado, anoSelecionado)) 
            {
                // Aqui você pode adicionar qualquer ação que deseja realizar se a data selecionada for válida
                console.log("Data selecionada é válida. Dia: " + diaSelecionado + ", Mês: " + mesSelecionado + ", Ano: " + anoSelecionado);
            }
        });
    });
});

// * Esconder o formulário * //
// ~ Wanderson ~ \\
// ^ 28/04/2024 ^ \\

/*//Função para ocultar o formulário de agendamento
function ocultarFormulario() 
{
    document.querySelector('.formulario-agendamento').style.display = 'none'; // Oculta o formulário de agendamento
}

//Chamada para ocultar o formulário de agendamento quando a página é carregada
document.addEventListener('DOMContentLoaded', ocultarFormulario); */

// * Mostra a data selecionada no formulário * //
// ! BUG ENCONTRADO - No mês atual, os dias do mês anterior que aparecem, se selecionados são mostrados como se fossem do mês atual ! \\

// Função para atualizar a data selecionada no formulário
document.addEventListener('DOMContentLoaded', function()    // ^ 28/04/2024 ^ \\
{
    const botoesDias = document.querySelectorAll('.cal_dias .btn_dias');
    
    function atualizarDataSelecionada(dia, mes, ano) 
    {
        // Formatar a data no formato "DD/MM/AAAA"
        const dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
        
        // Selecionar o elemento .data_selecionada e atualizar seu conteúdo
        const dataSelecionadaElemento = document.querySelector('.data_selecionada');
        dataSelecionadaElemento.textContent = dataFormatada;
    }
    
    botoesDias.forEach(function(botao) 
    {
        botao.addEventListener('click', function() 
        {
            const diaSelecionado = parseInt(this.textContent);
            const mesSelecionado = mesAtual; // Usamos a variável mesAtual definida globalmente
            const anoSelecionado = anoAtual; // Usamos a variável anoAtual definida globalmente
            
            if (verificarDataSelecionada(diaSelecionado, mesSelecionado, anoSelecionado)) 
            {
                atualizarDataSelecionada(diaSelecionado, mesSelecionado, anoSelecionado);
            }
        });
    });
});

// ? Criar uma função para exibir o formulário de agendamento como um alerta no centro da página não funcionou! ? \\ 
// ^ 29/04/2024 ^ \\
// ? Tentei criar a função várias vezes mas não exibiu o formulário, a alternativa é deixar o formulário visível na página. ? \\
// ^ 01/05/2024 ^ \\
// ? Tentei criar a função para desabilitar alguns horários conforma a escolha do usuário (não deu certo). ? \\


// * ------------------ TESTE ---------------------- * \\

// Função para abrir o modal de agendamento apenas se a data selecionada for válida
function abrirModalAgendamento(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1; // Janeiro é 1
    const anoAtual = dataAtual.getFullYear();
    
    const diaSelecionado = parseInt(this.textContent); // Dia clicado
    const mesSelecionado = mesAtual; // Mês atual
    const anoSelecionado = anoAtual; // Ano atual
    
    // Verifica se a data selecionada é válida
    if (anoSelecionado < anoAtual || (anoSelecionado === anoAtual && mesSelecionado < mesAtual) || 
        (anoSelecionado === anoAtual && mesSelecionado === mesAtual && diaSelecionado < diaAtual)) {
        // Data inválida, não abre o modal
        console.log("Data selecionada é inválida. Não é possível abrir o modal de agendamento.");
        return;
    }
    
    // Se a data for válida, abre o modal
    const modal = document.getElementById('agendamentoModal');
    modal.showModal(); // Mostra o modal de agendamento
}

// Adiciona um ouvinte de eventos para cada botão de dia no calendário
const botoesDias = document.querySelectorAll('.cal_dias .btn_dias');
botoesDias.forEach(function(botao) {
    botao.addEventListener('click', abrirModalAgendamento);
});

// Função para fechar o modal de agendamento
function fecharModalAgendamento() {
    const modal = document.getElementById('agendamentoModal');
    modal.close(); // Fecha o modal de agendamento
}

// Adiciona um ouvinte de eventos para o botão "Fechar" no modal de agendamento
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fechar_modal_Agendamento')) {
        fecharModalAgendamento();
    }
});