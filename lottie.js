// ////////////////////////////////// json иконки


document.addEventListener('DOMContentLoaded', () => {
    // Ищем контейнер для анимации
    const lottieContainer = document.querySelector('.firstblock__header__top .firstblock__header__top__lottie-container');
    
    // Задаем размеры контейнера, аналогичные SVG
    lottieContainer.style.width = '15px';
    lottieContainer.style.height = '15.733276px';
    
    // Загружаем анимацию через Lottie
    fetch('./json/location.json')  // Путь к JSON-файлу
        .then(response => response.json())
        .then(animationData => {
            lottie.loadAnimation({
                container: lottieContainer,  // Используем контейнер для анимации
                renderer: 'svg',  // Рендерер SVG
                loop: true,  // Зациклить
                autoplay: true,  // Автоматически начать
                animationData: animationData  // Данные анимации
            });
        })
        .catch(error => {
            console.error('Error loading animation:', error);
            alert('Не удалось загрузить анимацию');
        });
});




document.addEventListener('DOMContentLoaded', () => {
    const lottieContainer = document.querySelector('.firstblock__header__center__right__selector .firstblock__header__center__right__selector__lottie-container');


    fetch('./json/location2.json')
        .then(response => response.json())
        .then(animationData => {
            let animation = lottie.loadAnimation({
                container: lottieContainer,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: animationData
            });

            // Используем более универсальный способ нахождения select
            const selectElement = document.querySelector('.firstblock__header__center__right__selector select');


            let wasStoppedByMouseOut = false;

            selectElement.addEventListener('mouseover', () => {
                if (!animation.isPlaying && !wasStoppedByMouseOut) {
                    animation.play();
                }
            });

            selectElement.addEventListener('mouseout', () => {
                if (animation.isPlaying) {
                    wasStoppedByMouseOut = true;
                }
            });

            animation.addEventListener('complete', () => {
                animation.goToAndStop(0, true);
                wasStoppedByMouseOut = false;
            });
        })
        .catch(error => {
            console.error('❌ Ошибка загрузки анимации:', error);
            alert('Не удалось загрузить анимацию');
        });
});




document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.firstblock__header__foot__icons__heart');

    // Создаем контейнер для Lottie-анимации
    const lottieContainer = document.createElement('div');
    lottieContainer.classList.add('lottie-heart-container');
    heartContainer.appendChild(lottieContainer);

    // Загружаем JSON-анимацию
    fetch('./json/heartwhite.json') // Укажите правильный путь к анимации сердца
        .then(response => response.json())
        .then(animationData => {
            let animation = lottie.loadAnimation({
                container: lottieContainer,
                renderer: 'svg',
                loop: false, // Без бесконечного цикла
                autoplay: false,
                animationData: animationData
            });

            let isAnimating = false; // Флаг, отслеживающий статус анимации
            let isWaitingToRestart = false; // Флаг, ждущий окончания анимации

            heartContainer.addEventListener('mouseenter', () => {
                if (!isAnimating) {
                    isAnimating = true;
                    animation.goToAndPlay(0, true); // Запуск анимации с начала
                } else {
                    isWaitingToRestart = true; // Если уже идет анимация, ждем окончания
                }
            });

            // Когда анимация завершена
            animation.addEventListener('complete', () => {
                isAnimating = false;

                // Если было новое наведение, запускаем анимацию заново
                if (isWaitingToRestart) {
                    isWaitingToRestart = false;
                    animation.goToAndPlay(0, true);
                    isAnimating = true;
                }
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки анимации:', error);
            alert('Не удалось загрузить анимацию сердечка');
        });
});







document.addEventListener('DOMContentLoaded', () => {
    const deliveryContainer = document.querySelector('.firstblock__header__foot__icons__delivery');
    
    // Загружаем анимацию из файла delivery.json
    fetch('./json/delivery.json')  // Убедитесь, что путь к файлу правильный
        .then(response => response.json())
        .then(animationData => {
            let animation = lottie.loadAnimation({
                container: deliveryContainer,  // Контейнер для анимации
                renderer: 'svg',
                loop: false,  // Анимация не зациклена
                autoplay: false,  // Анимация не начинается сразу
                animationData: animationData  // Данные анимации
            });

            let isAnimating = false; // Флаг, который следит, проигрывается ли анимация в данный момент
            let wasStoppedByMouseOut = false; // Флаг, который указывает, была ли остановка анимации вызвана mouseout

            // Запуск анимации при наведении
            deliveryContainer.addEventListener('mouseenter', () => {
                if (!isAnimating && !wasStoppedByMouseOut) {
                    isAnimating = true; // Устанавливаем флаг
                    animation.goToAndPlay(0, true); // Запуск анимации с начала
                }
            });

            // Остановка анимации при убирании курсора с контейнера, но с доигрыванием до конца
            deliveryContainer.addEventListener('mouseleave', () => {
                if (animation.isPlaying) {
                    wasStoppedByMouseOut = true; // Устанавливаем флаг
                    animation.addEventListener('complete', () => {
                        wasStoppedByMouseOut = false; // Сбрасываем флаг после завершения анимации
                        resetAnimation();
                    });
                }
            });

            // Обработчик завершения анимации
            animation.addEventListener('complete', () => {
                isAnimating = false; // Теперь можно снова запускать анимацию
            });

            function resetAnimation() {
                // Восстанавливаем анимацию в исходное состояние
                animation.goToAndStop(0, true);
            }
        })
        .catch(error => {
            console.error('Error loading animation:', error);
            alert('Не удалось загрузить анимацию');
        });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.secondblock__flexrow2__flexcards__card__footer__left__button').forEach(buttonContainer => {
        fetch('./json/delivery.json')  // Убедись, что путь правильный
            .then(response => response.json())
            .then(animationData => {
                let animation = lottie.loadAnimation({
                    container: buttonContainer,
                    renderer: 'svg',
                    loop: false,
                    autoplay: false,
                    animationData: animationData
                });

                let isAnimating = false;
                let wasStoppedByMouseOut = false;

                buttonContainer.addEventListener('mouseenter', () => {
                    if (!isAnimating && !wasStoppedByMouseOut) {
                        isAnimating = true;
                        animation.goToAndPlay(0, true);
                    }
                });

                buttonContainer.addEventListener('mouseleave', () => {
                    if (animation.isPlaying) {
                        wasStoppedByMouseOut = true;
                        animation.addEventListener('complete', () => {
                            wasStoppedByMouseOut = false;
                        });
                    }
                });

                animation.addEventListener('complete', () => {
                    isAnimating = false;
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки анимации:', error);
            });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.secondblock__flexrow2__flexcards__card__footer__right__like').forEach(likeContainer => {
        fetch('./json/heart.json') 
            .then(response => response.json())
            .then(animationData => {
                let animation = lottie.loadAnimation({
                    container: likeContainer,
                    renderer: 'svg',
                    loop: false,
                    autoplay: false,
                    animationData: animationData
                });

                let isAnimating = false;
                let wasStoppedByMouseOut = false;

                likeContainer.addEventListener('mouseenter', () => {
                    if (!isAnimating && !wasStoppedByMouseOut) {
                        isAnimating = true;
                        animation.goToAndPlay(0, true);
                    }
                });

                likeContainer.addEventListener('mouseleave', () => {
                    if (animation.isPlaying) {
                        wasStoppedByMouseOut = true;
                        animation.addEventListener('complete', () => {
                            wasStoppedByMouseOut = false;
                        });
                    }
                });

                animation.addEventListener('complete', () => {
                    isAnimating = false;
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки анимации:', error);
            });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Ищем контейнер для анимации
    const lottieContainer = document.querySelector('.fourthblock__flexblock__flexrow__el__ok');
    
    // Задаем размеры контейнера
    lottieContainer.style.width = '40px';  // Установи нужный размер
    lottieContainer.style.height = '40px'; // Установи нужный размер
    
    // Загружаем анимацию через Lottie
    fetch('./json/ok.json')  // Путь к JSON-файлу
        .then(response => response.json())
        .then(animationData => {
            const anim = lottie.loadAnimation({
                container: lottieContainer,  // Используем контейнер для анимации
                renderer: 'svg',  // Рендерер SVG
                loop: true,  // Зациклить
                autoplay: true,  // Автоматически начать
                animationData: animationData  // Данные анимации
            });

            // Замедляем анимацию после загрузки
            anim.setSpeed(0.5);  // Замедляем анимацию в два раза
        })
        .catch(error => {
            console.error('Error loading animation:', error);
            alert('Не удалось загрузить анимацию');
        });
});
