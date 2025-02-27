  let phrases = [
      "To open my own cozy flower café 🌸☕",
      "One day, I’ll drop an album that actually hits",
      "Owning my own music studio—no boss, just me",
      "I just want to write that book I keep talking about",
      "Someday, my sketches will turn into a real fashion brand",
      "Making a short film that people actually watch—that’s the dream",
      "To wake up and not rush—just live on my own time",
      "No more playing small. It’s time to go all in",
      "I just need to trust my gut, even when it doesn’t make sense",
      "To open my own cozy flower café 🌸",
      "One day, I’ll drop an album that actually hits",
      "Owning my own music studio—no boss, just me",
      "I just want to** write that book I keep talking about",
      "Someday, my sketches will** turn into a real fashion brand",
      "Making a short film that people actually watch—that’s the dream",
  ];
  
  let toggleState = false;
  
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
  
  function setup() {
    noCanvas();
    let trigger = document.getElementById("trigger");
    let body = document.body;
    let phraseContainer = document.getElementById("phrase-container");

    trigger.addEventListener("click", () => {
        toggleState = !toggleState; // Toggle state

        if (toggleState) {
            // Show phrases & change background
            body.style.background = "linear-gradient(120deg, #EAE5E5, #710d0d)";
            setTimeout(() => {
                body.style.background = "#710d0d";
            }, 2000); // Smooth transition
            generatePhrases(); // Generate phrases
        } else {
            // Hide phrases & reset background
            body.style.background = "linear-gradient(120deg, #710d0d, #EAE5E5)";
            setTimeout(() => {
                body.style.background = "#EAE5E5";
            }, 2000);
            phraseContainer.innerHTML = ""; // Clear phrases
        }
    });
}

function generatePhrases() {
    let phraseContainer = document.getElementById("phrase-container");
    phraseContainer.innerHTML = ""; // Clear previous phrases

    let phrases = [
        "To open and own a flower café",
        "To be a musician/rapper",
        "To own a music studio by myself",
        "To travel the world with no regrets",
        "To write a book that inspires others",
        "To finally start my own business",
        "To learn how to surf",
        "To create something that changes lives",
        "To reconnect with an old dream",
        "To take a leap of faith in myself"
    ];

    let trigger = document.getElementById("trigger");
    let rect = trigger.getBoundingClientRect(); // Get position of "Heart & Intuition"
    let centerX = rect.left + rect.width / 2; 
    let centerY = rect.top + rect.height / 2;

    let numPhrases = phrases.length;
    let angleStep = (Math.PI * 2) / numPhrases; // Space them evenly in a circular pattern

    for (let i = 0; i < numPhrases; i++) {
        let phrase = document.createElement("div");
        phrase.classList.add("spiral-phrase");
        phrase.innerText = phrases[i];

        let angle = i * angleStep; // Angle for spiral positioning
        let radius = 10; // Start close, expand outward
        
        // Animate the phrases moving outward in a spiral
        setTimeout(() => {
            let expandInterval = setInterval(() => {
                radius += 5; // Expand outward smoothly

                let x = centerX + radius * Math.cos(angle);
                let y = centerY + radius * Math.sin(angle);
                
                phrase.style.transform = `translate(${x}px, ${y}px)`;
                phrase.style.opacity = "1";

                if (radius > window.innerWidth / 1.5) { // Stop expanding
                    clearInterval(expandInterval);
                }
            }, 30);
        }, i * 100); // Staggered animation for smooth effect

        phraseContainer.appendChild(phrase);
    }
}
