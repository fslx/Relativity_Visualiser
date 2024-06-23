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

    // Newtons first law
    const newtonFirstObject = document.getElementById("newton-first-object");
    const newtonFirstButton = document.getElementById("newton-first-btn");
    let newtonFirstInterval;

    newtonFirstButton.addEventListener("click", () => {
        newtonFirstButton.style.display = "none";
        clearInterval(newtonFirstInterval);
        newtonFirstInterval = setInterval(() => {
            const currentLeft = parseFloat(newtonFirstObject.style.left) || 0;
            if (currentLeft + 2 < 500) {
                newtonFirstObject.style.left = `${currentLeft + 2}px`;
            }
            else {
                clearInterval(newtonFirstInterval);
            }
        }, 16);
    });

    // Newtons second law
    const newtonSecondObject = document.getElementById("newton-second-object");
    const newtonSecondMassSlider = document.getElementById("newton-second-mass-slider");
    const newtonSecondMassValue = document.getElementById("newton-second-mass-value");
    const newtonSecondButton = document.getElementById("newton-second-btn");
    let newtonSecondInterval;

    newtonSecondMassSlider.addEventListener("input", (event) => {
        newtonSecondMassValue.textContent = event.target.value;
    });

    newtonSecondButton.addEventListener("click", () => {
        newtonSecondButton.style.display = "none";
        clearInterval(newtonSecondInterval);
        newtonSecondObject.style.left = 0;
        const mass = parseFloat(newtonSecondMassValue.textContent);
        const force = 10; // constant force
        const acceleration = force / mass // acceleration = force divided by mass
        newtonSecondInterval = setInterval(() => {
            const currentLeft = parseFloat(newtonSecondObject.style.left) || 0;
            if (currentLeft + acceleration < 550) {
                newtonSecondObject.style.left = `${currentLeft + acceleration}px`;
            }
            else {
                clearInterval(newtonSecondInterval);
            }
        })
    })

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
        speedSlider.value = 0;
        speedValue.textContent = 0;
        object.style.width = "100px";
        object.style.height = "100px";

        clearInterval(newtonFirstInterval);
        newtonFirstObject.style.left = "0";
        newtonFirstButton.style.display = "inline";

        clearInterval(newtonSecondInterval);
        newtonSecondObject.style.left = "0";
        newtonSecondMassSlider.value = 10;
        newtonSecondMassValue.textContent = 10;
        newtonSecondButton.style.display = "inline";
    })

    // Schrödingers Wave Equation
    const canvas = document.getElementById("schrodinger-canvas");
    const ctx = canvas.getContext("2d");

    function drawSchrodinger() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#3498db";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
            const y = 100 + 50 * Math.sin((x / canvas.width) * 4 * Math.PI);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    drawSchrodinger();
    setInterval(drawSchrodinger, 100);
})
