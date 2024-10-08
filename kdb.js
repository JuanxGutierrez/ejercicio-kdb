document.getElementById('animateBtn').addEventListener('click', function() {
    alert('Kevin De Bruyne ha sido galardonado como el Mejor Jugador de la Premier League en varias ocasiones.');
});

document.getElementById('loadImageBtn').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    const preview = document.getElementById('preview');

    if (imageUrl) {
        preview.src = imageUrl;
        preview.style.display = 'block';
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
});
