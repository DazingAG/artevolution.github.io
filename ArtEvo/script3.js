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
{ title: "Sunset Bliss", img: "p1.jpg", artist: "Artist One", price: "₱450", description: "A warm and calming sunset over the ocean horizon.", medium: "Oil on Canvas" },
{ title: "Golden Fields", img: "p2.jpg", artist: "Artist One", price: "₱380", description: "Golden wheat fields dancing with the afternoon wind.", medium: "Acrylic on Canvas" }
],
traditional: [
{ title: "Cyber Dreams", img: "d1.jpg", artist: "Artist Two", price: "₱520", description: "A futuristic vision of cybernetic consciousness.", medium: "Digital Painting" },
{ title: "Neon City", img: "d2.jpg", artist: "Artist Two", price: "₱600", description: "A glowing neon metropolis at night.", medium: "Digital Art" }
],
digital: [
{ title: "Marble Grace", img: "s1.jpg", artist: "Artist Three", price: "₱700", description: "Elegant marble sculpture.", medium: "Marble" },
{ title: "Bronze Warrior", img: "s2.jpg", artist: "Artist Three", price: "₱800", description: "A heroic bronze sculpture.", medium: "Bronze" }
],
graphicdesign: [
{ title: "Urban Silence", img: "ph1.jpg", artist: "Artist Four", price: "₱400", description: "Quiet city streets captured at dawn.", medium: "Photography" },
{ title: "Nature's Breath", img: "ph2.jpg", artist: "Artist Four", price: "₱450", description: "Breathtaking natural landscapes.", medium: "Photography" }
]
};

// LOAD CATEGORY
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

// SHOW ARTWORK DETAILS
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

// BACK TO GALLERY
function showGallery(){
document.getElementById("artDetails").style.display = "none";
document.querySelector(".back-btn").style.display = "none";
document.getElementById("gallery").style.display = "block";
}

// INITIAL LOAD
loadCategory("painting");