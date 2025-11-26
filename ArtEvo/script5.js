const carousel = document.getElementById("carouselImage");
   const images = [
    "carousel/artevo.png",
    "carousel/concepcion.jpeg",
    "carousel/guevarra.png",
    "carousel/janda.png",
    "carousel/santos.jpeg"
];

let index = 0;

setInterval(() => {
            index = (index + 1) % images.length;
            carousel.src = images[index];
        }, 3000);
        
document.querySelectorAll('.faq-question').forEach(q=>{
    q.addEventListener('click', ()=>{
        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});