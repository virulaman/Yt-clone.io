// Get all thumbnails and the video player
const thumbnails = document.querySelectorAll('.thumbnail');
const videoPlayer = document.getElementById('video-player');

// Add event listeners to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Get the video ID from the clicked thumbnail
        const videoId = this.getAttribute('data-video-id');

        // Update the video player iframe source to the clicked video's ID
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
    });
});
