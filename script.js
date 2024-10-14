const cursor = document.querySelector('.custom-cursor');
let lastX = 0;
let lastY = 0;
let lastTime = Date.now();

document.addEventListener('mousemove', (e) => {
    const currentX = e.pageX;
    const currentY = e.pageY;
    const currentTime = Date.now();

    // Calculate the distance moved
    const distanceX = currentX - lastX;
    const distanceY = currentY - lastY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Calculate time difference
    const timeDiff = currentTime - lastTime;
    const speed = distance / timeDiff; // Pixels per millisecond

    // Update cursor position
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';

    // Adjust the cursor size based on speed
    const maxSpeed = 150; // Adjust this value to set maximum speed threshold
    const stretchFactor = Math.min(speed / maxSpeed, 1); // Normalize to 0-1
    cursor.style.width = 20 + (stretchFactor * 50) + 'px'; // Increased stretch
    cursor.style.height = 20 + (stretchFactor * 20) + 'px'; // Increased height stretch

    // Update last positions and time
    lastX = currentX;
    lastY = currentY;
    lastTime = currentTime;
});

// Change cursor color on hover over links and new sections
document.addEventListener('mouseover', (e) => {
    if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'H1' ||
        e.target.tagName === 'H2' ||
        e.target.classList.contains('project') ||
        e.target.classList.contains('gallery-image') ||
        e.target.classList.contains('blog-post')
    ) {
        cursor.style.backgroundColor = 'rgba(255, 105, 180, 0.9)'; /* Brighter pink for visibility */
    } else {
        cursor.style.backgroundColor = 'rgba(175, 33, 207, 0.7)'; /* Default main color */
    }
});
