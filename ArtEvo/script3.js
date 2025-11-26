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
    { title: "Starry Boulevard", img: "photography/StarryBoulevard.jpg", artist: "France Gabriel A. Concepcion", price: "$280", description: "A shot of a clear sky with only the Moon making its appearance over the face of Manila. The shot emphasizes despite the Moon being alone in the shot, it is the strongest element and shines the brightest in the night sky. The element of the structures being a part of the background composition of the shot highlights even more of the subject, that being the Moon. A few power lines cut through the frame, adding a touch of urban life to the otherwise quiet and serene atmosphere. The image evokes a sense of calm, with the simplicity of the night sky contrasting beautifully against the structure of the buildings below.", medium: "Camera"},
    { title: "Pink Day", img: "photography/PinkDay.jpg", artist: "France Gabriel A. Concepcion", price: "$300", description: "In this vibrant photo, the city skyline is bathed in a warm, golden light as the sun sets. The sky is alive with stunning hues of pink, orange, and purple, creating a dreamlike effect. The photo captures the moment where day transitions into night, with the city's buildings standing tall against the beautiful colors of the sky. The image conveys a feeling of awe and appreciation for the natural beauty that can be found even in a bustling urban environment. The photographer manages to capture this rare scenery and is heightened with his camera’s lighting.", medium: "Camera"},
    { title: "Sunset on the Patio", img: "photography/SunsetOnThePatio.jpg", artist: "France Gabriel A. Concepcion", price: "$320", description: "This shot showcases a breathtaking sunset viewed from a high-rise patio. The sky is filled with rich, fiery colors of orange and purple, creating a dramatic contrast against the silhouettes of the city buildings. The image reflects the peaceful yet powerful beauty of nature as it collides with the urban landscape, with the setting sun casting its final light over the city before darkness falls. The photograph invites a moment of reflection and admiration for the wonders of both nature and human-made structures." , medium: "Camera"},
    { title: "A Fleeting Day", img: "photography/AFleetingDay.jpg", artist: "France Gabriel A. Concepcion", price: "$350", description: "A shot of clouds covering the background of the city landscape as the Sun sets to mark the end of the day.. This photo captures the soft glow of a sunset over a bustling city. The sky is filled with warm tones of orange and yellow, blending into the cool blue hues above. The image is framed by a sleek modern structure, adding an urban touch to the serene scene. The transition from day to night is beautifully evident, with the city lights beginning to twinkle below as the evening unfolds, much like the Sunset on the Patio, it captures that same feeling of awe and admiration for the view of a setting Sun, concluding all of today’s troubles, worries and anxieties and lets us look forward to the following day.", medium: "Camera"},
    { title: "A Moonlit Night in FEU-Tech", img: "photography/AMoonlitNightInFEUTech.jpg", artist: "France Gabriel A. Concepcion", price: "$280", description: "A captivating night scene of a city illuminated by the moon overlooking the bustling city of Manila; guiding the Filipino people home and keeping us company on lonely nights. The full moon glows brightly amidst a swirl of clouds, casting a soft light over the skyline. The photograph captures a contrast between the stillness of the sky and the glowing city beneath, where scattered lights from buildings twinkle in the darkness. A nearby rooftop structure adds depth to the composition, while the city’s modern architecture serves as a reminder of the constant hum of life, even as the world quiets down for the night.", medium: "Camera"}
],
traditionalart: [
{ title: "Seaside Serenade", img: "tradart/SeasideSerenade.jpg", artist: "Axlrose Guevarra", price: "$800", description: "Realistic charcoal drawing that captures an intimate moment of a couple in a serene embrace aboard a sailboat. Executed entirely in charcoal on paper, the artwork masterfully utilizes the medium's depth to achieve rich contrasts, from the dark, defined figures and their stylish sunglasses to the subtle textures of the flowing fabric and the wooden deck beneath them. This piece serves as a sophisticated study of light, texture, and connection, evoking a feeling of timeless romance and elegant tranquility perfect for any discerning art collection.", medium: "Charcoal on Paper" },
    { title: "Splashdown", img: "tradart/Splashdown.jpg", artist: "Axlrose Guevarra", price: "$950", description: "Water violently splashing from a glass tumbler. Executed with exceptional technical proficiency, this piece utilizes charcoal on paper to stunning effect, capturing the complex physics of liquid in motion. The artwork is a mesmerizing study of light and transparency, where the artist masterfully renders the distortion, refraction, and movement of the water, making the glass appear wet and the splash utterly instantaneous. The dramatic contrast between the sharp water droplet forms and the soft shadows on the tabletop elevates this piece beyond mere realism into an exhilarating experience.", medium: "Graphite on Paper" },
    { title: "Joyful Glance", img: "tradart/JoyfulGlance.jpg", artist: "Axlrose Guevarra", price: "$700", description: "Realistic charcoal portrait that beautifully captures the vibrant personality and warm smile of the subject. Executed using charcoal on paper, the artwork contrasts the bright highlight of the smiling face against the rich, deep tones of her long hair and the jacket draped over her shoulders. The piece is a tender study of contemporary portraiture, emphasizing the texture of the hair and fabric through skilled shading, while the gentle, engaging expression creates an immediate connection with the viewer. This piece is a charming celebration of youth and happiness, ideal for collectors seeking intimate, figure-focused works.", medium: "Charcoal on Paper" },
    { title: "Innocence and Delight", img: "tradart/InnocenceAndDelight.jpg", artist: "Axlrose Guevarra", price: "$650", description: "Realistic charcoal portrait that beautifully captures the sincere, engaging smile of a young child. Executed entirely in charcoal on paper, the piece showcases the artist's ability to render smooth, soft skin tones while utilizing sharp contrast to define the dark, tousled hair and the playful pattern of the collar. The subject's bright eyes and natural expression create an immediate sense of warmth and authenticity. This endearing portrait is a fine example of figurative art that celebrates the simple joy and purity of childhood, making it a wonderful addition to any collection.", medium: "Charcoal on Paper" },
    { title: "Introspection", img: "tradart/Introspection.jpg", artist: "Axlrose Guevarra", price: "$1,100", description: "Highly detailed and compelling realistic portrait executed in charcoal on paper. The artwork captures the subject in a moment of quiet contemplation, engaging the viewer with a direct and solemn gaze. The artist demonstrates extraordinary skill in rendering lifelike textures, from the subtle variations and smoothness of the skin to the intricate curls of the hair. The stark contrast between the luminous face and the deep charcoal black of the shirt creates dramatic depth. This piece is a sophisticated study of character and expression, making it a striking addition for collectors interested in contemporary portraiture and figurative drawing.", medium: "Charcoal on Paper" }
],
digitalart: [
{ title: "Starry Boulevard", img: "digiart/BlueRedAndOrange.jpg", artist: "Edwynne Raschieka H. Janda", price: "$300", description: "A trio that are once more than friends—a found family.", medium: "ibisPaintX" },
    { title: "Golden Fields", img: "digiart/Chiki.jpg", artist: "Edwynne Raschieka H. Janda", price: "$760", description: "An illustration from a work titled, 'Ang Makukulay na Liham ni Chiki.", medium: "ibisPaintX" },
    { title: "Ocean Dreams", img: "digiart/GalacticSiren.jpg", artist: "Edwynne Raschieka H. Janda", price: "$250", description: "Celestial being who's adorned with stars for pearls and the comets for it's fins.", medium: "Artbook (IOS)" },
    { title: "Blooming Grace", img: "digiart/HaitiaSnow.jpg", artist: "Edwynne Raschieka H. Janda", price: "$1000", description: "An original character from a good friend and the world they are making.", medium: "ibisPaintX" },
    { title: "Silent Hills", img: "digiart/MuseOfALifetime.jpg", artist: "Edwynne Raschieka H. Janda", price: "$680", description: "Another original character portrait, dedicated to a younger friend.", medium: "ibisPaintX" }
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