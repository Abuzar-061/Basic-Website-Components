
        const calculator = document.getElementById("calculator");
        const display = document.getElementById("display");
        const clear = document.getElementById("clear");
        const equals = document.getElementById("equals");

        calculator.addEventListener("click", (event) => {
            const { target } = event;
            if (target.classList.contains("number")) {
                display.textContent += target.textContent;
            } else if (target.classList.contains("operator")) {
                display.textContent += " " + target.textContent + " ";
            } else if (target.id === "clear") {
                display.textContent = "";
            } else if (target.id === "equals") {
                const result = eval(display.textContent);
                display.textContent = result;
            }
        });

    