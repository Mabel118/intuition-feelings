let phrases = [
    "To open my own cozy flower café 🌸☕",
    "One day, I’ll drop an album that actually hits",
    "Owning my own music studio—no boss, just me",
    "I just want to write that book I keep talking about",
    "Someday, my sketches will turn into a real fashion brand",
    "Making a short film that people actually watch—that’s the dream",
    "To wake up and not rush—just live on my own time",
    "No more playing small. It’s time to go all in",
    "I just need to trust my gut, even when it doesn’t make sense"
];

let triggerClicked = false;

function setup() {
    noCanvas();
    let trigger = document.getElementById("trigger");

    trigger.addEventListener("click", () => {
        if (!triggerClicked) {
            triggerClicked = true;
            generatePhrases();
        }
    });
}

function generatePhrases() {
    let container = document.getElementById("phrase-container");
    let trigger = document.getElementById("trigger");

    // Get position of "Heart & Intuition" text
    let rect = trigger.getBoundingClientRect();
    let startX = rect.left + rect.width / 2;
    let startY = rect.top + rect.height / 2 + window.scrollY;

    phrases.forEach((text, index) => {
        let phrase = document.createElement("div");
        phrase.classList.add("phrase");
        phrase.innerText = text;
        container.appendChild(phrase);

        // Random size between 14px and 28px
        let fontSize = Math.floor(Math.random() * 15) + 14;
        phrase.style.fontSize = fontSize + "px";

        // Initial position at "Heart & Intuition" text
        phrase.style.position = "absolute";
        phrase.style.left = startX + "px";
        phrase.style.top = startY + "px";
        phrase.style.opacity = "0";

        // Generate spiral animation
        let angle = index * 0.5; // Gradually increasing angle
        let distance = index * 30 + 50; // Expanding outward
        let x = startX + distance * Math.cos(angle);
        let y = startY + distance * Math.sin(angle);

        setTimeout(() => {
            phrase.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
            phrase.style.transform = `translate(${x - startX}px, ${y - startY}px)`;
            phrase.style.opacity = "1";
        }, index * 150); // Staggered appearance
    });
}

function setup() {
    noCanvas();
    let trigger = document.getElementById("trigger");
    let body = document.body;

    trigger.addEventListener("click", () => {
        // Smooth transition to deep red
        body.style.background = "linear-gradient(120deg, #EAE5E5, #710d0d)";
        
        // Small delay before fully applying the final color
        setTimeout(() => {
            body.style.background = "#710d0d";
        }, 2000); // 2-second transition

        // Call the function to generate phrases
        generatePhrases();
    });
}
