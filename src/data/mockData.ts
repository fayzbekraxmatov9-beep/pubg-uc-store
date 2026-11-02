export interface UcPackage {
  id: string;
  uc: number;
  bonus: number;
  priceUzs: number;
  oldPriceUzs?: number;
  badge?: string;
  popular?: boolean;
  image: string;
}

export const UC_PACKAGES: UcPackage[] = [
  {
    id: "uc-60",
    uc: 60,
    bonus: 0,
    priceUzs: 11000,
    image: "🪙",
  },
  {
    id: "uc-300",
    uc: 300,
    bonus: 25,
    priceUzs: 52000,
    badge: "+25 UC Sovg'a",
    image: "💰",
  },
  {
    id: "uc-600",
    uc: 600,
    bonus: 60,
    priceUzs: 104000,
    popular: true,
    badge: "Royale Pass uchun tavsiya",
    image: "🔥",
  },
  {
    id: "uc-1500",
    uc: 1500,
    bonus: 300,
    priceUzs: 259000,
    badge: "Eng ko'p sotilgan",
    popular: true,
    image: "💎",
  },
  {
    id: "uc-3000",
    uc: 3000,
    bonus: 850,
    priceUzs: 515000,
    oldPriceUzs: 580000,
    badge: "+850 UC Bonus",
    image: "👑",
  },
  {
    id: "uc-6000",
    uc: 6000,
    bonus: 2100,
    priceUzs: 1020000,
    oldPriceUzs: 1190000,
    badge: "VIP MEGA PAKET",
    image: "🏆",
  },
  {
    id: "uc-12000",
    uc: 12000,
    bonus: 4200,
    priceUzs: 2020000,
    oldPriceUzs: 2350000,
    badge: "SUPER AKSIYA -15%",
    image: "⚡",
  },
  {
    id: "uc-18000",
    uc: 18000,
    bonus: 6500,
    priceUzs: 3010000,
    oldPriceUzs: 3500000,
    badge: "MAKSIMAL FOYDA",
    image: "🌟",
  },
];

export interface PaymentMethod {
  id: string;
  name: string;
  badge?: string;
  color: string;
  icon: string;
  discount?: string;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "click",
    name: "Click Up",
    badge: "0% komissiya",
    color: "from-blue-600 to-cyan-500",
    icon: "💳",
  },
  {
    id: "payme",
    name: "Payme",
    badge: "Tezkor to'lov",
    color: "from-teal-500 to-emerald-600",
    icon: "📱",
  },
  {
    id: "uzum",
    name: "Uzum Bank / Nasiya",
    badge: "Keshbek bilan",
    color: "from-purple-600 to-indigo-600",
    icon: "🍇",
  },
  {
    id: "humo-uzcard",
    name: "Uzcard / Humo",
    badge: "Barcha kartalar",
    color: "from-amber-500 to-orange-600",
    icon: "⚡",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Javohir_Sniper",
    rating: 5,
    playerId: "542918****",
    comment: "1 daqiqada tushdi! Royale Pass sotib oldim, narxlari bozordan ancha arzon ekan. Rahmat!",
    time: "5 daqiqa oldin",
    ucAmount: "660 UC",
  },
  {
    id: 2,
    name: "Bekzod PRO",
    rating: 5,
    playerId: "518392****",
    comment: "Avvaliga xavotir olgandim, lekin 3000 UC olganimda 850 UC bonus ham berishdi. Halol va ishonchli!",
    time: "24 daqiqa oldin",
    ucAmount: "3850 UC",
  },
  {
    id: 3,
    name: "Sardor Uzb",
    rating: 5,
    playerId: "512493****",
    comment: "Telegram support zo'r javob beradi. ID kiritdim to'ladim darhol hisobimga tushdi.",
    time: "1 soat oldin",
    ucAmount: "60 UC",
  },
  {
    id: 4,
    name: "Jasur M416",
    rating: 5,
    playerId: "588231****",
    comment: "M416 muzli qurolga aylantirish uchun 6000 UC oldim, hammasi joyida tushdi. Tavsiya qilaman!",
    time: "2 soat oldin",
    ucAmount: "8100 UC",
  },
];

export const FAQS = [
  {
    q: "UC qancha vaqt ichida hisobimga tushadi?",
    a: "To'lov muvaffaqiyatli amalga oshirilgandan so'ng, tizim avtomatik ravishda 30 soniyadan 3 daqiqagacha bo'lgan vaqt ichida to'g'ridan-to'g'ri o'yin hisobingizga UCni tushirib beradi.",
  },
  {
    q: "Akkaunt paroli kerak bo'ladimi?",
    a: "Yo'q! Biz hech qachon akkauntingiz parolini so'ramaymiz. Faqat sizning PUBG Mobile o'yinchi ID raqamingiz (Player ID) kifoya. Bu 100% xavfsiz.",
  },
  {
    q: "O'yinchi ID raqamimni qayerdan topsam bo'ladi?",
    a: "O'yinga kiring -> Chap tomondagi profilingiz rasmini bosing -> 'Main' (Asosiy) bo'limida 10 talik raqamli ID'ingizni ko'rasiz va nusxalab olasiz.",
  },
  {
    q: "To'lov o'tgach UC tushmasa nima qilish kerak?",
    a: "Bunday holat deyarli kuzatilmaydi, ammo internet yoki server uzilishlari bo'lsa, bizning 24/7 Telegram qo'llab-quvvatlash xizmatimizga chek bilan murojaat qilsangiz, darhol hal qilib beriladi.",
  },
  {
    q: "Bonus UC qo'shib beriladimi?",
    a: "Ha, ko'rsatilgan paketlardagi barcha bonus UC-lar avtomatik tarzda asosiy summaga qo'shilib hisobingizga to'liq tushadi.",
  },
];
