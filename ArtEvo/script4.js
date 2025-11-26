const carouselImages = ["contact1.jpg", "contact2.jpg", "contact3.jpg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % carouselImages.length;
    document.getElementById("carouselImage").src = carouselImages[index];
}, 3000);

document.getElementById("sendMessage").addEventListener("click", () => {
    alert("Thank you! Your message has been sent.");
});