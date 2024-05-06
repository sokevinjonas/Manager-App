document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  // Fonction pour mettre en pause toutes les vidéos sauf celle spécifiée
  function pauseAllVideos(except) {
    videos.forEach((video) => {
      if (video !== except) {
        video.pause();
      }
    });
  }

  videos.forEach((video) => {
    video.addEventListener("click", () => {
      // Mettre en pause toutes les vidéos sauf celle qui a été cliquée
      pauseAllVideos(video);

      // Si la vidéo est en pause, la lancer, sinon la mettre en pause
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});
