fetch('videos.json')
    .then(response => response.json())
    .then(videos => {
        const galeria = document.getElementById('galeria');

        videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card';

            card.innerHTML = `
                <a href="${video.arquivo}" target="_blank">
                    <video src="${video.arquivo}" muted autoplay loop playsinline></video>
                    <p>${video.nome}</p>
                </a>
            `;

            galeria.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao carregar os vídeos:', error));
