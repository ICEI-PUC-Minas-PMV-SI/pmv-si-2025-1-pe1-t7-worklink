const opcoesDeServicoPorCategoria = {
    "Mecânico": ["Revisão de Motor", "Troca de Óleo", "Freio", "Suspensão"],
    "Eletricista": ["Instalação Elétrica", "Reparo de Fiação Residencial", "Instalação de Chuveiro", "Troca de Tomada"],
    "Chaveiro": ["Abertura de Portas", "Troca de Segredo", "Cópia de Chaves", "Instalação de Fechadura"],
    "Encanador": ["Desentupimento de Pia", "Vazamento em Torneira", "Instalação de Vaso Sanitário", "Reparo de Caixa D'água"],
    "Marido de Aluguel": ["Montagem de Móveis", "Instalação de Cortinas", "Reparos Elétricos Simples", "Pequenos Reparos Gerais"],
    "Marcenaria": ["Fabricação de Prateleiras Sob Medida", "Reparo de Móveis de Madeira", "Instalação de Portas", "Criação de Armários"],
    "Hidráulica": ["Instalação de Torneira e Registro", "Reparo de Tubulações", "Limpeza de Caixa D'água", "Instalação de Filtro de Água"],
    "Alvenaria": ["Reboco de Parede", "Assentamento de Tijolos", "Construção de Muros", "Pequenas Reformas Estruturais"],
    "Pintura": ["Pintura de Parede Interna", "Pintura Externa", "Pintura de Portas e Janelas", "Textura"],
    "Frete": ["Mudança Residencial", "Transporte de Cargas Pequenas", "Entrega de Encomendas", "Serviço de Coleta"]
};

let categoriaSelecionadaGlobal = "";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Obter os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaUrl = urlParams.get('categoria');
    const trabalhadorNomeUrl = urlParams.get('trabalhador');

    // Exibe o nome do Prestador
    const trabalhadorNomeElement = document.getElementById('trabalhadorNome');
    if (trabalhadorNomeUrl) {
        trabalhadorNomeElement.textContent = `Você está agendando com: ${trabalhadorNomeUrl} (${categoriaUrl})`;
        categoriaSelecionadaGlobal = categoriaUrl; // Armazena a categoria para proximo uso
    } else {
        trabalhadorNomeElement.textContent = `Bem-vindo à agenda de serviços!`;
        //avisa erro de categoria
        console.warn("Nenhum trabalhador ou categoria especificada na URL.");
    }

    // 3. select do modal com base na categoria
    function popularServiceSelect(categoria) {
        const serviceSelect = document.getElementById("serviceSelect");
        serviceSelect.innerHTML = '<option value="" disabled selected>Selecione um serviço</option>'; // Limpa e adiciona placeholder

        const opcoes = opcoesDeServicoPorCategoria[categoria];
        if (opcoes) {
            opcoes.forEach(opcao => {
                const optionElement = document.createElement("option");
                optionElement.value = opcao;
                optionElement.textContent = opcao;
                serviceSelect.appendChild(optionElement);
            });
        } else {
            const optionElement = document.createElement("option");
            optionElement.value = "";
            optionElement.textContent = "Nenhum serviço disponível para esta categoria";
            serviceSelect.appendChild(optionElement);
            serviceSelect.disabled = true;
        }

        // Atualiza a categoria no texto do modal
        document.getElementById("modalCategoriaText").textContent = categoria || "N/A";
    }

    if (categoriaSelecionadaGlobal) {
        popularServiceSelect(categoriaSelecionadaGlobal);
    }

    document.querySelectorAll(".calendar-grid div").forEach(day => {
        day.addEventListener("click", () => {
            const texto = day.textContent.trim();
            if (isNaN(texto)) return;

            const dia = parseInt(texto);

            // Adicionado para obter o ano e mês corretos (Assumindo Novembro de 2025 para este calendário)
            const anoAtual = 2025;
            const mesAtual = 10; // Novembro é o mês 10 (0-indexado)

            // Criar um objeto Date para o dia clicado
            const dataClicada = new Date(anoAtual, mesAtual, dia);

            if (day.classList.contains("folga")) return;

            if (day.classList.contains("ocupado")) {
                const confirmar = confirm(`Deseja cancelar o serviço agendado para o dia ${dia}?`);
                if (confirmar) {
                    day.classList.remove("ocupado");
                    day.classList.add("livre");

                    // Lógica para remover o serviço da linha do tempo
                    // Melhorar a busca: procurar por data formatada exata ou usar um atributo data-
                    const servicos = document.querySelectorAll("#linhaDoTempoNova .service");
                    const dataFormatadaParaRemover = dataClicada.toLocaleDateString('pt-BR', {
                        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
                    });
                    servicos.forEach(item => {
                        // Verifica se o conteúdo do <strong> do serviço inclui a data formatada
                        if (item.querySelector('strong')?.textContent.includes(dataFormatadaParaRemover.split(',')[0].trim() + ',')) {
                            item.remove();
                            // --- INÍCIO: LÓGICA PARA DECREMENTAR O CONTADOR DE NOTIFICAÇÕES AO CANCELAR ---
                            const notificationBadge = document.getElementById('notificationCountNavbar');
                            if (notificationBadge) {
                                let currentCount = parseInt(notificationBadge.textContent);
                                if (isNaN(currentCount)) {
                                    currentCount = 0;
                                }
                                if (currentCount > 0) { // Garante que não decresça abaixo de zero
                                    currentCount--;
                                }
                                notificationBadge.textContent = currentCount;

                                if (currentCount === 0) {
                                    notificationBadge.style.display = 'none'; // Esconde se o contador for 0
                                }
                            }
                            // --- FIM: LÓGICA PARA DECREMENTAR O CONTADOR DE NOTIFICAÇÕES AO CANCELAR ---
                        }
                    });

                }
                return;
            }


            if (day.classList.contains("livre") && categoriaSelecionadaGlobal) {
                // Formata a data para exibir no modal
                const dataFormatada = dataClicada.toLocaleDateString('pt-BR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });

                document.getElementById("selectedDateText").textContent = dataFormatada;
                document.getElementById("serviceModal").style.display = "flex";
                document.getElementById("serviceModal").setAttribute("data-dia", String(dia)); // Armazena o dia para a função addService
                document.getElementById("serviceModal").setAttribute("data-mes", String(mesAtual)); // Armazena o mês
                document.getElementById("serviceModal").setAttribute("data-ano", String(anoAtual)); // Armazena o ano

            } else if (day.classList.contains("livre") && !categoriaSelecionadaGlobal) {
                alert("Por favor, selecione um tipo de serviço na página anterior.");
            }
        });
    });
});


// Função principal para adicionar o serviço
function addService() {
    const tipoServico = document.getElementById("serviceSelect").value;
    const dataTexto = document.getElementById("selectedDateText").textContent; // Já está formatada (ex: "quarta-feira, 25 de junho de 2025")
    const dia = document.getElementById("serviceModal").getAttribute("data-dia");
    const mes = document.getElementById("serviceModal").getAttribute("data-mes");
    const ano = document.getElementById("serviceModal").getAttribute("data-ano");

    if (!tipoServico) {
        alert("Por favor, selecione um serviço.");
        return;
    }

    const container = document.getElementById("linhaDoTempoNova");
    const item = document.createElement("div");
    item.className = "service";
    item.innerHTML = `
        <div>
            <strong>${dataTexto}</strong>
            <p>${tipoServico}</p>
            <small>Categoria: ${categoriaSelecionadaGlobal}</small>
        </div>
        <button class="chat-button">Chat</button>
    `;
    container.appendChild(item);

    // Atualiza o estado do dia no calendário
    document.querySelectorAll(".calendar-grid div").forEach(el => {
        if (parseInt(el.textContent.trim()) === parseInt(dia)) {
            el.classList.remove("livre");
            el.classList.add("ocupado");
        }
    });

    // Fecha o modal
    document.getElementById("serviceModal").style.display = "none";

    // Reseta o select para o placeholder
    document.getElementById("serviceSelect").selectedIndex = 0;


    // --- INÍCIO: LÓGICA PARA ATUALIZAR O CONTADOR DE NOTIFICAÇÕES ---
    const notificationBadge = document.getElementById('notificationCountNavbar');
    if (notificationBadge) {
        let currentCount = parseInt(notificationBadge.textContent); // Pega o valor atual
        if (isNaN(currentCount)) { // Garante que é um número, se não for, inicia com 0
            currentCount = 0;
        }
        currentCount++; // Incrementa o contador

        notificationBadge.textContent = currentCount; // Atualiza o texto do badge

        // Garante que o badge esteja visível se o contador for maior que 0
        if (currentCount > 0) {
            notificationBadge.style.display = 'inline-block'; // Ou 'block' ou 'flex' dependendo do seu layout
        }
    }
    // --- FIM: LÓGICA PARA ATUALIZAR O CONTADOR DE NOTIFICAÇÕES ---
}