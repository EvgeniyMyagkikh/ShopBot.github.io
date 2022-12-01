let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let a = [btn1, btn2, btn3, btn4, btn5, btn6];

for i = 0;;i++{
 i.addEventListener("click", function(){
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Press me';
  button.className = 'btn';
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Вы выбрали товар" + "" );
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




