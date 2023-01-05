let tg = window.Telegram.WebApp;

tg.expand();

$(tg).ready(function () {
  $('.syrup__container').click(function(event) {
    $('.syrup__container').toggleClass('active')
  });
});

