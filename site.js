// let tg = window.Telegram.WebApp; //нужно получить объект window.Telegram.WebApp Телеграмма
// tg.expand(); //разворачиваем на все окно
// let chatid = tg.initDataUnsafe.user.id
// var gameguid = null;
//chatid = 33762738;

// Проверяем играл ли юзер сегодня
// $.ajax({
//     type: "GET",
//     url: `/api/game/GetUserGame?chatId=${chatid}`,
//     success: function (data) {
//         // Проверяем HTTP-статус ответа
//         console.log(data);
//         if (data.value)
//         {
//             // Регистрируем игру у юзера
//             $.ajax({
//                 type: "GET",
//                 url: `/api/game/newGame?chatId=${chatid}`,
//                 success: function (data) {
//                     console.log(data);
//                     if (data.value) {
//                         gameguid = data.msg;
//                         console.log("Игра добавлена: " + gameguid );
//                     }
//                     else {
//                         console.log("Ошибка");
//                     }
//                 }
//             });
//         } else {
//             console.log("Уже играл сегодня");
//             //Вывести окно и ошибка 
//         } 
//     },
// });


// //Закрываем приложение от даем в бот ИД
// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//     let gameEnd = {
//         chatid: tg.initDataUnsafe.user.id
//     }
//     tg.sendData(JSON.stringify(gameEnd));
// });




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function shuffleZIndex() {
    const imgList = document.querySelector(".machine__placeholder");
    const images = imgList.querySelectorAll("img");
    const zIndexArray = [];

    images.forEach((image, index) => {
        zIndexArray.push(index);
    });

    for (let i = 0; i < 50; i++) {
        // Shuffle the zIndexArray
        for (let i = zIndexArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [zIndexArray[i], zIndexArray[j]] = [zIndexArray[j], zIndexArray[i]];
        }
        images.forEach((image, index) => {
            image.style.zIndex = zIndexArray[index];
        });

        await sleep(100);
    }

    images.forEach((image) => {
        image.classList.add("zoomed-in");
    });

    tg.MainButton.text = "Получить подарок";
    tg.MainButton.show();

    tg.Close();
}


function Play() {
    shuffleZIndex();
}

