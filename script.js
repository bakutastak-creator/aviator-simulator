const predictBtn = document.getElementById('predictBtn');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
const plane = document.getElementById('plane');

let lastPrediction = null;

function simulateLoading(buttonName) {
    result.textContent = `${buttonName} loading...`;
    return new Promise(resolve => {
        setTimeout(() => {
            const multiplier = (Math.random() * 5 + 1).toFixed(2);
            resolve(multiplier);
        }, 2000 + Math.random() * 1000);
    });
}

predictBtn.addEventListener('click', async () => {
    lastPrediction = await simulateLoading('Predict');
    result.innerHTML = `Predicted multiplier: <span class="multiplier">×${lastPrediction}</span>`;
});

spinBtn.addEventListener('click', async () => {
    if (!lastPrediction) {
        result.textContent = 'Please predict first!';
        return;
    }

    plane.style.display = 'block';
    plane.style.animation = 'none';
    plane.offsetHeight;
    plane.style.animation = 'fly 3s linear forwards';

    const spinResult = await simulateLoading('Spin');
    result.innerHTML = `Spin result: <span class="multiplier">×${lastPrediction}</span> (simulation)`;

    setTimeout(() => {
        plane.style.display = 'none';
    }, 3000);
});
