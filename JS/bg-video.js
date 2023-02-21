const video = document.querySelector('video');
      video.volume = 0;

      video.addEventListener('loadedmetadata', () => {
        video.play();
      });

    