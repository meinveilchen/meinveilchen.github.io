const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'P' || e.target.tagName === 'H1' || e.target.tagName === 'H2') {
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Darker when hovering over text
    } else {
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Default color
    }
});
