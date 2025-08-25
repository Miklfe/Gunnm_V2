/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*  Visualizer                  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let canvas = document.getElementById("canvas");
let linesColor = "rgba(255, 255, 255, 1)";
let ctx = canvas.getContext("2d");
let clientWidth = document.getElementById('date').clientWidth;
console.log("clientWidth:", clientWidth);

function setSize() {
    canvas.width = clientWidth;
    canvas.height = 200;
}

function livelyAudioListener(frequencyData) {
    const numberOfBars = 128;
    const scaledData = frequencyData.map(value => (value / 6) * canvas.height);
    const subsetData = scaledData.slice(0, numberOfBars);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const midY = canvas.height / 2;

    const barWidth = (canvas.width / subsetData.length);
    let x = 0;

    for (let i = 0; i < subsetData.length; i++) {
        let barHeight = subsetData[i];
        ctx.fillStyle = linesColor;
        ctx.fillRect(x, midY - barHeight, barWidth - 1, barHeight);
        ctx.fillRect(x, midY, barWidth - 1, barHeight);
        x += barWidth;
    }
}
function livelyCurrentTrack(data) {
    console.log("Current track data:", data);
}

window.onload = () => {
    setSize();
};

window.onresize = () => {
    setSize();
};

