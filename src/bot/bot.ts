import { Telegraf, Markup } from "telegraf";
import * as dotenv from "dotenv";
import path from "path";

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN || BOT_TOKEN === "YOUR_TELEGRAM_BOT_TOKEN_HERE") {
  console.error("Xatolik: TELEGRAM_BOT_TOKEN topilmadi! Iltimos, .env.local faylida bot tokeningizni kiriting.");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// In-memory state for user orders
interface UserSession {
  step?: "awaiting_id" | "awaiting_phone";
  selectedPackage?: { uc: number; bonus: number; price: number };
  playerId?: string;
}

const sessions = new Map<number, UserSession>();

// UC Packages for Bot
const BOT_PACKAGES = [
  { id: "pkg_60", label: "60 UC", uc: 60, bonus: 0, price: 11000 },
  { id: "pkg_300", label: "300+25 UC", uc: 300, bonus: 25, price: 52000 },
  { id: "pkg_600", label: "600+60 UC (RP)", uc: 600, bonus: 60, price: 104000 },
  { id: "pkg_1500", label: "1500+300 UC", uc: 1500, bonus: 300, price: 259000 },
  { id: "pkg_3000", label: "3000+850 UC", uc: 3000, bonus: 850, price: 515000 },
  { id: "pkg_6000", label: "6000+2100 UC", uc: 6000, bonus: 2100, price: 1020000 },
];

// Start command
bot.start((ctx) => {
  const userName = ctx.from?.first_name || "Geymer";
  sessions.delete(ctx.from.id);

  const welcomeText = `
Assalomu alaykum, <b>${userName}</b>! 👋

🎮 <b>PUBG Mobile UC Store</b> rasmiy botiga xush kelibsiz!
Bu yerda siz o'yindagi hisobingizga 1 daqiqa ichida, eng arzon narxlarda va bonuslar bilan UC xarid qilishingiz mumkin.

⚡ <i>Parol talab qilinmaydi — faqat Player ID kifoya!</i>
  `;

  ctx.replyWithHTML(
    welcomeText,
    Markup.inlineKeyboard([
      [Markup.button.callback("🔥 UC Paketlarini Tanlash", "menu_packages")],
      [Markup.button.webApp("🌐 Web Do'konni Ochish", siteUrl)],
      [
        Markup.button.callback("ℹ️ Qanday Ishlaydi?", "menu_how"),
        Markup.button.callback("📞 Aloqa / Yordam", "menu_help"),
      ],
    ])
  );
});

// Help command
bot.help((ctx) => {
  ctx.replyWithHTML(
    `<b>Yordam bo'limi:</b>\n\nSavollar yoki buyurtma bo'yicha admin: @pubg_uc_admin\nBotni qayta ishga tushirish uchun /start bosing.`
  );
});

// Menu: Packages
bot.action("menu_packages", (ctx) => {
  const keyboard = BOT_PACKAGES.map((pkg) => [
    Markup.button.callback(
      `${pkg.label} — ${pkg.price.toLocaleString("uz-UZ")} so'm`,
      `select_${pkg.id}`
    ),
  ]);

  keyboard.push([Markup.button.callback("⬅️ Orqaga", "menu_back")]);

  ctx.editMessageText(
    "👇 <b>Kerakli UC paketini tanlang:</b>\n<i>Bonuslar avtomatik tarzda qo'shib beriladi.</i>",
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard(keyboard),
    }
  );
});

// Select package
BOT_PACKAGES.forEach((pkg) => {
  bot.action(`select_${pkg.id}`, (ctx) => {
    const userId = ctx.from.id;
    sessions.set(userId, {
      selectedPackage: { uc: pkg.uc, bonus: pkg.bonus, price: pkg.price },
      step: "awaiting_id",
    });

    ctx.replyWithHTML(
      `✅ Tanlandi: <b>${pkg.uc} ${pkg.bonus > 0 ? `+ ${pkg.bonus}` : ""} UC</b>\n` +
      `Narxi: <b>${pkg.price.toLocaleString("uz-UZ")} so'm</b>\n\n` +
      `✍️ Iltimos, PUBG Mobile <b>Player ID (raqamli ID)</b>ingizni yuboring:\n` +
      `<i>(Masalan: 5123456789)</i>`,
      Markup.keyboard([["❌ Bekor qilish"]]).resize()
    );
  });
});

// How it works
bot.action("menu_how", (ctx) => {
  ctx.replyWithHTML(
    `<b>Qanday qilib UC xarid qilinadi?</b>\n\n` +
    `1️⃣ Paketni tanlang\n` +
    `2️⃣ Player ID raqamingizni yozing\n` +
    `3️⃣ Click / Payme orqali to'lov qiling\n` +
    `4️⃣ 1 daqiqada hisobingizga UC tushadi!\n\n` +
    `🛡️ <i>Akkaunt xavfsizligi 100% kafolatlangan!</i>`,
    Markup.inlineKeyboard([[Markup.button.callback("🔥 Paketlarni Tanlash", "menu_packages")]])
  );
});

// Help menu
bot.action("menu_help", (ctx) => {
  ctx.replyWithHTML(
    `📞 <b>Mijozlarni qo'llab-quvvatlash xizmati:</b>\n\n` +
    `👤 Telegram: @pubg_uc_admin\n` +
    `⏰ Ish vaqti: 24/7 uzluksiz\n\n` +
    `Savollaringiz bo'lsa bemalol yozishingiz mumkin!`,
    Markup.inlineKeyboard([[Markup.button.callback("⬅️ Asosiy Menyu", "menu_back")]])
  );
});

// Back to main
bot.action("menu_back", (ctx) => {
  const userName = ctx.from?.first_name || "Geymer";
  ctx.editMessageText(
    `Assalomu alaykum, <b>${userName}</b>!\nAsosiy menyudasiz. Kerakli bo'limni tanlang:`,
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        [Markup.button.callback("🔥 UC Paketlarini Tanlash", "menu_packages")],
        [Markup.button.webApp("🌐 Web Do'konni Ochish", siteUrl)],
        [
          Markup.button.callback("ℹ️ Qanday Ishlaydi?", "menu_how"),
          Markup.button.callback("📞 Aloqa / Yordam", "menu_help"),
        ],
      ]),
    }
  );
});

// Text message handler (ID and Phone input)
bot.on("text", async (ctx) => {
  const userId = ctx.from.id;
  const text = ctx.message.text.trim();
  const session = sessions.get(userId);

  if (text === "❌ Bekor qilish") {
    sessions.delete(userId);
    ctx.reply(
      "Buyurtma bekor qilindi.",
      Markup.keyboard([["/start"]]).resize()
    );
    return;
  }

  // Handle Player ID input
  if (session?.step === "awaiting_id") {
    if (!/^\d{6,12}$/.test(text)) {
      ctx.reply("⚠️ Noto'g'ri ID! Iltimos, faqat 6-12 ta raqamdan iborat bo'lgan PUBG ID'ingizni kiriting.");
      return;
    }

    session.playerId = text;
    session.step = "awaiting_phone";
    sessions.set(userId, session);

    ctx.replyWithHTML(
      `✅ Qabul qilindi!\nPlayer ID: <code>${text}</code>\n\n` +
      `📞 Endi to'lov cheki va tasdiqlash uchun telefon raqamingizni yuboring:\n` +
      `<i>(Masalan: +998901234567)</i>`,
      Markup.keyboard([["❌ Bekor qilish"]]).resize()
    );
    return;
  }

  // Handle Phone input
  if (session?.step === "awaiting_phone") {
    const phone = text;
    const pkg = session.selectedPackage!;
    const pId = session.playerId!;

    sessions.delete(userId);

    // Send summary to user
    await ctx.replyWithHTML(
      `🎉 <b>BUYURTMA QABUL QILINDI!</b>\n\n` +
      `🎮 <b>Player ID:</b> <code>${pId}</code>\n` +
      `📦 <b>Paket:</b> ${pkg.uc} ${pkg.bonus > 0 ? `+ ${pkg.bonus}` : ""} UC\n` +
      `💰 <b>Summa:</b> ${pkg.price.toLocaleString("uz-UZ")} so'm\n` +
      `📞 <b>Telefon:</b> ${phone}\n\n` +
      `💳 To'lovni amalga oshirish uchun quyidagi tugmani bosing:`,
      Markup.inlineKeyboard([
        [Markup.button.url("💳 Sayt Orqali To'lash", `${siteUrl}/packages`)],
        [Markup.button.callback("🔄 Yangi Buyurtma", "menu_packages")],
      ])
    );

    // Notify Admin if ADMIN_TELEGRAM_ID is set
    const adminId = process.env.ADMIN_TELEGRAM_ID;
    if (adminId && adminId !== "123456789") {
      try {
        await ctx.telegram.sendMessage(
          adminId,
          `🚨 <b>YANGI BOT BUYURTMASI!</b>\n\n` +
          `👤 <b>Foydalanuvchi:</b> @${ctx.from.username || "noma'lum"} (${ctx.from.first_name})\n` +
          `🎮 <b>Player ID:</b> <code>${pId}</code>\n` +
          `📦 <b>Paket:</b> ${pkg.uc} UC (+${pkg.bonus} bonus)\n` +
          `💰 <b>Summa:</b> ${pkg.price.toLocaleString("uz-UZ")} so'm\n` +
          `📞 <b>Tel:</b> ${phone}`,
          { parse_mode: "HTML" }
        );
      } catch (err) {
        console.error("Admin notification error:", err);
      }
    }
  }
});

// Admin callback actions
bot.action(/done_(.+)/, async (ctx) => {
  const message = ctx.callbackQuery.message;
  const originalText = message && "text" in message ? (message as { text?: string }).text || "" : "";
  await ctx.answerCbQuery("Tasdiqlandi!");
  await ctx.editMessageText(originalText + `\n\n✅ <b>ADMIN TOMONIDAN TUSHIRILDI!</b>`, {
    parse_mode: "HTML",
  });
});

bot.action(/cancel_(.+)/, async (ctx) => {
  const message = ctx.callbackQuery.message;
  const originalText = message && "text" in message ? (message as { text?: string }).text || "" : "";
  await ctx.answerCbQuery("Bekor qilindi");
  await ctx.editMessageText(originalText + `\n\n❌ <b>ADMIN TOMONIDAN BEKOR QILINDI!</b>`, {
    parse_mode: "HTML",
  });
});

console.log("🤖 PUBG UC Telegram Boti tayyorlanmoqda...");

bot.launch()
  .then(() => {
    console.log("✅ PUBG UC Telegram Boti muvaffaqiyatli ishga tushdi!");
  })
  .catch((err) => {
    console.error("❌ Botni ishga tushirishda xatolik:", err.message);
  });

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
