  let imageIndex = 0;
        const images = ['../img/stars.jpg', '../img/star2.jpg', '../img/tree.jpg'];

        setInterval(() => {
            imageIndex = (imageIndex + 1) % images.length;
            document.getElementById('overlay').style.backgroundImage = `url(${images[imageIndex]})`;
        }, 500);