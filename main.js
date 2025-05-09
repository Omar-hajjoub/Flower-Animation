onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  
  // Create hearts
  const heartsContainer = document.querySelector('.hearts-container');
  const numberOfHearts = 100;
  
  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random position
    const left = Math.random() * 100;
    const size = Math.random() * 20 + 10;
    
    // Random animation delay
    const delay = Math.random() * 3;
    const duration = Math.random() * 4 + 3;
    
    heart.style.left = left + 'vw';
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.animationDelay = delay + 's';
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);
  }
  
  // Show hearts and message after 5 seconds
  setTimeout(() => {
    document.body.classList.add('show-hearts');
    
    // Show message after hearts start appearing
    setTimeout(() => {
      document.querySelector('.message').classList.add('show-message');
    }, 1000);
    
  }, 5000);
};