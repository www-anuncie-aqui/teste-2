const videos = [
    {
        title: "Video 1",
        src: "https://drive.google.com/file/d/1NRs5uVYehYRLh3bvVH67oFZ7aOKcIYGN/preview"
    },
    {
        title: "Video 2",
        src: "https://drive.google.com/file/d/11tlbz9UMDGx3xBuvDs81v1Mafg42OqEE/preview"
    },
    {
        title: "Video 3",
        src: "https://drive.google.com/file/d/1zI3afsQ3K8cbscPZK6rFuObh0nEhfilA/preview"
    }
];

const container = document.getElementById('videos');

videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.className = 'video-box';

    videoElement.innerHTML = `
        <h3>${video.title}</h3>
        <iframe src="${video.src}" allow="autoplay" allowfullscreen></iframe>
    `;

    container.appendChild(videoElement);
});
