if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", "true"); // Set a flag in local storage
    window.location.href = "index.html"; // Redirect to index.html
  }
  
        // JavaScript to trigger the redirect
        function redirectToGame() {
          window.location.href = "game.html"; // Replace with your YouTube link
      }


document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const moveDistance = 35; // Distance to move away from cursor
    const bufferDistance = 40; // Distance at which the "No" button moves away from the cursor

    // Initial position for the "No" button
    noButton.style.position = 'absolute';

    // Mousemove event to track mouse position
    document.addEventListener("mousemove", (event) => {
        const rect = noButton.getBoundingClientRect();
        const deltaX = event.clientX - (rect.left + rect.width / 2);
        const deltaY = event.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // Calculate distance

        // Move the button away only if the cursor is within bufferDistance
        if (distance < bufferDistance) {
            const angle = Math.atan2(deltaY, deltaX);

            // Calculate the new position, moving the button away
            let newX = rect.left - Math.cos(angle) * moveDistance;
            let newY = rect.top - Math.sin(angle) * moveDistance;

            // Keep the button within the viewport
            newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
            newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

            // Update the position of the "No" button
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
        }
    });

    // Click event for the "Yes" button - redirect to success.html
    yesButton.addEventListener("click", () => {
        window.location.href = 'success.html'; // Redirect to the new page
    });
});
