from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext

TOKEN ='79814548166489:AAGLyeX3xsCBZyJRY1HtCfK8fXtb-oQqZbU'

TRIGGER_WORDS = {
    "안녕":"안녕하세요! 저는 정민봇입니다😁",
    "잠와":"쉬는시간에 주무세요😪",
    "배고파":"오늘 메뉴는 뭔가요?🍚",
    "기분":"기분 좋아요😉",
    "집가고싶어":"5시 30분까지 얼마나 남았나요?🕒",
    "오리":"꽥꽥🦆🦆",
    "병아리":"삐약삐약🐥🐥",
    "참새":"짹짹🐦",
    "강아지":"멍멍🐕🐕",
    "고양이":"야옹🐈‍🐈‍",
    "송아지":"음모오오오오오오🐂",
    "염소":"음메에에...🐑"
}

async def start(update, context):
    await update.message.reply_text("안녕하세요 저는 정민봇입니다. 무엇을 도와드릴까요?")

async def monitor_chat(update, context):
    user_text = update.message.text    # 감지된 메시지
    chat_id = update.message.chat_id

    for key, res in TRIGGER_WORDS.items():
        if key in user_text:
            await context.bot.send_message(chat_id=chat_id,text=res)
            break  # 한개의 키워드에만 반응

def main():
    app = Application.builder().token(TOKEN).build()
    # 명령어 핸들러 추가
    app.add_handler(CommandHandler("start", start))

    # 응답 핸들러 추가
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, monitor_chat))

    print("봇 작동중, 잠시만 기다려주세요")
    app.run_polling()

if __name__ == '__main__':
    main()