//////////////////////////////////// Global elem //////////////////////////////////////

/* Timer для анимации */
var Timer;
/*
    Проверка на изменения в страницы
    для меньшей загрузки на страницу
*/
var ChangesOnPage = false;
// Проверк  для кнопки новой игры
var aimOnButtonNewGame = false;
/* "canvas" */
var ctx;
/* Путь к картинкам */
var srcImgs = "material/png/";
/* Массив всех картинок кораблей */
var imgShips = [];
/* Остальные картинки */
// Картинка "прицела" 
var imgAim = new Image();

// Картинка "попадания"
var imgHit = new Image();

// Картинка "промаха"
var imgMiss = new Image();

// Картинка "Заднего фона" игры
var imgBackgroundGame = new Image();
var imgBackgroundGamePosX = 0;
var imgBackgroundGamePosY = 20;
var imgBackgroundGameWidth = 1200;
var imgBackgroundGameHeight = 700;

// Картинка "Новой игры" 
var imgNewGame = new Image();
var imgNewGamePosX = 217;
var imgNewGamePosY = 52;
var imgNewGameWidth = 300;
var imgNewGameHeight = 50;

// Картинка "Новой игры" при нажатие
var imgNewGameChosen = new Image();
var imgNewGameChosenPosX = 207;
var imgNewGameChosenPosY = 25;
var imgNewGameChosenWidth = 420;
var imgNewGameChosenHeight = 83;


//////////////////////////////////// Functions ////////////////////////////////////////

/* Рендер игрового поля */
function renderGameField() {
    if (ChangesOnPage) {
        ctx = document.querySelector(".game").getContext('2d');
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        // рендер поля игры
        ctx.drawImage(imgBackgroundGame, imgBackgroundGamePosX, imgBackgroundGamePosY,
            imgBackgroundGameWidth, imgBackgroundGameHeight);
        // рендер кнопки "новой игры"
        if (aimOnButtonNewGame)
            ctx.drawImage(imgNewGameChosen, imgNewGameChosenPosX, imgNewGameChosenPosY, imgNewGameChosenWidth, imgNewGameChosenHeight);
        else
            ctx.drawImage(imgNewGame, imgNewGamePosX, imgNewGamePosY, imgNewGameWidth, imgNewGameHeight);
        ChangesOnPage = false;
    }
}

/* Установка всех игровых элементов */
function setUpAllGameElements() {
    var imageShip;
    // Запись всех картинок для рендера
    // Запись всех картинок караблей
    for (let i = 1; i <= 4; i++) {
        imageShip = new Image();
        imageShip.src = srcImgs + "ship-" + i + "-horizontal.png";
        imgShips[i - 1] = imageShip;
    }
    // Запись остальных картинок
    imgAim.src = srcImgs + "aim.png";
    imgHit.src = srcImgs + "hit.png";
    imgMiss.src = srcImgs + "miss.png";
    imgBackgroundGame.src = srcImgs + "background-game-notebook.png";
    imgNewGame.src = srcImgs + "new-game.png";
    imgNewGameChosen.src = srcImgs + "new-game-chosen.png";
}

//////////////////////////////////// Events ///////////////////////////////////////////

/* Загрузка страницы */
document.addEventListener('DOMContentLoaded', function () {
    ChangesOnPage = true;
    // Установка основных элементов игры
    setUpAllGameElements();
    // Рендер игрового поля
    // Используем таймер, чтобы дать подгрузиться
    // всем картинкам для рендера
    Timer = setInterval(renderGameField, 100);
})

/* Клик по игровому полю и кнопке */
document.addEventListener("click", function (e) {

});

/* Проверка, куда навелся пользователь при передвежении мыши */
document.addEventListener('mousemove', e => {
    let x = e.offsetX;
    let y = e.offsetY;
    // Пользователь навел курсор на "Новая игра"
    if (x > imgNewGamePosX && x < (imgNewGamePosX + imgNewGameWidth) &&
        y > imgNewGamePosY && y < (imgNewGamePosY + imgNewGameHeight)) {
        if (!aimOnButtonNewGame) {
            aimOnButtonNewGame = true;
            ChangesOnPage = true;
        }
    } else if (aimOnButtonNewGame) {
        aimOnButtonNewGame = false;
        ChangesOnPage = true;
    }
});

//////////////////////////////////// Patterns /////////////////////////////////////////
