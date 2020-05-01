//////////////////////////////////// Global elem //////////////////////////////////////

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

//////////////////////////////////// Functions ////////////////////////////////////////

/* Рендер игрового поля */
function renderGameField() {
    ctx = document.getElementById("canvas").getContext('2d');
    imgBackgroundGame.onload = function () {
        ctx.drawImage(imgBackgroundGame, 0, 20, 1200, 700);
    }
}

/* Установка всех игровых элементов */
function setUpAllGameElements() {
    // Запись всех картинок для рендера
    // Запись всех картинок караблей
    for (let i = 1; i <= 4; i++) {
        var imageShip = new Image();
        imageShip.src = srcImgs + "ship-" + i + "-horizontal.png";
        imgShips[i - 1] = imageShip;
    }
    // Запись остальных картинок
    imgAim.src = srcImgs + "aim.png";
    imgHit.src = srcImgs + "hit.png";
    imgMiss.src = srcImgs + "miss.png";
    imgBackgroundGame.src = srcImgs + "background-game-notebook.png";
}

//////////////////////////////////// Events ///////////////////////////////////////////

/* Загрузка страницы */
window.onload = function () {
    // Установка основных элементов игры
    setUpAllGameElements();
    // Рендер игрового поля
    renderGameField();
}

/* Клик по игровому полю и кнопке */
document.addEventListener("click", function (e) {

});

document.addEventListener('mousemove', e => {
    
});

//////////////////////////////////// Patterns /////////////////////////////////////////
