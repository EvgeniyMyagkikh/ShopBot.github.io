let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#4169E1";

let item = "";

// Получили все объекты .inner
const inner = document.querySelector(".inner");

// Обработка кнопки заказать
function show_message() {
  tg.MainButton.setText("Перейти к оплате")

  tg.MainButton.show();
}

// Проверка, что объект заказать - кнопка
inner.addEventListener("click", function (event) {
  if (event.target.closest('.btn')){
    let id = event.target.getAttribute('id');
    show_message();
  }
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});




