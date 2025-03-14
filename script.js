document.addEventListener('DOMContentLoaded', () => {
    const videoPopup = document.getElementById('videoPopup');
    const popupVideo = document.getElementById('popupVideo');
    const closeBtn = document.querySelector('.close-btn');
    const replayBtn = document.querySelector('.replay-btn');

    // Abrir popup al hacer clic en el botón "Platiquemos"
    document.querySelector('.btn').addEventListener('click', (e) => {
        e.preventDefault();
        videoPopup.classList.add('active');
        popupVideo.play();
    });

    // Cerrar popup al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        videoPopup.classList.remove('active');
        popupVideo.pause();
        popupVideo.currentTime = 0;
    });

    // Replay al hacer clic en el botón de repetir
    replayBtn.addEventListener('click', () => {
        popupVideo.currentTime = 0;
        popupVideo.play();
    });

    // Cerrar popup cuando el video termina
    popupVideo.addEventListener('ended', () => {
        videoPopup.classList.add('fade-out');
        setTimeout(() => {
            videoPopup.classList.remove('active', 'fade-out');
            popupVideo.pause();
            popupVideo.currentTime = 0;
        }, 500);
    });
});