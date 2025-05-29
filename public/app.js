const images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'];
let i = 1;

const targetImage = document.querySelector('.avatar img');

targetImage.addEventListener('click', () => {
    targetImage.style.opacity = '0';

    setTimeout(() => {
        targetImage.src = '/images/' + images[i];
        i++;

        if (i >= images.length) {
            i = 0;
        }

        targetImage.style.opacity = '1';
    }, 200);
});
