const predictBtn = document.getElementById('predictBtn');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');

let lastPrediction = null;

function simulateLoading(buttonName) {
    result.textContent = `${buttonName} loading...`;
    return new Promise(resolve => {
        setTimeout(() => {
            const multiplier = (Math.random() * 5 + 1).toFixed(2); // случайный множитель 1.00 - 6.00
            resolve(multiplier);
        }, 2000 + Math.random() * 1000); // 2-3 секунды
    });
}

predictBtn.addEventListener('click', async () => {
    lastPrediction = await simulateLoading('Predict');
    result.textContent = `Predicted multiplier: ×${lastPrediction}`;
});

spinBtn.addEventListener('click', async () => {
    if (!lastPrediction) {
        result.textContent = 'Please predict first!';
        return;
    }
    const spinResult = await simulateLoading('Spin');
    result.textContent = `Spin result: ×${lastPrediction} (simulation)`;
});
