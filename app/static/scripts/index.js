document.getElementById('wishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const wish = document.getElementById('wish').value;
    const name = document.getElementById('name').value;
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, wishlist: wish })
    })
    .then(response => response.json())
    .then(data => {
        alert('🎅 Ho ho ho! Your wish has been securely uploaded to Santa\'s Cloud! 🎁');
        document.getElementById('wishForm').reset();
    })
    .catch(error => {
        alert('🎄 Oops! Santa\'s servers are experiencing high traffic. Please try again! 🧝');
    });
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);