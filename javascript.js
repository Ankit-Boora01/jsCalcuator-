let display = document.querySelector('.display');

        function showToDisplay(input) {
            display.textContent += input;
            adjustFontSize();
            scrollToEnd();
        }

        function clearDisplay() {
            display.textContent = "";
            adjustFontSize();
        }

        function calculate() {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'error';
            }
            adjustFontSize();
        }

        function adjustFontSize() {
            let fontSize = 6;
            let length = display.textContent.length;
            if (length > 10) {
                fontSize = 6 - (length - 10) * 0.3;
                fontSize = Math.max(fontSize, 1); 
            }
            display.style.fontSize = fontSize + 'vh';
        }

        function scrollToEnd() {
            display.scrollLeft = display.scrollWidth;
        }