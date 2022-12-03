let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

// получили все кнопки
const inner = document.querySelector(".inner");

// действие кнопки
function show_message(inner){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали " + alert(inner.getAttribute("alt"));
        item = '1';
        tg.MainButton.show();
    }
}

// проверка, что это кнопка
inner.addEventListener("click", function(event){
    if (event.target.closest('.item')){
    show_message();
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



