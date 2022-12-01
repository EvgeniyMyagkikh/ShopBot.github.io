let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

for (let i = 1; i < 11; i++){
let a = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8]
let btn = document.getElementById("btn"+String(i+1))

btn.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
})};


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p);




