// Aguarda o DOM ser completamente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // Referências aos elementos do DOM
  const hrsElement = document.getElementById("hrs");
  const minElement = document.getElementById("min");
  const secElement = document.getElementById("sec");

  const dateElement = document.getElementById("date");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  // Arrays para os nomes dos meses e dias da semana
  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  // Função para adicionar um zero à esquerda se o número for menor que 10
  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  // Função principal para atualizar o relógio e a data
  function updateClockAndDate() {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const day = currentTime.getDate();
    const month = currentTime.getMonth();
    const year = currentTime.getFullYear();

    // Atualiza a hora
    hrsElement.textContent = formatTime(hours);
    minElement.textContent = formatTime(minutes);
    secElement.textContent = formatTime(seconds);

    // Atualiza a data
    dateElement.textContent = formatTime(day);
    monthElement.textContent = `/${monthNames[month]}/`;
    yearElement.textContent = year;
  }

  // Chama a função uma vez para exibir a hora e a data imediatamente
  updateClockAndDate();

  // Atualiza a hora e a data a cada segundo
  setInterval(updateClockAndDate, 1000);
});

// Melhorias:

// Evitando Repetição: Em vez de ter o código de obtenção da data fora e dentro do setInterval, criei uma única função (updateClockAndDate) que faz todo o trabalho. Isso elimina a repetição de let currentTime = new Date();.

// Legibilidade: Usei nomes de variáveis mais descritivos (hrsElement, minElement, dateElement, etc.).

// Função Auxiliar: Criei uma pequena função (formatTime) para adicionar o zero à esquerda, o que torna o código mais limpo do que usar um if ternário em cada linha.

// Precisão da Data: A lógica para a data foi corrigida. getDay() retorna o dia da semana (de 0 a 6), e getMonth() retorna o mês (de 0 a 11). Agora, getDate() é usado para o dia do mês, e a exibição do mês usa um array de nomes para uma melhor visualização.

// Separação de Preocupações: A lógica da data foi separada do innerHTML de forma mais clara, usando os IDs específicos para dia, mês e ano.
