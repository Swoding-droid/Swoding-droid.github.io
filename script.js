/* Place your JavaScript in this file */
// ================================
// 🌸 Flower World JavaScript 🌸
// ================================

// Reveal sections as the user scrolls
const sections = document.querySelectorAll(".section");

const updateRevealProgress = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const startPoint = sectionTop - window.innerHeight * 0.25;
        const endPoint = sectionTop + section.offsetHeight * 0.35;
        const range = Math.max(1, endPoint - startPoint);
        const progress = Math.max(0, Math.min(1, (window.scrollY - startPoint) / range));

        section.style.opacity = progress;
        section.style.transform = `translateY(${(1 - progress) * 80}px)`;
    });
};

window.addEventListener("scroll", updateRevealProgress, { passive: true });
window.addEventListener("resize", updateRevealProgress);
updateRevealProgress();


// ================================
// Visitor Counter
// ================================

const counter = document.querySelector(".counter");
let visitors = 123456;

setInterval(() => {
    visitors++;
    counter.textContent =
        "Visitor #" + visitors.toString().padStart(9, "0");
}, 2500);


// ================================
// Falling Flowers Animation
// ================================

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "star";

    const flowers = ["🌸", "🌼", "🌺", "🌷", "🌻", "❀", "✿"];

    flower.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize =
        (16 + Math.random() * 24) + "px";

    flower.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 9000);
}

setInterval(createFlower, 300);


// ================================
// Rainbow Title Animation
// ================================

const title = document.querySelector("header h1");

const colors = [
    "#ff0000",
    "#ff8800",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0088ff",
    "#ff00ff"
];

let colorIndex = 0;

setInterval(() => {

    title.style.color = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

}, 500);


// ================================
// Retro "Under Construction" Alert
// ================================

setTimeout(() => {

    alert(
        "🌸 Welcome to Flower World!\n\n" +
        "This website is best viewed with Netscape Navigator!\n\n" +
        "Enjoy your visit! 🌼"
    );

}, 1000);


// ================================
// Random Background Color Shift
// ================================

const backgrounds = [
    "#008080",
    "#003399",
    "#660099",
    "#006666"
];

let bgIndex = 0;

setInterval(() => {

    document.body.style.background = backgrounds[bgIndex];

    bgIndex++;

    if (bgIndex >= backgrounds.length) {
        bgIndex = 0;
    }

}, 12000);


// ================================
// Sparkle Effect on Mouse Movec
// ================================

document.addEventListener("mousemove", (e) => {

    if (Math.random() > 0.85) {

        const sparkle = document.createElement("div");

        sparkle.className = "star";

        sparkle.textContent = "✨";

        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";

        sparkle.style.animationDuration = "2s";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2000);

    }

});
