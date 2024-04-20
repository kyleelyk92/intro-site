document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const gradientCenterX = (mouseX / window.innerWidth) * 100;
    const gradientCenterY = (mouseY / window.innerHeight) * 100;
  
    const revealedArea = document.querySelector(".revealed-area");
    revealedArea.style.background = `radial-gradient(
      circle 350px at ${gradientCenterX}% ${gradientCenterY}%,
      transparent 10%,
      rgba(235, 111, 76, 0.38)
    )`;
  });