let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#4169E1";

let item = "";
let size = '';

// Получили все объекты .inner
const inner = document.querySelector(".inner");

let coffee = 0;
let coffee_size = "";
let tea = 0;
let tea_size = '';
function cart(product, size) {
  coffee = product;
  coffee_size = size;

  tea = product;
  tea_size = size;

  console.log(coffee);
  console.log(coffee_size);
  console.log(tea);
  console.log(tea_size);
}
// Обработка кнопки заказать
function show_message(id) {
  item = 1;

  tg.MainButton.setText("Перейти к оплате");
  tg.MainButton.show();
}

// Проверка, что объект заказать - кнопка
inner.addEventListener("click", function (event) {
  if (event.target.closest('.btn')) {
    let id = event.target.getAttribute('id');
    show_message(id);
  }
  if (event.target.closest('.size')) {
    let id = event.target.getAttribute('id');
    if (event.target.closest('.coffee')) {
      let coffee = 1
      cart(id, coffee)
    }
  }
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});




