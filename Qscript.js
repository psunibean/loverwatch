if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", "true");
    window.location.href = "index.html";
}

function redirectToGame() {
    window.location.href = "game.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");

    const moveDistance = 10; // Distance to move away
    const bufferDistance = 35; // Distance at which the "No" button moves related to the mouse

    noButton.style.position = 'absolute';

    document.addEventListener("mousemove", (event) => {
        const rect = noButton.getBoundingClientRect();
        const deltaX = event.clientX - (rect.left + rect.width / 2);
        const deltaY = event.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < bufferDistance) {
            // Move to a completely random position
            let randomX = Math.random() * (window.innerWidth - rect.width);
            let randomY = Math.random() * (window.innerHeight - rect.height);

            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
        }
    });

    // Teleport "No" button to a random position when clicked
    noButton.addEventListener("click", () => {
        let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener("click", () => {
        window.location.href = 'success.html';
    });
});
