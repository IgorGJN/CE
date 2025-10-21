const videoItems = document.querySelectorAll('.video-item');
const playerContainer = document.getElementById('videoPlayerContainer');

videoItems.forEach(item => {
  item.addEventListener('click', () => {
    const videoUrl = item.getAttribute('data-video');
    playerContainer.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    window.scrollTo({ top: playerContainer.offsetTop, behavior: 'smooth' });
  });
});
