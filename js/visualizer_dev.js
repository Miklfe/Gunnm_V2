window.onload = () => {
    setSize();
    renderLoop();
};

function renderLoop() {
    const audioData = myFrequencyData();
    livelyAudioListener(audioData);
    requestAnimationFrame(renderLoop);
}

function myFrequencyData() {
    const frequencyData = new Array(128);
    for (let i = 0; i < frequencyData.length; i++) {
        frequencyData[i] = Math.random();
    }
    //console.log(frequencyData);
    return frequencyData;
}
