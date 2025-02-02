const mainText = document.getElementById('mainText');
const mainImage = document.getElementById('mainImage');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
let noCount = 0;

// Yes Button: Redirect to success page
yesButton.addEventListener('click', () => {
    window.location.href = 'success.html';
});

// No Button: Change text, image, and dodge cursor
noButton.addEventListener('click', () => {
    noCount++;
    if (noCount === 1) {
        mainText.textContent = 'Are you sure?';
        mainImage.src = 'cat 2.gif'; // Replace with a different picture
    }
});

// Move No Button when cursor is close
noButton.addEventListener('mousemove', (e) => {
    if (noCount >= 1) {
        const buttonRect = noButton.getBoundingClientRect();
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        // Calculate distance between cursor and button center
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        const distance = Math.sqrt((cursorX - buttonCenterX) ** 2 + (cursorY - buttonCenterY) ** 2);

        // If cursor is within 100px of the button, move the button
        if (distance < 100) {
            const newX = Math.random() * (window.innerWidth - noButton.offsetWidth);
            const newY = Math.random() * (window.innerHeight - noButton.offsetHeight);
            noButton.style.position = 'absolute';
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
        }
    }
});