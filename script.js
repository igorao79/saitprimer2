document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,  // Начинаем с 3 карточек
        spaceBetween: 200,   // Расстояние между карточками
        loop: true,         // Включаем бесконечный режим
        navigation: {
            nextEl: '.secondblock__flexrow2__arrowright',
            prevEl: '.secondblock__flexrow2__arrowleft',
            disabledClass: 'swiper-button-disabled',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,  // 3 карточки на экранах больше 1024px
            },
            768: {
                slidesPerView: 2,  // 2 карточки на экранах больше 768px
            },
            480: {
                slidesPerView: 1,  // 1 карточка на экранах больше 480px
            }
        },
        observer: true,  // Добавляем observer для динамических изменений
        observeParents: true,  // Наблюдаем за изменениями в родительских элементах
        loopAdditionalSlides: 1,  // Добавляем дополнительные слайды для корректной работы loop
    });

    const nextButton = document.querySelector('.secondblock__flexrow2__arrowright');
    const prevButton = document.querySelector('.secondblock__flexrow2__arrowleft');



    // Синхронизация слайдов с состоянием стрелок при инициализации
    swiper.on('init', function () {
        if (swiper.isBeginning) {
            prevButton.classList.add('swiper-button-disabled'); // Делаем левую стрелку серой, если первый слайд
        }
        if (swiper.isEnd) {
            nextButton.classList.add('swiper-button-disabled'); // Делаем правую стрелку серой, если последний слайд
        }
    });

    // Инициализация слайдера
    swiper.init();
});







// ///////////////////////////////////////////////////////////////// скрипты

document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {
            title: "Цифровое пианино Roland FP-30X",
            text: ["Доступно в белом цвете", "2-сенсорная клавиатура"],
            price: "87 990 Р",
            images: {
                avif: "../pics/firstblock/piano.avif",
                webp: "../pics/firstblock/piano.webp",
                png: "../pics/firstblock/piano.png"
            }
        },
        {
            title: "Цифровое пианино Yamaha P-125",
            text: ["Компактный и стильный дизайн", "Механика Graded Hammer Standard"],
            price: "75 990 Р",
            images: {
                avif: "../pics/firstblock/piano2.avif",
                webp: "../pics/firstblock/piano2.webp",
                png: "../pics/firstblock/piano2.png"
            }
        },
        {
            title: "Цифровое пианино Kawai ES-120",
            text: ["Реалистичное звучание", "Поддержка Bluetooth"],
            price: "95 990 Р",
            images: {
                avif: "../pics/firstblock/piano3.avif",
                webp: "../pics/firstblock/piano3.webp",
                png: "../pics/firstblock/piano3.png"
            }
        }
    ];

    let currentIndex = 0;
    const card = document.querySelector('.firstblock__main__card');
    const arrowLeft = document.querySelector('.firstblock__main__arrowleft');
    const arrowRight = document.querySelector('.firstblock__main__arrowright');

    function updateCard(direction) {
        const content = card.querySelector('.firstblock__main__card__left');
        const picture = card.querySelector('.firstblock__main__card__right__pic');

        // Добавляем анимацию для плавного сдвига
        card.style.transition = "transform 0.5s ease-in-out";
        card.style.transform = direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';

        setTimeout(() => {
            const item = cards[currentIndex];
            
            // Обновляем текст
            content.querySelector('.firstblock__main__card__left__title').textContent = item.title;
            const textBlocks = content.querySelectorAll('.firstblock__main__card__left__textblock__text');
            textBlocks[0].textContent = item.text[0];
            textBlocks[1].textContent = item.text[1];
            content.querySelector('.firstblock__main__card__left__foot__price').textContent = item.price;

            // Обновляем картинку
            picture.innerHTML = `
                <source srcset="${item.images.avif}" type="image/avif">
                <source srcset="${item.images.webp}" type="image/webp">
                <img src="${item.images.png}" alt="Piano Image" loading="lazy">
            `;

            // Возвращаем карточку в нормальное состояние с плавной анимацией
            card.style.transition = "transform 0.5s ease-in-out";
            card.style.transform = 'translateX(0)';

        }, 500); // Должно совпадать с длительностью анимации
    }

    arrowRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCard('right');
    });

    arrowLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCard('left');
    });
});



// /////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".secondblock__flexrow__flexcards__card").forEach((card, index) => {
    const links = [
        "https://example.com/page1",
        "https://example.com/page2",  // Вторая карточка, по ней нельзя перейти
        "https://example.com/page3",
        "https://example.com/page4"
    ];

    // Если это вторая карточка (index === 1), отключаем переход
    if (index === 1) {
        card.style.pointerEvents = "none"; // Отключаем клик по второй карточке
    } else {
        card.addEventListener("click", function() {
            window.location.href = links[index];
        });
    }
});




// ////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    // Массив с изображениями (с разными форматами)
    const images = [
        {
            avif: "../pics/sevenblock/pianoplayer1.avif",
            webp: "../pics/sevenblock/pianoplayer1.webp",
            jpeg: "../pics/sevenblock/pianoplayer1.jpeg"
        },
        {
            avif: "../pics/sevenblock/pianoplayer2.avif",
            webp: "../pics/sevenblock/pianoplayer2.webp",
            jpeg: "../pics/sevenblock/pianoplayer2.jpg"
        },
        {
            avif: "../pics/sixblock/pianist.avif", // Исправлено
            webp: "../pics/sixblock/pianist.webp",
            jpeg: "../pics/sixblock/pianist.jpeg"
        }
    ];

    // Инициализация слайдера
    let currentImageIndex = 0;
    const slider = document.querySelector('.seventhblock__pic'); // Родительский элемент слайдера
    const prevButton = document.querySelector('.seventhblock__pic__arrowleft');
    const nextButton = document.querySelector('.seventhblock__pic__arrowright');
    const imgElement = slider.querySelector('.image-slide'); // Элемент для отображения изображения

    if (!imgElement) {
        console.error("Элемент .image-slide не найден!");
        return;
    }

    // Функция для обновления слайдера
    function updateSlider() {
        const currentImageSet = images[currentImageIndex];

        // Обновляем изображения с новыми источниками
        const pictureElement = imgElement.parentElement; // Родительский элемент <picture>
        const img = pictureElement.querySelector('img'); // Находим текущий <img> внутри <picture>

        // Принудительно скрываем изображение перед обновлением
        img.style.opacity = 0;
        img.style.transition = "opacity 0.5s ease-in-out"; // Анимация плавного исчезновения

        setTimeout(() => {
            // Обновляем атрибуты и источник изображения
            img.src = currentImageSet.jpeg;
            img.srcset = currentImageSet.jpeg;
            pictureElement.querySelector('source[type="image/avif"]').srcset = currentImageSet.avif;
            pictureElement.querySelector('source[type="image/webp"]').srcset = currentImageSet.webp;

            // Плавно показываем новое изображение
            img.style.opacity = 1; // Анимация плавного появления
        }, 400); // Дожидаемся окончания анимации исчезновения
    }

    // Обработчики для стрелок
    prevButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateSlider();
    });

    // Инициализация слайдера
    updateSlider();
});





// ///////////////////////////////////////////////////////



function toggleMenu() {
    const nav = document.querySelector('.firstblock__header__foot__nav');
    const burgerMenu = document.querySelector('.burger-menu');
    
    // Переключаем класс open для бургер-меню
    burgerMenu.classList.toggle('open');
    
    // Переключаем отображение меню
    nav.classList.toggle('open');
}


// /////////////////////////////////////////////////////


