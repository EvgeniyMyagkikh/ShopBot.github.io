import os

import dotenv
from aiogram import Bot, Dispatcher, types, executor

dotenv.load_dotenv(".env")

bot = Bot(token=os.environ.get("API_KEY"))
dp = Dispatcher(bot)

web_app = types.WebAppInfo(url = "http://localhost:63343/untitled/index.html?_ijt=evh8m33rmlvm8q84g62bf64ta2&_ij_reload=RELOAD_ON_SAVE")
keyboard = types.ReplyKeyboardMarkup(
    keyboard=[
        [types.KeyboardButton(text="Site", web_app=web_app)]
    ],
    resize_keyboard=True
)


@dp.message_handler(commands=['start'])
async def send_welcome(message: types.Message):
    await bot.send_message(message.chat.id, "Привет, что хочешь заказать?", reply_markup=keyboard)


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
