document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const dateInput = document.getElementById('date');
    const resultSpan = document.getElementById('result');
    const iconMode = document.getElementById('icon-mode');
    const body = document.body;

    function calculateAge() {
        const birthdayValue = dateInput.value;
        
        if (!birthdayValue) {
            resultSpan.textContent = 'Por favor, insira uma data válida.';
            resultSpan.classList.add('attention');
            return;
        }

        const birthdayDate = new Date(birthdayValue);
        const currentDate = new Date();

        if (birthdayDate > currentDate) {
            resultSpan.textContent = 'A data de nascimento não pode ser no futuro.';
            resultSpan.classList.add('attention');
            return;
        }

        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthdayDate.getDate())) {
            age--;
        }

        resultSpan.textContent = `A sua idade é: ${age} anos.`;
        resultSpan.classList.remove('attention');
    }

    function toggleDarkMode() {
        body.classList.toggle('dark');
        const isDarkMode = body.classList.contains('dark');
        iconMode.classList.toggle('fa-moon', !isDarkMode);
        iconMode.classList.toggle('fa-sun', isDarkMode);
    }
    
    btn.addEventListener('click', calculateAge);
    iconMode.addEventListener('click', toggleDarkMode);
});