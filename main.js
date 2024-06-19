document.addEventListener("DOMContentLoaded", () => {
    const object = document.getElementById("object");
    const speedSlider = document.getElementById("speed-slider");
    const speedValue = document.getElementById("speed-value");

    speedSlider.addEventListener("input", (event) => {
        const speed = event.target.value;
        speedValue.textContent = speed;
        // calculate the relativity effect
        const gamma = 1 / Math.sqrt(1 - (speed / 100) ** 2)
        // timedilation: time moves slower, we can visualize this as the object "lenthens" along time.
        object.style.height = `${50 * gamma}px`;
        // lenth contraction: objects that move fast seems shorter in their line of movement
        object.style.width = `${100 / gamma}px`;
        object.style.height = `${100}px`;
    })
})