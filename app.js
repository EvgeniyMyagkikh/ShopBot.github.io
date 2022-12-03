let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#4169E1";

let item = "";

// Получили все объекты .inner
const inner = document.querySelector(".inner");

// Отправка сообщения, что на кнопку нажали
function show_message(id){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали " + id)
        item = '1';
        tg.MainButton.show();
    }
}

// Проверка, что объект - кнопка
inner.addEventListener("click", function(event){
    if (event.target.closest('.btn')){
    id = event.target.getAttribute('id')
    show_message(id);
    }
 });


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p);



