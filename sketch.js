document.getElementById("trigger").addEventListener("click", () => {
  const container = document.getElementById("phrase-container");
  const phrases = [
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

  // Get center position to avoid overlap
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const quoteRadius = 150; // Buffer zone around the quote

  phrases.forEach((text, index) => {
      let phrase = document.createElement("div");
      phrase.classList.add("phrase");
      phrase.innerText = text;
      container.appendChild(phrase);

      // Random position away from the center quote
      let angle = Math.random() * 2 * Math.PI; // Random angle
      let distance = Math.random() * (window.innerWidth / 2 - quoteRadius) + quoteRadius;
      let x = centerX + distance * Math.cos(angle);
      let y = centerY + distance * Math.sin(angle);

      // Initial position (off-screen)
      phrase.style.left = `${centerX}px`;
      phrase.style.top = `${centerY}px`;

      // Delay and animate swirling effect
      setTimeout(() => {
          phrase.style.opacity = 1;
          phrase.style.transform = `translate(${x - centerX}px, ${y - centerY}px) scale(1)`;
      }, index * 200); // Staggered appearance
  });
});
