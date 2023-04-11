const boxesContainerRow = document.querySelector(".container-row");
        let lastBoxSize = 80;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let flippedBoxes = [];
        let numMatches = 0;
        const totalPairs = 10;

        function generateRandomLetter() {
            const index = Math.floor(Math.random() * letters.length);
            return letters[index];
        }

        function createBox() {
            const box = document.createElement("div");
            const letter = generateRandomLetter();
            box.dataset.letter = letter;
            box.style.width = `${lastBoxSize}px`;
            box.style.height = `${lastBoxSize}px`;
            box.style.backgroundColor = "black";
            box.style.marginTop = "123px";
            box.style.marginRight = "132px";
            box.style.cursor = "pointer";
            box.addEventListener("click", function () {
                if (flippedBoxes.length < 2 && !flippedBoxes.includes(box)) {
                    box.textContent = letter;
                    box.style.backgroundColor = "white";
                    flippedBoxes.push(box);
                    if (flippedBoxes.length === 2) {
                        const firstBox = flippedBoxes[0];
                        const secondBox = flippedBoxes[1];
                        if (firstBox.dataset.letter === secondBox.dataset.letter) {
                            firstBox.style.backgroundColor = "red";
                            secondBox.style.backgroundColor = "red";
                            numMatches++;
                            flippedBoxes = [];
                            if (numMatches === totalPairs) {
                                alert("Congratulations! You have won the game!(limited to 10 cards flip)");
                            }
                        } else {
                            setTimeout(function () {
                                firstBox.textContent = "";
                                secondBox.textContent = "";
                                firstBox.style.backgroundColor = "black";
                                secondBox.style.backgroundColor = "black";
                                flippedBoxes = [];
                            }, 1000);
                        }
                    }
                }
            });
            return box;
        }

        function generateBoxes(numBoxes) {
            for (let i = 0; i < numBoxes; i++) {
                const box = createBox();
                boxesContainerRow.querySelector(".boxes-container").appendChild(box);
                lastBoxSize += 20;
            }
        }

        generateBoxes(7);

        const sidebarHeaderBox = document.querySelector(".sidebar-header-box");
        sidebarHeaderBox.addEventListener("click", function () {
            generateBoxes(3);
        });