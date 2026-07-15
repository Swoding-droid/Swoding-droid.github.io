/* Place your JavaScript in this file */
// ================================
// 🌸 Flower World JavaScript 🌸
// ================================

// Reveal sections as the user scrolls
const sections = document.querySelectorAll(".section");

const updateRevealProgress = () => {
    const viewportHeight = window.innerHeight;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(viewportHeight, viewportHeight - rect.top));
        const progress = Math.max(0, Math.min(1, visibleHeight / (viewportHeight + section.offsetHeight * 0.4)));

        section.style.opacity = progress;
        section.style.transform = `translateY(${(1 - progress) * 80}px)`;
    });
};

window.addEventListener("scroll", updateRevealProgress, { passive: true });
window.addEventListener("resize", updateRevealProgress);
requestAnimationFrame(updateRevealProgress);


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
    { gradient: "linear-gradient(135deg, #008080 0%, #00c4cc 50%, #ff7ac6 100%)", hue: "0deg", brightness: "1" },
    { gradient: "linear-gradient(135deg, #003399 0%, #4f46e5 50%, #38bdf8 100%)", hue: "45deg", brightness: "1.05" },
    { gradient: "linear-gradient(135deg, #660099 0%, #8b5cf6 50%, #f472b6 100%)", hue: "120deg", brightness: "1.12" },
    { gradient: "linear-gradient(135deg, #006666 0%, #14b8a6 50%, #fde68a 100%)", hue: "220deg", brightness: "1.08" }
];

let bgIndex = 0;

const updateBackground = () => {
    const current = backgrounds[bgIndex];
    document.documentElement.style.setProperty("--bg-gradient", current.gradient);
    document.documentElement.style.setProperty("--hue-shift", current.hue);
    document.documentElement.style.setProperty("--brightness", current.brightness);
};

updateBackground();

setInterval(() => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    updateBackground();
}, 9000);


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
