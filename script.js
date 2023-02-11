const image = Array.from(document.getElementsByClassName('image_show'));
const mainPhoto = document.getElementById('main-photo');
const imageWrapper = document.getElementById('image-wrapper');
const desc = document.getElementById('description');
const title_card = document.getElementById('title-card');

imageWrapper.style.display = 'none'
desc.style.display = 'none'

function updateImage(event) {
    const title = document.getElementById('title')
    const text = document.getElementById('text')
    let image = event.target;
    mainPhoto.src = image.src;
    title_card.style.display = 'none';
    
    if (mainPhoto.src == 'assets/consoleGame.jfif') {
        imageWrapper.style.display = 'block';
        desc.style.display = 'block'
        title.innerHTML = 'Hobby Saya';
        text.innerHTML =
            `<ul>
                <li>Mendengarkan Musik</li>
                <li>Bermain Gitar</li>
                <li>Bermain Game</li>
            </ul>`;
    }
    
    if (mainPhoto.src == 'assets/goodSide.jfif') {
        imageWrapper.style.display = 'block';
        desc.style.display = 'block'
        title.innerHTML = 'Kelebihan Saya';
        text.innerHTML =
            `<ul>
                <li>Bisa bermain alat musik</li>
                <li>Baik Sama teman 😎</li>
                <li>Jago ngejokes</li>
            </ul>`;
    }
    
    if (mainPhoto.src == 'assets/badSide.png') {
        imageWrapper.style.display = 'block';
        desc.style.display = 'block'
        title.innerHTML = 'Kekurangan Saya';
        text.innerHTML =
            `<ul>
                <li>Ngodingnya lama</li>
                <li>Nakalnya ga kenal Tempat</li>
                <li>Ngeselin</li>
            </ul>`;
    }

    if (mainPhoto.src == 'assets/myGoals.jfif') {
        imageWrapper.style.display = 'block';
        desc.style.display = 'block'
        title.innerHTML = 'Cita cita Saya';
        text.innerHTML = 'Jadi Programmer handal';
    }
}

image.forEach((image) => {
    image.addEventListener('click', updateImage)
})
