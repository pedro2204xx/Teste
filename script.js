function toggleEnvelope() {
    var envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
    
    var envelopeTop = document.querySelector('.envelope-top');
    envelopeTop.innerHTML = ""; // Limpa corações antigos
    for (var i = 0; i < 50; i++) {
        var newHeart = document.createElement('div');
        newHeart.classList.add('heart');
        newHeart.style.left = Math.random() * 100 + "%";
        newHeart.style.top = Math.random() * 100 + "%";
        envelopeTop.appendChild(newHeart);
    }
}
