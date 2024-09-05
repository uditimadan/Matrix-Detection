// Matrix background effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// Object detection code
const video = document.getElementById('webcam');
const objCanvas = document.getElementById('canvas');
const objCtx = objCanvas.getContext('2d');
const detectionList = document.getElementById('detection-list');
const errorMessage = document.getElementById('error-message');

let model;
let detectedObjects = new Set();

async function loadModel() {
    try {
        model = await cocoSsd.load();
        requestAnimationFrame(detectObjects);
    } catch (error) {
        errorMessage.textContent = 'Error loading the model: ' + error.message;
    }
}

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        return new Promise(resolve => {
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
    } catch (error) {
        errorMessage.textContent = 'Error accessing the camera: ' + error.message;
    }
}

async function detectObjects() {
    try {
        const predictions = await model.detect(video);
        objCtx.clearRect(0, 0, objCanvas.width, objCanvas.height);
        
        predictions.forEach(prediction => {
            const [x, y, width, height] = prediction.bbox;
            objCtx.strokeStyle = '#00FF00';
            objCtx.lineWidth = 2;
            objCtx.strokeRect(x, y, width, height);

            objCtx.fillStyle = '#00FF00';
            objCtx.font = '16px monospace';
            objCtx.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                x, y > 10 ? y - 5 : 10
            );

            if (!detectedObjects.has(prediction.class)) {
                detectedObjects.add(prediction.class);
                const listItem = document.createElement('div');
                listItem.classList.add('detection-item');
                listItem.textContent = `${prediction.class} - First detected at ${new Date().toLocaleTimeString()}`;
                detectionList.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error('Error during object detection:', error);
    }

    setTimeout(() => requestAnimationFrame(detectObjects), 500);
}

async function init() {
    await setupCamera();
    await loadModel();
}

init();
