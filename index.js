window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.offsetHeight;

    if (scrollPosition + windowHeight >= documentHeight - 15) {
        document.getElementById('social-menu').classList.remove('hidden');
    } else {
        document.getElementById('social-menu').classList.add('hidden');
    }
}); 