// Ativar clique nos dias do calendário
document.querySelectorAll(".calendar-grid div").forEach(day => {
  day.addEventListener("click", () => {
    const texto = day.textContent.trim();
    if (isNaN(texto)) return;

    const dia = parseInt(texto);

    // Impede alterar dias de folga
    if (day.classList.contains("folga")) return;

    //  cancela serviços em dias ocupados
    if (day.classList.contains("ocupado")) {
      const confirmar = confirm(`Deseja cancelar o serviço agendado para o dia ${dia}?`);
      if (confirmar) {
       
        day.classList.remove("ocupado");
        day.classList.add("livre");

        // Remove serviço correspondente da linha do tempo
        const servicos = document.querySelectorAll("#linhaDoTempoNova .service");
        servicos.forEach(item => {
          if (item.innerHTML.includes(` ${dia} de novembro de 2025`)) {
            item.remove();
          }
        });

        // Decrementa notificação
        const badge = document.getElementById("notificationCount");
        let atual = parseInt(badge.textContent);
        badge.textContent = Math.max(0, atual - 1); // Evita número negativo
      }
      return;
    }

    // ✅ Abre modal apenas se for dia livre
    if (day.classList.contains("livre")) {
      const dataAtual = new Date(2025, 10, dia); 
      const diaSemana = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' });
      const dataFormatada = `${diaSemana}, ${dia} de novembro de 2025`;

      document.getElementById("selectedDateText").textContent = dataFormatada;
      document.getElementById("serviceModal").style.display = "flex";
      document.getElementById("serviceModal").setAttribute("data-dia", String(dia));
    }
  });
});


function addService() {
  const tipoServico = document.getElementById("serviceSelect").value;
  const dataTexto = document.getElementById("selectedDateText").textContent;
  const dia = document.getElementById("serviceModal").getAttribute("data-dia");

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
    </div>
    <button class="chat-button">Chat</button>
  `;
  container.appendChild(item);

  
  document.querySelectorAll(".calendar-grid div").forEach(el => {
    if (parseInt(el.textContent.trim()) === parseInt(dia)){
      el.classList.remove("livre");
      el.classList.add("ocupado");
    }
  });

  // Incrementa número de notificações
  const badge = document.getElementById("notificationCount");
  badge.textContent = parseInt(badge.textContent) + 1;

  // Fecha o modal
  document.getElementById("serviceModal").style.display = "none";

  // Reseta o select
  document.getElementById("serviceSelect").selectedIndex = 0;
}
