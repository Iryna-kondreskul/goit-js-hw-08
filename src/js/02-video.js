
const iframeEl = document.querySelector('iframe');
console.log(iframeEl);

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

// Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

// 1 Ознакомься с документацией библиотеки Vimeo плеера.
// 2 Добавь библиотеку как зависимость проекта через npm.
// 3 Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// 4 Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// 5 Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6 При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7  сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

// setItem додати значення
// getItem - отримати значення
// removeItem - видалити
// clear - очистити все
//localStorage.setItem('videoplayer-current-time', 'Hello')