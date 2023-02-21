let imageIndex = 0;
        const images = document.getElementsByClassName('slider-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.addEventListener('click', () => {
            images[imageIndex].style.display = 'none';
            imageIndex = (imageIndex - 1 + images.length) % images.length;
            images[imageIndex].style.display = 'block';
        });

        nextBtn.addEventListener('click', () => {
            images[imageIndex].style.display = 'none';
            imageIndex = (imageIndex + 1) % images.length;
            images[imageIndex].style.display = 'block';
        });