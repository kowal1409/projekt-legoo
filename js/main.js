document.addEventListener('DOMContentLoaded',function(){
    alert("Witam, oto strona lego");
});

const galleryItems = document.querySelectorAll('.gallery-item img');
const innerHTML= document.querySelector('.catalog-item img');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeBtn = document.getElementById('closeBtn');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        fullscreenImage.src = item.src;
        fullscreenOverlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    fullscreenOverlay.style.display = 'none';
});

fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
        fullscreenOverlay.style.display = 'none';
    }})
    const menuToggle = document.querySelector('.menu-toggle');
    const menuFrame = document.getElementById('menuFrame');
    const exitButton = document.getElementById('exitButton');
    const content = document.getElementById('content');
    
    // Open the menu
    menuToggle.addEventListener('click', () => {
        menuFrame.classList.add('active');
    });

    // Close the menu
    exitButton.addEventListener('click', () => {
        menuFrame.classList.remove('active');
    });

    // Load page content dynamically
    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                content.innerHTML = '<p>Nie udało się załadować strony. Spróbuj ponownie później.</p>';
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    function redirectToPage(page) {
        window.location.href = page;
    } 
    