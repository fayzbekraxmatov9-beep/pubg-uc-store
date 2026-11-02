import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { playerId, playerNickname, packageInfo, paymentMethod, phone } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const adminId = process.env.ADMIN_TELEGRAM_ID;

    if (!botToken || botToken === "YOUR_TELEGRAM_BOT_TOKEN_HERE" || !adminId) {
      console.warn("TELEGRAM_BOT_TOKEN yoki ADMIN_TELEGRAM_ID .env faylida belgilanmagan.");
      return NextResponse.json({
        success: true,
        message: "Buyurtma qabul qilindi (Bot sozlamalari kiritilmagan)",
      });
    }

    // Format notification message for admin
    const text = `
🔥 <b>YANGI PUBG UC BUYURTMASI!</b>

👤 <b>O'yinchi ID:</b> <code>${playerId}</code>
🎮 <b>Nik:</b> ${playerNickname || "Aniqlanmadi"}
📞 <b>Telefon:</b> ${phone}

📦 <b>Paket:</b> ${packageInfo.uc} UC ${packageInfo.bonus > 0 ? `(+${packageInfo.bonus} UC Bonus)` : ""}
💰 <b>Summa:</b> ${packageInfo.priceUzs?.toLocaleString("uz-UZ")} so'm
💳 <b>To'lov usuli:</b> ${paymentMethod?.name || "Karta"}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}
`;

    // Send notification to Admin Telegram
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: adminId,
        text: text,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ Tushirildi", callback_data: `done_${playerId}` },
              { text: "❌ Bekor qilish", callback_data: `cancel_${playerId}` },
            ],
          ],
        },
      }),
    });

    return NextResponse.json({ success: true, message: "Buyurtma adminga yuborildi!" });
  } catch (error: unknown) {
    console.error("Order API error:", error);
    return NextResponse.json(
      { success: false, error: "Buyurtmani yuborishda xatolik" },
      { status: 500 }
    );
  }
}
