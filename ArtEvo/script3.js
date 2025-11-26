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

const artworks = {
photography: [
    { title: "Starry Boulevard", img: "p1.jpg", artist: "Artist One", price: "₱450", description: "A warm and calming sunset over the ocean horizon.", medium: "Oil on Canvas" },
    { title: "Golden Fields", img: "p2.jpg", artist: "Artist One", price: "₱380", description: "Golden wheat fields dancing with the afternoon wind.", medium: "Acrylic on Canvas" },
    { title: "Ocean Dreams", img: "p3.jpg", artist: "Artist One", price: "₱500", description: "Soft blue waves crashing on the shore.", medium: "Watercolor" },
    { title: "Blooming Grace", img: "p4.jpg", artist: "Artist One", price: "₱420", description: "A vivid floral painting symbolizing growth.", medium: "Oil on Canvas" },
    { title: "Silent Hills", img: "p5.jpg", artist: "Artist One", price: "₱390", description: "Peaceful rolling hills during sunset.", medium: "Acrylic" }
],
traditionalart: [
{ title: "Starry Boulevard", img: "p1.jpg", artist: "Artist One", price: "₱450", description: "A warm and calming sunset over the ocean horizon.", medium: "Oil on Canvas" },
    { title: "Golden Fields", img: "p2.jpg", artist: "Artist One", price: "₱380", description: "Golden wheat fields dancing with the afternoon wind.", medium: "Acrylic on Canvas" },
    { title: "Ocean Dreams", img: "p3.jpg", artist: "Artist One", price: "₱500", description: "Soft blue waves crashing on the shore.", medium: "Watercolor" },
    { title: "Blooming Grace", img: "p4.jpg", artist: "Artist One", price: "₱420", description: "A vivid floral painting symbolizing growth.", medium: "Oil on Canvas" },
    { title: "Silent Hills", img: "p5.jpg", artist: "Artist One", price: "₱390", description: "Peaceful rolling hills during sunset.", medium: "Acrylic" }
],
digital: [
{ title: "Starry Boulevard", img: "p1.jpg", artist: "Artist One", price: "₱450", description: "A warm and calming sunset over the ocean horizon.", medium: "Oil on Canvas" },
    { title: "Golden Fields", img: "p2.jpg", artist: "Artist One", price: "₱380", description: "Golden wheat fields dancing with the afternoon wind.", medium: "Acrylic on Canvas" },
    { title: "Ocean Dreams", img: "p3.jpg", artist: "Artist One", price: "₱500", description: "Soft blue waves crashing on the shore.", medium: "Watercolor" },
    { title: "Blooming Grace", img: "p4.jpg", artist: "Artist One", price: "₱420", description: "A vivid floral painting symbolizing growth.", medium: "Oil on Canvas" },
    { title: "Silent Hills", img: "p5.jpg", artist: "Artist One", price: "₱390", description: "Peaceful rolling hills during sunset.", medium: "Acrylic" }
],
graphicdesign: [
{ title: "Starry Boulevard", img: "p1.jpg", artist: "Artist One", price: "₱450", description: "A warm and calming sunset over the ocean horizon.", medium: "Oil on Canvas" },
    { title: "Golden Fields", img: "p2.jpg", artist: "Artist One", price: "₱380", description: "Golden wheat fields dancing with the afternoon wind.", medium: "Acrylic on Canvas" },
    { title: "Ocean Dreams", img: "p3.jpg", artist: "Artist One", price: "₱500", description: "Soft blue waves crashing on the shore.", medium: "Watercolor" },
    { title: "Blooming Grace", img: "p4.jpg", artist: "Artist One", price: "₱420", description: "A vivid floral painting symbolizing growth.", medium: "Oil on Canvas" },
    { title: "Silent Hills", img: "p5.jpg", artist: "Artist One", price: "₱390", description: "Peaceful rolling hills during sunset.", medium: "Acrylic" }
    ]
};


function loadCategory(cat){
document.getElementById("categoryTitle").innerText = cat.toUpperCase();
const grid = document.getElementById("galleryGrid");
grid.innerHTML = "";
artworks[cat].forEach(art=>{
    const item = document.createElement("div");
    item.className = "art-item";
    item.innerHTML = `<img src="${art.img}" alt="${art.title}"><h4>${art.title}</h4>`;
    item.addEventListener("click", ()=>{
        showArtworkDetails(art);
    });
    grid.appendChild(item);
});
}

function showArtworkDetails(art){
document.getElementById("artDetails").style.display = "grid";
document.querySelector(".back-btn").style.display = "inline-block";
document.getElementById("gallery").style.display = "none";
document.getElementById("galleryGrid").innerHTML = "";
document.getElementById("artImage").src = art.img;
document.getElementById("artTitle").textContent = art.title;
document.getElementById("artArtist").textContent = art.artist;
document.getElementById("artPrice").textContent = art.price;
document.getElementById("artDescription").textContent = art.description;
document.getElementById("artMedium").textContent = art.medium;
}

function showGallery(){
document.getElementById("artDetails").style.display = "none";
document.querySelector(".back-btn").style.display = "none";
document.getElementById("gallery").style.display = "block";
}

loadCategory("All Artworks");