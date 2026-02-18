const menuData = [
    // ==================== СЕТЫ ====================
    {
        id: 1,
        name: 'Сет №1',
        nameKg: 'Сет №1',
        description: 'Филадельфия с тамаго, Чиз ролл, Филадельфия с курицей',
        descriptionKg: 'Тамаго менен Филадельфия, Чиз ролл, Тоок менен Филадельфия',
        price: 1099,
        image: './imagemenu/set1.jpg',
        category: 'sets'
    },
    {
        id: 2,
        name: 'Сет №2',
        nameKg: 'Сет №2',
        description: 'Калифорния (лосось, креветка, тамаго, курица)',
        descriptionKg: 'Калифорния (лосось, креветка, тамаго, тоок)',
        price: 1199,
        image: './imagemenu/set2.webp',
        category: 'sets'
    },
    {
        id: 3,
        name: 'Сет №3',
        nameKg: 'Сет №3',
        description: 'Филадельфия, Чиз хот с курицей, Мини с лососем, Эби с огурцом',
        descriptionKg: 'Филадельфия, Тоок менен Чиз хот, Лосось менен Мини, Огурц менен Эби',
        price: 1299,
        image: './imagemenu/set3.webp',
        category: 'sets'
    },
    {
        id: 4,
        name: 'Сет №4',
        nameKg: 'Сет №4',
        description: 'Калифорния с креветкой, Хот Чиз с курицей, Яки с тунцом, Япония ролл',
        descriptionKg: 'Креветка менен Калифорния, Тоок менен Хот Чиз, Тунец менен Яки, Япония ролл',
        price: 1399,
        image: './imagemenu/set4.jpg',
        category: 'sets'
    },
    {
        id: 5,
        name: 'Сет №5',
        nameKg: 'Сет №5',
        description: 'Горячий с тунцом, Темпура с курицей, Спайси с лососем, Шарики с курицей и лососем',
        descriptionKg: 'Тунец менен Горячий, Тоок менен Темпура, Лосось менен Спайси, Тоок жана лосось менен Шарики',
        price: 1199,
        image: './imagemenu/set5.jpg',
        category: 'sets'
    },
    {
        id: 6,
        name: 'Сет №6',
        nameKg: 'Сет №6',
        description: 'Филадельфия гриль, Умани с курицей, Салмон с лососем, Чиз хот с креветкой',
        descriptionKg: 'Филадельфия гриль, Тоок менен Умани, Лосось менен Салмон, Креветка менен Чиз хот',
        price: 1499,
        image: './imagemenu/set6.jpg',
        category: 'sets'
    },

    // ==================== ХОЛОДНЫЕ РОЛЛЫ ====================
    {
        id: 7,
        name: 'Канада',
        nameKg: 'Канада',
        description: 'Холодный ролл Канада',
        descriptionKg: 'Канада муздак роллу',
        price: 440,
        image: './imagemenu/Канада.jpg',
        category: 'cold_rolls'
    },
    {
        id: 8,
        name: 'Япония',
        nameKg: 'Япония',
        description: 'Холодный ролл Япония',
        descriptionKg: 'Япония муздак роллу',
        price: 430,
        image: './imagemenu/Japan.avif',
        category: 'cold_rolls'
    },
    {
        id: 9,
        name: 'Магуро',
        nameKg: 'Магуро',
        description: 'Холодный ролл Магуро',
        descriptionKg: 'Магуро муздак роллу',
        price: 450,
        image: './imagemenu/Магуро.avif',
        category: 'cold_rolls'
    },
    {
        id: 10,
        name: 'Мидори',
        nameKg: 'Мидори',
        description: 'Холодный ролл Мидори',
        descriptionKg: 'Мидори муздак роллу',
        price: 480,
        image: './imagemenu/midori.jpg',
        category: 'cold_rolls'
    },
    {
        id: 11,
        name: 'Филадельфия',
        nameKg: 'Филадельфия',
        description: 'Холодный ролл Филадельфия',
        descriptionKg: 'Филадельфия муздак роллу',
        price: 430,
        image: './imagemenu/philadelphia.jpg',
        category: 'cold_rolls'
    },
    {
        id: 12,
        name: 'Эби Дабл',
        nameKg: 'Эби Дабл',
        description: 'Холодный ролл Эби Дабл',
        descriptionKg: 'Эби Дабл муздак роллу',
        price: 480,
        image: './imagemenu/ebi_double.png',
        category: 'cold_rolls'
    },
    // Вариативные роллы
    {
        id: 13,
        name: 'Хоккайдо',
        nameKg: 'Хоккайдо',
        description: 'Вариативный ролл Хоккайдо',
        descriptionKg: 'Хоккайдо өзгөрмө роллу',
        variants: [
            { name: 'Лосось', price: 430 },
            { name: 'Креветка', price: 420 },
            { name: 'Тунец', price: 410 },
            { name: 'Курица', price: 380 }
        ],
        image: './imagemenu/hokkaido.jpg',
        category: 'cold_rolls'
    },
    {
        id: 14,
        name: 'Яки ролл',
        nameKg: 'Яки ролл',
        description: 'Вариативный ролл Яки',
        descriptionKg: 'Яки өзгөрмө роллу',
        variants: [
            { name: 'Лосось', price: 420 },
            { name: 'Креветка', price: 410 },
            { name: 'Тунец', price: 400 },
            { name: 'Курица', price: 380 }
        ],
        image: './imagemenu/yaki_roll.avif',
        category: 'cold_rolls'
    },
    {
        id: 15,
        name: 'Фила Лайт',
        nameKg: 'Фила Лайт',
        description: 'Вариативный ролл Фила Лайт',
        descriptionKg: 'Фила Лайт өзгөрмө роллу',
        variants: [
            { name: 'Лосось', price: 440 },
            { name: 'Креветка', price: 430 },
            { name: 'Тунец', price: 420 },
            { name: 'Курица', price: 400 },
            { name: 'Угорь', price: 460 }
        ],
        image: './imagemenu/phila_light.avif',
        category: 'cold_rolls'
    },
    {
        id: 16,
        name: 'Грин ролл',
        nameKg: 'Грин ролл',
        description: 'Вариативный ролл Грин',
        descriptionKg: 'Грин өзгөрмө роллу',
        variants: [
            { name: 'Лосось', price: 420 },
            { name: 'Креветка', price: 410 },
            { name: 'Тунец', price: 400 },
            { name: 'Курица', price: 380 }
        ],
        image: './imagemenu/green_roll.jpg',
        category: 'cold_rolls'
    },
    {
        id: 17,
        name: 'Калифорния',
        nameKg: 'Калифорния',
        description: 'Вариативный ролл Калифорния',
        descriptionKg: 'Калифорния өзгөрмө роллу',
        variants: [
            { name: 'Лосось', price: 420 },
            { name: 'Креветка', price: 410 },
            { name: 'Тунец', price: 400 },
            { name: 'Курица', price: 380 }
        ],
        image: './imagemenu/california.avif',
        category: 'cold_rolls'
    },
    // Мини роллы
    {
        id: 18,
        name: 'Мини ролл с огурцом',
        nameKg: 'Огурц менен Мини ролл',
        description: 'Мини ролл с огурцом',
        descriptionKg: 'Огурц менен мини ролл',
        price: 140,
        image: './imagemenu/mini_cucumber.jpg',
        category: 'cold_rolls'
    },
    {
        id: 19,
        name: 'Мини ролл с креветкой',
        nameKg: 'Креветка менен Мини ролл',
        description: 'Мини ролл с креветкой',
        descriptionKg: 'Креветка менен мини ролл',
        price: 220,
        image: './imagemenu/mini_shrimp.jpg',
        category: 'cold_rolls'
    },

    // ==================== ЗАПЕЧЕННЫЕ И ЖАРЕНЫЕ РОЛЛЫ ====================
    {
        id: 20,
        name: 'Горячий ролл',
        nameKg: 'Горячий ролл',
        description: 'Запеченный ролл',
        descriptionKg: 'Куурулган ролл',
        variants: [
            { name: 'Лосось', price: 410 },
            { name: 'Креветка', price: 400 },
            { name: 'Тунец', price: 390 },
            { name: 'Курица', price: 370 }
        ],
        image: './imagemenu/hot_roll.jpg',
        category: 'baked_rolls'
    },
    {
        id: 21,
        name: 'Спайси ролл',
        nameKg: 'Спайси ролл',
        description: 'Острый запеченный ролл',
        descriptionKg: 'Ачуу куурулган ролл',
        variants: [
            { name: 'Лосось', price: 400 },
            { name: 'Креветка', price: 390 },
            { name: 'Тунец', price: 380 },
            { name: 'Курица', price: 350 }
        ],
        image: './imagemenu/spicy_roll.png',
        category: 'baked_rolls'
    },
    {
        id: 22,
        name: 'Темпура Ролл',
        nameKg: 'Темпура Ролл',
        description: 'Жареный ролл в темпуре',
        descriptionKg: 'Темпурада куурулган ролл',
        variants: [
            { name: 'Лосось', price: 420 },
            { name: 'Креветка', price: 410 },
            { name: 'Тунец', price: 400 },
            { name: 'Курица', price: 380 }
        ],
        image: './imagemenu/tempura_roll.jpeg',
        category: 'baked_rolls'
    },
    {
        id: 23,
        name: 'Чиз хот / Чизу Хот',
        nameKg: 'Чиз хот / Чизу Хот',
        description: 'Ролл с сыром и острым соусом',
        descriptionKg: 'Сыр жана ачуу соус менен ролл',
        variants: [
            { name: 'Лосось', price: 420 },
            { name: 'Креветка', price: 410 },
            { name: 'Тунец', price: 400 },
            { name: 'Курица', price: 340 }
        ],
        image: './imagemenu/cheese_hot.avif',
        category: 'baked_rolls'
    },
    {
        id: 24,
        name: 'Фила Гриль',
        nameKg: 'Фила Гриль',
        description: 'Запеченный ролл Филадельфия',
        descriptionKg: 'Куурулган Филадельфия роллу',
        variants: [
            { name: 'Лосось', price: 470 },
            { name: 'Креветка', price: 460 },
            { name: 'Тунец', price: 450 },
            { name: 'Курица', price: 440 },
            { name: 'Угорь', price: 470 }
        ],
        image: './imagemenu/phila_grill.jpg',
        category: 'baked_rolls'
    },
    {
        id: 25,
        name: 'Хот Салмон / Умани / Яшими',
        nameKg: 'Хот Салмон / Умани / Яшими',
        description: 'Острый ролл с лососем',
        descriptionKg: 'Лосось менен ачуу ролл',
        variants: [
            { name: 'Лосось', price: 440 },
            { name: 'Креветка', price: 430 },
            { name: 'Тунец', price: 420 },
            { name: 'Курица', price: 390 }
        ],
        image: './imagemenu/hot_salmon.jpg',
        category: 'baked_rolls'
    },
    {
        id: 26,
        name: 'Туна Хот / Гуру ролл',
        nameKg: 'Туна Хот / Гуру ролл',
        description: 'Острый ролл с тунцом',
        descriptionKg: 'Тунец менен ачуу ролл',
        variants: [
            { name: 'Лосось', price: 450 },
            { name: 'Креветка', price: 440 },
            { name: 'Тунец', price: 430 },
            { name: 'Курица', price: 420 }
        ],
        image: './imagemenu/tuna_hot.jpg',
        category: 'baked_rolls'
    },

    // ==================== KFC ====================
    {
        id: 27,
        name: 'Острые крылышки 6 шт',
        nameKg: 'Ачуу канаттар 6 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 240,
        image: './imagemenu/wings6.webp',
        category: 'wings'
    },
    {
        id: 28,
        name: 'Острые крылышки 10 шт',
        nameKg: 'Ачуу канаттар 10 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 400,
        image: './imagemenu/wings10.png',
        category: 'wings'
    },
    {
        id: 29,
        name: 'Острые крылышки 15 шт',
        nameKg: 'Ачуу канаттар 15 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 600,
        image: './imagemenu/wings15.webp',
        category: 'wings'
    },
    {
        id: 30,
        name: 'Острые крылышки 22 шт',
        nameKg: 'Ачуу канаттар 22 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 880,
        image: './imagemenu/wings22.webp',
        category: 'wings'
    },
    {
        id: 31,
        name: 'Острые крылышки 30 шт',
        nameKg: 'Ачуу канаттар 30 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 1200,
        image: './imagemenu/wings30.jpg',
        category: 'wings'
    },
    {
        id: 32,
        name: 'Наггетсы 10 шт',
        nameKg: 'Наггетс 10 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 250,
        image: './imagemenu/uggets10.jpg',
        category: 'nuggets'
    },
    {
        id: 33,
        name: 'Наггетсы 15 шт',
        nameKg: 'Наггетс 15 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 350,
        image: './imagemenu/uggets15.png',
        category: 'nuggets'
    },
    {
        id: 34,
        name: 'Наггетсы 20 шт',
        nameKg: 'Наггетс 20 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 450,
        image: './imagemenu/nuggets20.webp',
        category: 'nuggets'
    },
    {
        id: 35,
        name: 'Наггетсы 30 шт',
        nameKg: 'Наггетс 30 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 660,
        image: './imagemenu/uggets30.jpg',
        category: 'nuggets'
    },

    // ==================== ПИЦЦА ====================
    {
        id: 36,
        name: 'Маргарита',
        nameKg: 'Маргарита',
        description: 'Классическая пицца с томатным соусом и моцареллой',
        descriptionKg: 'Классикалык помидор соусу жана моцарелла менен',
        price: 450,
        image: './imagemenu/margarita.jpeg',
        category: 'pizza'
    },
    {
        id: 37,
        name: 'Пепперони / Детская',
        nameKg: 'Пепперони / Балдарга',
        description: 'Пицца с пепперони или детская',
        descriptionKg: 'Пепперони же балдар пиццасы',
        price: 480,
        image: './imagemenu/pepperoni.webp',
        category: 'pizza'
    },
    {
        id: 38,
        name: 'Курица с грибами',
        nameKg: 'Козу карын менен тоок',
        description: 'Сочная пицца с куриным филе и шампиньонами',
        descriptionKg: 'Тоок филеси жана шампиньон кошулган ширелүү пицца',
        price: 500,
        image: './imagemenu/chicken_mushrooms.jpg',
        category: 'pizza'
    },
    {
        id: 39,
        name: 'Фрикасе',
        nameKg: 'Фрикасе',
        description: 'Пицца с нежным соусом фрикасе и курицей',
        descriptionKg: 'Фрикасе соусу жана тоок эти кошулган пицца',
        price: 520,
        image: './imagemenu/fricase.avif',
        category: 'pizza'
    },
    {
        id: 40,
        name: 'Мясная / Чили',
        nameKg: 'Эттүү / Чили',
        description: 'Сытная пицца с мясом или острая с чили',
        descriptionKg: 'Эт кошулган тойумдуу пицца же чили менен ачуу',
        price: 550,
        image: './imagemenu/meat_chili.webp',
        category: 'pizza'
    },

    // ==================== КАРТОФЕЛЬ И ДОПЫ ====================
    {
        id: 41,
        name: 'Картофель Фри / Шарики',
        nameKg: 'Фри картөшкө / Шарики',
        description: 'Картофель фри или шарики',
        descriptionKg: 'Фри картөшкө же шарики',
        price: 130,
        image: './imagemenu/fries_balls.webp',
        category: 'potato'
    },
    {
        id: 42,
        name: 'По-деревенски',
        nameKg: 'Айылдык картөшкө',
        description: 'Картофель по-деревенски с пряностями',
        descriptionKg: 'Айылдык картөшкө',
        price: 150,
        image: './imagemenu/rustic_potatoes.webp',
        category: 'potato'
    },
    {
        id: 43,
        name: 'Соусы',
        nameKg: 'Соустар',
        description: 'Соусы: Сырный, Чесночный, Барбекю, Кетчуп',
        descriptionKg: 'Соустар: Сырный, Чесночный, Барбекю, Кетчуп',
        price: 30,
        image: './imagemenu/sauces.avif',
        category: 'potato'
    },

    // ==================== СОБЕРИ СВОЮ ЛАПШУ (WOK) ====================
    {
        id: 44,
        name: 'Основа: Соба',
        nameKg: 'Негиз: Соба',
        description: 'Гречневая лапша соба',
        descriptionKg: 'Каракумча кесме соба',
        price: 160,
        image: './imagemenu/soba.jpg',
        category: 'wok'
    },
    {
        id: 45,
        name: 'Основа: Удон',
        nameKg: 'Негиз: Удон',
        description: 'Толстая пшеничная лапша удон',
        descriptionKg: 'Жоон буудай кесме удон',
        price: 160,
        image: './imagemenu/udon.jpg',
        category: 'wok'
    },
    {
        id: 46,
        name: 'Основа: Рамен',
        nameKg: 'Негиз: Рамен',
        description: 'Яичная лапша рамен',
        descriptionKg: 'Жумуртка кесме рамен',
        price: 160,
        image: './imagemenu/ramen.avif',
        category: 'wok'
    },
    {
        id: 47,
        name: 'Основа: Фунчоза',
        nameKg: 'Негиз: Фунчоза',
        description: 'Стеклянная лапша фунчоза',
        descriptionKg: 'Айнек кесме фунчоза',
        price: 180,
        image: './imagemenu/funchoza.webp',
        category: 'wok'
    },
    // Наполнитель
    {
        id: 48,
        name: 'Наполнитель: Мясо',
        nameKg: 'Кошумча: Эт',
        description: 'Мясной наполнитель',
        descriptionKg: 'Эт кошумчасы',
        variants: [
            { name: 'Курица', price: 50 },
            { name: 'Индейка', price: 60 },
            { name: 'Говядина', price: 90 },
            { name: 'Креветка', price: 120 }
        ],
        image: './imagemenu/meat_filler.jpg',
        category: 'wok'
    },
    {
        id: 49,
        name: 'Наполнитель: Овощи',
        nameKg: 'Кошумча: Жашылчалар',
        description: 'Овощной наполнитель',
        descriptionKg: 'Жашылча кошумчасы',
        price: 30,
        image: './imagemenu/veg_filler.png',
        category: 'wok'
    },
    // Соус
    {
        id: 50,
        name: 'Соус: Терияки',
        nameKg: 'Соус: Терияки',
        description: 'Соус терияки',
        descriptionKg: 'Терияки соусу',
        price: 50,
        image: './imagemenu/teriyaki.avif',
        category: 'wok'
    },
    {
        id: 51,
        name: 'Соус: Сливочный',
        nameKg: 'Соус: Сливочный',
        description: 'Сливочный соус',
        descriptionKg: 'Сливочный соус',
        price: 50,
        image: './imagemenu/creamy.avif',
        category: 'wok'
    },
    {
        id: 52,
        name: 'Соус: Устричный',
        nameKg: 'Соус: Устричный',
        description: 'Устричный соус',
        descriptionKg: 'Устричный соус',
        price: 50,
        image: './imagemenu/oyster.jpg',
        category: 'wok'
    },
    {
        id: 53,
        name: 'Соус: Кимчи',
        nameKg: 'Соус: Кимчи',
        description: 'Соус кимчи',
        descriptionKg: 'Кимчи соусу',
        price: 50,
        image: './imagemenu/kimchi.jpg',
        category: 'wok'
    },

    // ==================== СУПЫ ====================
    {
        id: 54,
        name: 'Том Ям с креветкой',
        nameKg: 'Креветкалуу Том Ям шорпосу',
        description: 'Острый суп Том Ям с креветками',
        descriptionKg: 'Креветка кошулган ачуу Том Ям шорпосу',
        price: 420,
        image: './imagemenu/tom_yam_shrimp.avif ',
        category: 'soups'
    },
    {
        id: 55,
        name: 'Том Ям с курицей',
        nameKg: 'Тооктуу Том Ям шорпосу',
        description: 'Острый суп Том Ям с курицей',
        descriptionKg: 'Тоок эти кошулган ачуу Том Ям шорпосу',
        price: 350,
        image: './imagemenu/tom_yam_chicken.avif',
        category: 'soups'
    },

    // ==================== BUBBLE TEA ====================
    {
        id: 56,
        name: 'Фирменный',
        nameKg: 'Фирмалык',
        description: 'Фирменный бабл ти',
        descriptionKg: 'Фирмалык бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/firm_bubble.jpg',
        category: 'bubble_tea'
    },
    {
        id: 57,
        name: 'Oрео',
        nameKg: 'Oрео',
        description: 'Бабл ти с печеньем OREO',
        descriptionKg: 'OREO печеньеси кошулган бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/oreo_bubble.webp',
        category: 'bubble_tea'
    },
    {
        id: 58,
        name: 'Сникерс',
        nameKg: 'Сникерс',
        description: 'Бабл ти со вкусом Сникерс',
        descriptionKg: 'Сникерс даамындагы бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/snickers_bubble.jpg',
        category: 'bubble_tea'
    },
    {
        id: 59,
        name: 'Твикс',
        nameKg: 'Твикс',
        description: 'Бабл ти со вкусом Твикс',
        descriptionKg: 'Твикс даамындагы бабл ти',
        variants: [
            { name: 'M', price: 230 },
            { name: 'L', price: 280 }
        ],
        image: './imagemenu/twix_bubble.webp',
        category: 'bubble_tea'
    },
    {
        id: 60,
        name: 'Фисташка Матча',
        nameKg: 'Фисташка Матча',
        description: 'Бабл ти со вкусом фисташки и матчи',
        descriptionKg: 'Фисташка жана матча даамындагы бабл ти',
        variants: [
            { name: 'M', price: 250 },
            { name: 'L', price: 300 }
        ],
        image: './imagemenu/pistachio_matcha.webp',
        category: 'bubble_tea'
    },
    {
        id: 61,
        name: 'Матча Oрео',
        nameKg: 'Матча Oрео',
        description: 'Бабл ти со вкусом матчи и OREO',
        descriptionKg: 'Матча жана OREO даамындагы бабл ти',
        variants: [
            { name: 'M', price: 250 },
            { name: 'L', price: 300 }
        ],
        image: './imagemenu/matcha_oreo.jpeg',
        category: 'bubble_tea'
    },
    {
        id: 62,
        name: 'Матча Манго',
        nameKg: 'Матча Манго',
        description: 'Бабл ти со вкусом матчи и манго',
        descriptionKg: 'Матча жана манго даамындагы бабл ти',
        variants: [
            { name: 'M', price: 250 },
            { name: 'L', price: 300 }
        ],
        image: './imagemenu/matcha_mango.jpg',
        category: 'bubble_tea'
    },
    {
        id: 63,
        name: 'Матча Клубника',
        nameKg: 'Матча Клубника',
        description: 'Бабл ти со вкусом матчи и клубники',
        descriptionKg: 'Матча жана клубника даамындагы бабл ти',
        variants: [
            { name: 'M', price: 250 },
            { name: 'L', price: 300 }
        ],
        image: './imagemenu/matcha_strawberry.jpeg',
        category: 'bubble_tea'
    },
    {
        id: 64,
        name: 'Банан-Шоколад',
        nameKg: 'Банан-Шоколад',
        description: 'Бабл ти со вкусом банана и шоколада',
        descriptionKg: 'Банан жана шоколад даамындагы бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/banana_chocolate.jpg',
        category: 'bubble_tea'
    },
    {
        id: 65,
        name: 'Кофе-Шоколад',
        nameKg: 'Кофе-Шоколад',
        description: 'Бабл ти со вкусом кофе и шоколада',
        descriptionKg: 'Кофе жана шоколад даамындагы бабл ти',
        variants: [
            { name: 'M', price: 250 },
            { name: 'L', price: 300 }
        ],
        image: './imagemenu/coffee_chocolate.jpeg',
        category: 'bubble_tea'
    },
    {
        id: 66,
        name: 'Таро Батат',
        nameKg: 'Таро Батат',
        description: 'Бабл ти со вкусом таро',
        descriptionKg: 'Таро даамындагы бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/taro.webp',
        category: 'bubble_tea'
    },
    {
        id: 67,
        name: 'Бабл Манго',
        nameKg: 'Бабл Манго',
        description: 'Бабл ти со вкусом манго',
        descriptionKg: 'Манго даамындагы бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/bubble_mango.webp',
        category: 'bubble_tea'
    },
    {
        id: 68,
        name: 'Таро Клубника',
        nameKg: 'Таро Клубника',
        description: 'Бабл ти со вкусом таро и клубники',
        descriptionKg: 'Таро жана клубника даамындагы бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/taro_strawberry.webp',
        category: 'bubble_tea'
    },
    {
        id: 69,
        name: 'Brown Sugar',
        nameKg: 'Brown Sugar',
        description: 'Бабл ти с коричневым сахаром',
        descriptionKg: 'Күрөң кант кошулган бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/brown_sugar.webp',
        category: 'bubble_tea'
    },
    {
        id: 70,
        name: 'Небесный чай',
        nameKg: 'Асман чай',
        description: 'Небесный бабл ти',
        descriptionKg: 'Асман бабл ти',
        variants: [
            { name: 'M', price: 240 },
            { name: 'L', price: 290 }
        ],
        image: './imagemenu/heavenly_tea.png',
        category: 'bubble_tea'
    },

    // ==================== ICE TEA ====================
    {
        id: 71,
        name: 'Мохито Виноград',
        nameKg: 'Мохито Виноград',
        description: 'Холодный чай Мохито с виноградом',
        descriptionKg: 'Мохито муздак чай виноград менен',
        price: 230,
        image: './imagemenu/mojito_grape.jpg',
        category: 'ice_tea'
    },
    {
        id: 72,
        name: 'Манго-Маракуйя',
        nameKg: 'Манго-Маракуйя',
        description: 'Холодный чай с манго и маракуйей',
        descriptionKg: 'Манго жана маракуйя кошулган муздак чай',
        price: 230,
        image: './imagemenu/mango_passion.webp',
        category: 'ice_tea'
    },
    {
        id: 73,
        name: 'Киви-Яблоко',
        nameKg: 'Киви-Яблоко',
        description: 'Холодный чай с киви и яблоком',
        descriptionKg: 'Киви жана алма кошулган муздак чай',
        price: 230,
        image: './imagemenu/kiwi_apple.jpg',
        category: 'ice_tea'
    },
    {
        id: 74,
        name: 'Клубника-Персик',
        nameKg: 'Клубника-Персик',
        description: 'Холодный чай с клубникой и персиком',
        descriptionKg: 'Клубника жана персик кошулган муздак чай',
        price: 280,
        image: './imagemenu/strawberry_peach.jpg',
        category: 'ice_tea'
    },
    {
        id: 75,
        name: 'Виноград-Черника',
        nameKg: 'Виноград-Черника',
        description: 'Холодный чай с виноградом и черникой',
        descriptionKg: 'Виноград жана черника кошулган муздак чай',
        price: 280,
        image: './imagemenu/grape_blueberry.avif',
        category: 'ice_tea'
    },
    {
        id: 76,
        name: 'Ягодный',
        nameKg: 'Жемиштүү',
        description: 'Ягодный холодный чай',
        descriptionKg: 'Жемиш муздак чай',
        price: 280,
        image: './imagemenu/berry.avif',
        category: 'ice_tea'
    },
    {
        id: 77,
        name: 'Манго-Персик',
        nameKg: 'Манго-Персик',
        description: 'Холодный чай с манго и персиком',
        descriptionKg: 'Манго жана персик кошулган муздак чай',
        price: 280,
        image: './imagemenu/mango_peach.webp',
        category: 'ice_tea'
    },

    // ==================== КОФЕ И МАТЧА ====================
    {
        id: 78,
        name: 'Капучино',
        nameKg: 'Капучино',
        description: 'Классический капучино',
        descriptionKg: 'Классикалык капучино',
        variants: [
            { name: 'S', price: 140 },
            { name: 'M', price: 160 },
            { name: 'L', price: 190 }
        ],
        image: './imagemenu/cappuccino.avif',
        category: 'coffee'
    },
    {
        id: 79,
        name: 'Латте',
        nameKg: 'Латте',
        description: 'Кофе латте',
        descriptionKg: 'Латте кофе',
        variants: [
            { name: 'S', price: 140 },
            { name: 'M', price: 160 },
            { name: 'L', price: 190 }
        ],
        image: './imagemenu/latte.jpg',
        category: 'coffee'
    },
    {
        id: 80,
        name: 'Американо',
        nameKg: 'Американо',
        description: 'Черный кофе американо',
        descriptionKg: 'Кара американо кофе',
        variants: [
            { name: 'S', price: 150 },
            { name: 'M', price: 170 },
            { name: 'L', price: 200 }
        ],
        image: './imagemenu/americano.jpg',
        category: 'coffee'
    },
    {
        id: 81,
        name: 'Раф',
        nameKg: 'Раф',
        description: 'Кофе раф',
        descriptionKg: 'Раф кофе',
        variants: [
            { name: 'S', price: 190 },
            { name: 'M', price: 220 },
            { name: 'L', price: 240 }
        ],
        image: './imagemenu/raf.png',
        category: 'coffee'
    },
    {
        id: 82,
        name: 'Матча',
        nameKg: 'Матча',
        description: 'Зеленая или голубая матча',
        descriptionKg: 'Жашыл же көк матча',
        variants: [
            { name: 'S', price: 160 },
            { name: 'M', price: 180 },
            { name: 'L', price: 200 }
        ],
        image: './imagemenu/matcha.png',
        category: 'coffee'
    },
    {
        id: 83,
        name: 'Айс Кофе',
        nameKg: 'Айс Кофе',
        description: 'Холодный кофе',
        descriptionKg: 'Муздак кофе',
        variants: [
            { name: 'S', price: 190 },
            { name: 'M', price: 210 },
            { name: 'L', price: 260 }
        ],
        image: './imagemenu/ice_coffee.jpg',
        category: 'coffee'
    },

    // ==================== ЛИМОНАДЫ И МИЛКШЕЙКИ ====================
    {
        id: 84,
        name: 'Лимонады',
        nameKg: 'Лимонаддар',
        description: 'Различные лимонады',
        descriptionKg: 'Ар кандай лимонаддар',
        variants: [
            { name: 'Мохито', price: 150 },
            { name: 'Дыня-Тархун', price: 150 },
            { name: 'Клубника-Малина', price: 150 },
            { name: 'Арбуз-Малина', price: 150 },
            { name: 'Бабл Гам', price: 150 }
        ],
        image: './imagemenu/lemonades.png',
        category: 'lemonade'
    },
    {
        id: 85,
        name: 'Милкшейки',
        nameKg: 'Милкшейки',
        description: 'Различные милкшейки',
        descriptionKg: 'Ар кандай милкшейки',
        variants: [
            { name: 'Сливочный', price: 220 },
            { name: 'Клубника-Малина', price: 220 },
            { name: 'Орео-Орех', price: 220 },
            { name: 'Банан-Карамель', price: 220 },
            { name: 'Манго-Маракуйя', price: 220 }
        ],
        image: './imagemenu/milkshakes.avif',
        category: 'lemonade'
    },

    // ==================== ЧАЙ ====================
    {
        id: 86,
        name: 'Черный чай',
        nameKg: 'Кара чай',
        description: 'Классический черный чай',
        descriptionKg: 'Классикалык кара чай',
        price: 40,
        image: './imagemenu/black_tea.avif',
        category: 'tea'
    },
    {
        id: 87,
        name: 'Зеленый чай',
        nameKg: 'Жашыл чай',
        description: 'Ароматный зеленый чай',
        descriptionKg: 'Жытыр жашыл чай',
        price: 40,
        image: './imagemenu/green_tea.avif',
        category: 'tea'
    },
    {
        id: 88,
        name: 'Жасмин',
        nameKg: 'Жасмин',
        description: 'Чай с жасмином',
        descriptionKg: 'Жасмин кошулган чай',
        price: 60,
        image: './imagemenu/jasmine_tea.jpg',
        category: 'tea'
    },
    {
        id: 89,
        name: 'Молочный улун',
        nameKg: 'Сүт улун',
        description: 'Молочный улун чай',
        descriptionKg: 'Сүт улун чай',
        price: 60,
        image: './imagemenu/milk_oolong.webp',
        category: 'tea'
    },
    {
        id: 90,
        name: 'Облепиховый',
        nameKg: 'Облепиховый',
        description: 'Чай с облепихой',
        descriptionKg: 'Облепиха кошулган чай',
        price: 150,
        image: './imagemenu/sea_buckthorn.jpg',
        category: 'tea'
    },
    {
        id: 91,
        name: 'Ташкентский',
        nameKg: 'Ташкентский',
        description: 'Ташкентский чай',
        descriptionKg: 'Ташкент чайы',
        price: 150,
        image: './imagemenu/tashkent.jpg',
        category: 'tea'
    },
    {
        id: 92,
        name: 'Пряный',
        nameKg: 'Пряный',
        description: 'Пряный чай',
        descriptionKg: 'Пряный чай',
        price: 150,
        image: './imagemenu/spicy_tea.jpg',
        category: 'tea'
    }
];

// ============================================
// Переводы интерфейса
// ============================================

const translations = {
    ru: {
        'nav-menu': 'Меню',
        'nav-about': 'О нас',
        'nav-reviews': 'Отзывы',
        'nav-contact': 'Контакты',
        'about-title': 'Добро пожаловать в SushiDom',
        'about-text-1': 'SushiDom — место в Кара-Куле с качественными роллами, сетами и напитками. Мы используем свежие продукты.',
        'about-text-2': 'Здесь нет официантов — оформляйте заказ через сайт для самовывоза или доставки.',
        'about-text-3': 'SushiDom — вкусно, удобно и быстро.',
        'welcome-title': 'Добро пожаловать в <em>SushiDom</em>',
        'welcome-subtitle': 'Свежие роллы, сеты и напитки с доставкой и самовывозом. Закажите прямо сейчас.',
        'welcome-badge': '🍣 Кара-Куль · Свежие роллы',
        'menu-title': 'Наше <span>меню</span>',
        'view-menu': 'Посмотреть меню',
        'contact-title': 'Контакты',
        'contact-location': 'Кара-Куль',
        'contact-hours': '10:00 - 22:00, без выходных',
        'footer-text': '©️ 2025 SushiDom. Все права защищены.',
        'cart-title': 'Корзина',
        'cart-empty': 'Корзина пуста',
        'cart-total': 'Итого:',
        'currency': 'сом',
        'cart-clear': 'Очистить корзину',
        'cart-checkout': 'Оформить заказ',
        'order-title': 'Оформление заказа',
        'order-name': 'Имя',
        'order-phone': 'Телефон',
        'order-phone-hint': 'Введите номер без 0, например: 998 25 20 23',
        'order-comment': 'Комментарий к заказу (необязательно)',
        'order-summary': 'Состав заказа:',
        'order-cancel': 'Отмена',
        'order-submit': 'Отправить заказ',
        'add-to-cart': 'В корзину',
        'remove': 'Удалить',
        'details': 'Подробнее',
        'filter-all': 'Все',
        'filter-sushi-rolls': 'Суши и Роллы',
        'filter-fastfood': 'Фастфуд',
        'filter-bubble-tea': 'Бабл Ти',
        'filter-drinks': 'Напитки',
        'filter-second': 'Вторые блюда',
        'filter-special': 'Заказные',
        'filter-shashlik': 'Шашлыки',
        'filter-salad': 'Салаты',
        'filter-dessert': 'Десерты',
        'filter-drink': 'Напитки',
        'filter-fastfood': 'Fast-Food',
        'dish-ingredients': 'Ингредиенты:',
        'reviews-title': 'Отзывы',
        'review-form-title': 'Оставить отзыв',
        'review-name': 'Ваше имя',
        'review-rating': 'Оценка',
        'review-comment': 'Комментарий',
        'review-photo': 'Фото (необязательно)',
        'review-take-photo': 'Сделать фото',
        'review-choose-photo': 'Выбрать из галереи',
        'review-remove-photo': 'Удалить фото',
        'review-submit': 'Отправить отзыв',
        'reviews-empty': 'Пока нет отзывов. Будьте первым!',
        'reviews-view-all': 'Посмотреть все отзывы',
        'reviews-all-title': 'Все отзывы',
        'reviews-back': 'Вернуться на главную'
    },
    kg: {
        'nav-menu': 'Меню',
        'nav-about': 'Биз жөнүндө',
        'nav-reviews': 'Пикирлер',
        'nav-contact': 'Байланыш',
        'about-title': 'SushiDom кафесине кош келиңиз',
        'about-text-1': 'SushiDom — Кара-Көлдөгү ролл жана сеттердин даамдуу менюсу. Биз таза жана свежий азыктарды колдонобуз.',
        'about-text-2': 'Бул жерде официанттар жок — заказды сайт аркылуу самовывоз же жеткирүү үчүн берсеңиз болот.',
        'about-text-3': 'SushiDom — даамдуу жана ыңгайлуу.',
        'welcome-title': '<em>SushiDom</em> кафесине кош келиңиз',
        'welcome-subtitle': 'Жаңы роллдор, сеттер жана суусундуктар жеткирүү жана өз алдынча алуу менен. Азыр заказ бериңиз.',
        'welcome-badge': '🍣 Кара-Куль · Жаңы роллдор',
        'menu-title': 'Биздин <span>аш тизмек</span>',
        'view-menu': 'Меню көрүү',
        'contact-title': 'Байланыш',
        'contact-location': 'Кара-Көл',
        'contact-hours': '10:00 - 22:00, дем алыш жок',
        'footer-text': '©️ 2025 SushiDom. Бардык укуктар корголгон.',
        'cart-title': 'Себет',
        'cart-empty': 'Себет бош',
        'cart-total': 'Баары:',
        'currency': 'сом',
        'cart-clear': 'Себетти тазалоо',
        'cart-checkout': 'Заказ берүү',
        'order-title': 'Заказ берүү',
        'order-name': 'Аты',
        'order-phone': 'Телефон',
        'order-phone-hint': 'Номурду 0сүз жазыңыз, мисалы: 998 25 20 23',
        'order-comment': 'Заказга комментарий (милдеттүү эмес)',
        'order-summary': 'Заказдын курамы:',
        'order-cancel': 'Жокко чыгаруу',
        'order-submit': 'Заказды жөнөтүү',
        'add-to-cart': 'Себетке',
        'remove': 'Өчүрүү',
        'details': 'Кененирээк',
        'filter-all': 'Баары',
        'filter-sushi-rolls': 'Суши жана Роллы',
        'filter-fastfood': 'Фастфуд',
        'filter-bubble-tea': 'Бабл Ти',
        'filter-drinks': 'Суусундуктар',
        'filter-second': 'Экинчи тамактар',
        'filter-special': 'Заказдык',
        'filter-shashlik': 'Шашлык',
        'filter-salad': 'Салат',
        'filter-dessert': 'Десерт',
        'filter-drink': 'Суусундуктар',
        'dish-ingredients': 'Курамы:',
        'reviews-title': 'Пикирлер',
        'review-form-title': 'Пикир калтыруу',
        'review-name': 'Атыңыз',
        'review-rating': 'Баалоо',
        'review-comment': 'Комментарий',
        'review-photo': 'Сүрөт (милдеттүү эмес)',
        'review-take-photo': 'Сүрөт тартуу',
        'review-choose-photo': 'Галереядан тандау',
        'review-remove-photo': 'Сүрөттү өчүрүү',
        'review-submit': 'Пикирди жөнөтүү',
        'reviews-empty': 'Азырынча пикирлер жок. Биринчи болуңуз!',
        'reviews-view-all': 'Бардык пикирлерди көрүү',
        'reviews-all-title': 'Бардык пикирлер',
        'reviews-back': 'Башкы бетке кайтуу'
    },
    en: {
        'nav-menu': 'Menu',
        'nav-about': 'About',
        'nav-reviews': 'Reviews',
        'nav-contact': 'Contacts',
        'about-title': 'Welcome to SushiDom',
        'about-text-1': 'SushiDom in Kara-Kul serves fresh rolls, sets and drinks. We use quality ingredients.',
        'about-text-2': 'There are no waiters — please place orders on the site for pickup or delivery.',
        'about-text-3': 'SushiDom — tasty, convenient and fast.',
        'menu-title': 'Menu',
        'contact-title': 'Contacts',
        'filter-fastfood': 'Fast Food',
        'contact-location': 'Kara-Kul',
        'contact-hours': '10:00 - 22:00, no days off',
        'footer-text': '©️ 2025 SushiDom. All rights reserved.',
        'cart-title': 'Cart',
        'cart-empty': 'Cart is empty',
        'cart-total': 'Total:',
        'currency': 'som',
        'cart-clear': 'Clear cart',
        'cart-checkout': 'Checkout',
        'order-title': 'Checkout',
        'order-name': 'Name',
        'order-phone': 'Phone',
        'order-phone-hint': 'Enter number without 0, e.g.: 998 25 20 23',
        'order-comment': 'Comment (optional)',
        'order-summary': 'Order summary:',
        'order-cancel': 'Cancel',
        'order-submit': 'Submit order',
        'add-to-cart': 'Add to cart',
        'remove': 'Remove',
        'details': 'Details',
        'filter-all': 'All',
        'filter-sushi-rolls': 'Sushi and Rolls',
        'filter-fastfood': 'Fastfood',
        'filter-bubble-tea': 'Bubble Tea',
        'filter-drinks': 'Drinks',
        'dish-ingredients': 'Ingredients:',
        'reviews-title': 'Reviews',
        'review-form-title': 'Leave a review',
        'review-name': 'Your name',
        'review-rating': 'Rating',
        'review-comment': 'Comment',
        'review-photo': 'Photo (optional)',
        'review-take-photo': 'Take photo',
        'review-choose-photo': 'Choose from gallery',
        'review-remove-photo': 'Remove photo',
        'review-submit': 'Submit review',
        'reviews-empty': 'No reviews yet. Be the first!',
        'reviews-view-all': 'View all reviews',
        'reviews-all-title': 'All reviews',
        'reviews-back': 'Back to main'
    }
};

// Дополнительные строки для переводов (используются в уведомлениях и кнопках)
translations.ru['adding'] = 'Добавление…';
translations.kg['adding'] = 'Кошулууда…';
translations.ru['added'] = 'Добавлено:';
translations.kg['added'] = 'Кошулду:';
translations.ru['order_sent_success'] = '✅ Заказ отправлен! Мы свяжемся с вами в ближайшее время.';
translations.kg['order_sent_success'] = '✅ Заказ жөнөтүлдү! Биз жакынкы убакта сиз менен байланышабыз.';
translations.ru['min_order_msg'] = 'Минимальная сумма для доставки {min} сом. Текущая сумма: {current} сом.';
translations.kg['min_order_msg'] = 'Доставка үчүн минималдуу сумма {min} сом. Учурдагы сумма: {current} сом.';
translations.ru['fill_required'] = 'Заполните все обязательные поля';
translations.kg['fill_required'] = 'Бардык милдеттүү талааларды толтуруңуз';
translations.ru['confirm_clear_cart'] = 'Очистить корзину?';
translations.kg['confirm_clear_cart'] = 'Себетти тазалоо?';
translations.ru['cart_empty_msg'] = 'Корзина пуста. Добавьте блюда в корзину.';
translations.kg['cart_empty_msg'] = 'Себет бош. Себетке тамак кошуңуз.';
translations.ru['invalid_phone'] = 'Введите корректный номер телефона\nПример: +996 998 252 023 или 0998252023';
translations.kg['invalid_phone'] = 'Туура телефон номурун киргизиңиз\nМисал: +996 998 252 023 же 0998252023';
translations.ru['select_image'] = 'Пожалуйста, выберите изображение';
translations.kg['select_image'] = 'Сураныч, сүрөт тандаңыз';
translations.ru['select_rating'] = 'Пожалуйста, выберите оценку';
translations.kg['select_rating'] = 'Сураныч, баалоо тандаңыз';
translations.ru['review_thanks'] = 'Спасибо за ваш отзыв!';
translations.kg['review_thanks'] = 'Пикириңиз үчүн рахмат!';
translations.ru['order_error'] = '❌ Произошла ошибка: {msg}. Пожалуйста, попробуйте еще раз.';
translations.kg['order_error'] = '❌ Ката кетти: {msg}. Сураныч, кайра аракет кылыңыз.';
// CTA / header small keys
translations.ru['view-menu'] = 'Посмотреть меню';
translations.kg['view-menu'] = 'Аш тизмек ';
// Payment translations
translations.ru['payment-method-label'] = 'Способ оплаты';
translations.kg['payment-method-label'] = 'Төлөө ыкмасы';
translations.ru['payment-cash'] = 'Наличными';
translations.kg['payment-cash'] = 'Накта';
translations.ru['payment-card'] = 'Картой';
translations.kg['payment-card'] = 'Карта менен';
translations.ru['payment-mbank'] = 'MBank';
translations.kg['payment-mbank'] = 'MBank';

// Переводы для выбора типа заказа
translations.ru['order-type-title'] = 'Как вы хотите заказать?';
translations.kg['order-type-title'] = 'Кантип заказ бересиз?';
translations.ru['order-type-cafe'] = 'Я в кафе';
translations.kg['order-type-cafe'] = 'Мен кафедемин';
translations.ru['order-type-pickup'] = 'Самовывоз';
translations.kg['order-type-pickup'] = 'Өзүм алам';
translations.ru['order-type-delivery'] = 'Доставка';
translations.kg['order-type-delivery'] = 'Жеткирүү';
translations.ru['order-type-browse'] = 'Просто посмотреть меню';
translations.kg['order-type-browse'] = 'Менюну гана көрүү';
translations.ru['table-select-title'] = 'Выберите номер стола';
translations.kg['table-select-title'] = 'Стол номурун тандаңыз';
translations.ru['order-address'] = 'Адрес доставки';
translations.kg['order-address'] = 'Жеткирүү дареги';
translations.ru['delivery-form-title'] = 'Данные для доставки';
translations.kg['delivery-form-title'] = 'Жеткирүү үчүн маалыматтар';
translations.ru['back'] = 'Назад';
translations.kg['back'] = 'Артка';
translations.ru['continue'] = 'Продолжить';
translations.kg['continue'] = 'Улантуу';

// Английские переводы для дополнительных строк
translations.en['adding'] = 'Adding…';
translations.en['added'] = 'Added:';
translations.en['order_sent_success'] = '✅ Order sent! We will contact you soon.';
translations.en['min_order_msg'] = 'Minimum order for delivery is {min} som. Current total: {current} som.';
translations.en['fill_required'] = 'Please fill in all required fields';
translations.en['confirm_clear_cart'] = 'Clear cart?';
translations.en['cart_empty_msg'] = 'Cart is empty. Add dishes to your cart.';
translations.en['invalid_phone'] = 'Please enter a valid phone number';
translations.en['select_image'] = 'Please select an image';
translations.en['select_rating'] = 'Please select a rating';
translations.en['review_thanks'] = 'Thank you for your review!';
translations.en['order_error'] = '❌ Error occurred: {msg}. Please try again.';
translations.en['view-menu'] = 'View menu';
translations.en['payment-method-label'] = 'Payment method';
translations.en['payment-cash'] = 'Cash';
translations.en['payment-card'] = 'Card';
translations.en['payment-mbank'] = 'MBank';
translations.en['order-type-title'] = 'How would you like to order?';
translations.en['order-type-cafe'] = 'I\'m at the cafe';
translations.en['order-type-pickup'] = 'Pickup';
translations.en['order-type-delivery'] = 'Delivery';
translations.en['order-type-browse'] = 'Just browse the menu';
translations.en['table-select-title'] = 'Select your table';
translations.en['order-address'] = 'Delivery address';
translations.en['delivery-form-title'] = 'Delivery information';
translations.en['back'] = 'Back';
translations.en['continue'] = 'Continue';

// ============================================
// Константы для заказов
// ============================================

// Номер телефона кафе для WhatsApp (без + и пробелов)
const CAFE_PHONE_NUMBER = '996507007031';

// Нет официантов — в сервисе используется только самовывоз/доставка
let WAITERS = {};
// Привязки: waiterId -> массив номеров столов (пусто)
let WAITER_TABLES = {};

let currentWaiter = null;

function loadWaiterConfig() {
    try {
        const raw = localStorage.getItem('waiterConfig');
        if (!raw) return;
        const cfg = JSON.parse(raw);
        if (cfg.waiters) WAITERS = cfg.waiters;
        if (cfg.waiterTables) WAITER_TABLES = cfg.waiterTables;
    } catch (e) { }
}

function saveWaiterConfig() {
    try {
        localStorage.setItem('waiterConfig', JSON.stringify({ waiters: WAITERS, waiterTables: WAITER_TABLES }));
    } catch (e) { }
}

// Возвращает объект официанта для данного стола (или null)
function getWaiterForTable(num) {
    for (const wid in WAITER_TABLES) {
        const arr = WAITER_TABLES[wid] || [];
        if (arr.indexOf(Number(num)) !== -1) return WAITERS[wid] || null;
    }
    return null;
}

function getTablesForWaiter(wid) {
    return WAITER_TABLES[wid] ? WAITER_TABLES[wid].slice() : [];
}

function setTablesForWaiter(wid, arr) {
    WAITER_TABLES[wid] = Array.isArray(arr) ? arr.map(Number) : [];
    saveWaiterConfig();
}

function setWaiter(wid, waiterObj) {
    WAITERS[wid] = waiterObj;
    saveWaiterConfig();
}

loadWaiterConfig();

// URL Google Apps Script Web App для сохранения в Google Sheets
// ВАЖНО: Замените на ваш URL после настройки Google Apps Script
// Инструкция в файле GOOGLE_SHEETS_SETUP.md
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwRZDDKK04OEv-ySYHz6XbskBZXp7vGYcWxp7fYiLSmrVe0fjHi7KgDEIGIFnIEFYrn/exec';
// Optionally provide a server endpoint that will send the order to the cafe phone
// Example: a small webhook that accepts { phone, message } and forwards via SMS/WhatsApp Business API.
// If left empty, client will open WhatsApp (existing behaviour).
const NOTIFY_ENDPOINT = '';

// ============================================
// Глобальные переменные
// ============================================

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all'; // Текущая выбранная категория
let currentSliderIndex = 0; // Индекс текущего фото в слайдере

// Тип заказа: 'cafe', 'pickup', 'delivery', 'browse'
let orderType = null;
let tableNumber = null;
let deliveryInfo = null;
// Endpoint для общих отзывов (Apps Script Web App URL)
const REVIEWS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyYVg9L5UtQISuiSDvzxcleVKqN4mLN4b3to64DRukMGMN6kTCnYhX3F5BfSSwA85hUWg/exec';

// ============================================
// Инициализация приложения
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initLanguage();
    renderMenu();
    updateCartUI();
    initEventListeners();
    initHeaderScroll();
    await initReviews();
    // Восстанавливаем данные доставки, если они были введены ранее
    try {
        const savedDelivery = localStorage.getItem('deliveryInfo');
        if (savedDelivery) deliveryInfo = JSON.parse(savedDelivery);
    } catch (err) {
        deliveryInfo = null;
    }
    animateWelcome();
    // Lightbox init
    const closeLb = document.getElementById('closeLightbox');
    const lb = document.getElementById('imageLightbox');
    if (closeLb) closeLb.addEventListener('click', closeImageLightbox);
    if (lb) lb.addEventListener('click', (e) => { if (e.target === lb) closeImageLightbox(); });
    // Init payment option visual state
    initPaymentOptions();
    // Init order form validation listeners
    initOrderFormValidation();
    // Init order type modal (только навешиваем обработчики, не показываем сразу)
    initOrderTypeModal();
});

// Set selected class on payment option labels for clear visual state
function initPaymentOptions() {
    const options = document.querySelectorAll('.payment-option');
    if (!options || options.length === 0) return;

    function refresh() {
        options.forEach(opt => opt.classList.remove('selected'));
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        if (checked && checked.closest('.payment-option')) {
            checked.closest('.payment-option').classList.add('selected');
        } else if (checked) {
            // if input not wrapped by .payment-option, try to find label
            const lbl = document.querySelector(`label[for="${checked.id}"]`);
            if (lbl) lbl.classList.add('selected');
        }
    }

    // initial state
    refresh();

    // listen for changes
    const radios = document.querySelectorAll('input[name="paymentMethod"]');
    radios.forEach(r => r.addEventListener('change', (ev) => { refresh(); toggleMbankQr(ev.target.value); }));
    // Also support click on label to toggle
    options.forEach(opt => opt.addEventListener('click', () => {
        const inp = opt.querySelector('input[name="paymentMethod"]');
        if (inp) {
            inp.checked = true;
            inp.dispatchEvent(new Event('change', { bubbles: true }));
            // Обновляем показ QR при клике по варианту
            toggleMbankQr(inp.value);
        }
    }));

    // Инициализируем видимость QR по текущему выбранному способу
    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    toggleMbankQr(checked ? checked.value : null);
}

// Показывает/скрывает QR-контейнер MBank
function toggleMbankQr(selectedValue) {
    const container = document.getElementById('mbankQrContainer');
    if (!container) return;
    if (selectedValue === 'mbank') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Скрывает опцию оплаты картой при доставке, иначе показывает все опции
function adjustPaymentOptionsForDelivery() {
    const cardInput = document.querySelector('input[name="paymentMethod"][value="card"]');
    const cardLabel = cardInput ? cardInput.closest('.payment-option') : null;
    if (orderType === 'delivery') {
        if (cardLabel) cardLabel.style.display = 'none';
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        if (checked && checked.value === 'card') {
            const cash = document.querySelector('input[name="paymentMethod"][value="cash"]');
            if (cash) {
                cash.checked = true;
                cash.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    } else {
        if (cardLabel) cardLabel.style.display = '';
    }
}

// Проверка валидности формы заказа и активация кнопки отправки
function validateOrderForm() {
    const submitBtn = document.getElementById('submitOrderBtn');
    if (!submitBtn) return;

    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const cartNotEmpty = cart && cart.length > 0;

    const payment = document.querySelector('input[name="paymentMethod"]:checked');

    // Валидатор телефона - только 9 цифр без префикса
    const phoneVal = phone ? phone.value.trim().replace(/[\s-]/g, '') : '';
    const phoneOk = phoneVal.length === 9 && /^[0-9]{9}$/.test(phoneVal);

    const nameOk = name && name.value.trim().length > 0;
    const paymentOk = !!payment;

    const formReady = cartNotEmpty && nameOk && phoneOk && paymentOk;

    if (formReady) {
        submitBtn.disabled = false;
        submitBtn.classList.add('ready');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('ready');
    }
}

// Форматирование номера телефона: 998 25 20 23
function formatPhoneInput(input) {
    let value = input.value.replace(/\D/g, ''); // только цифры

    // Ограничиваем до 9 цифр
    if (value.length > 9) {
        value = value.slice(0, 9);
    }

    // Форматируем: 998 25 20 23
    let formatted = '';
    if (value.length > 0) {
        formatted = value.slice(0, 3);
    }
    if (value.length > 3) {
        formatted += ' ' + value.slice(3, 5);
    }
    if (value.length > 5) {
        formatted += ' ' + value.slice(5, 7);
    }
    if (value.length > 7) {
        formatted += ' ' + value.slice(7, 9);
    }

    input.value = formatted;
}

// Подключаем слушатели на инпуты формы, чтобы валидировать в реальном времени
function initOrderFormValidation() {
    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const deliveryPhone = document.getElementById('deliveryPhone');
    const radios = document.querySelectorAll('input[name="paymentMethod"]');

    if (name) name.addEventListener('input', validateOrderForm);

    // Форматирование и валидация телефона
    if (phone) {
        phone.addEventListener('input', () => {
            formatPhoneInput(phone);
            validateOrderForm();
        });
    }

    // Форматирование телефона в форме доставки
    if (deliveryPhone) {
        deliveryPhone.addEventListener('input', () => {
            formatPhoneInput(deliveryPhone);
        });
    }

    radios.forEach(r => r.addEventListener('change', validateOrderForm));

    // ensure validation runs when cart changes
    // updateCartUI() will call validateOrderForm at the end
    validateOrderForm();
}

// ============================================
// Модальное окно выбора типа заказа
// ============================================

function initLangSelectButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Устанавливаем активную кнопку по текущему языку
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                currentLang = lang;
                localStorage.setItem('lang', lang);

                // Обновляем активную кнопку
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Обновляем интерфейс
                updateLanguage();
                renderMenu();

                // Обновляем кнопку языка в шапке
                const langToggle = document.getElementById('langToggle');
                if (langToggle) {
                    langToggle.textContent = lang.toUpperCase();
                }
                // Обновляем состояние кнопок языка в модальном окне
                const langBtnRu = document.getElementById('langBtnRu');
                const langBtnKg = document.getElementById('langBtnKg');
                if (langBtnRu) {
                    langBtnRu.classList.toggle('active', lang === 'ru');
                }
                if (langBtnKg) {
                    langBtnKg.classList.toggle('active', lang === 'kg');
                }
            }
        });
    });
}

function initOrderTypeModal() {
    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    const deliveryModal = document.getElementById('deliveryFormModal');
    const tableGrid = document.getElementById('tableGrid');

    // Инициализация кнопок выбора языка
    initLangSelectButtons();


    // Генерируем кнопки столов 1-11
    if (tableGrid) {
        tableGrid.innerHTML = '';
        for (let i = 1; i <= 11; i++) {
            const btn = document.createElement('button');
            btn.className = 'table-btn';
            btn.textContent = i;
            btn.dataset.table = i;
            btn.addEventListener('click', () => selectTable(i));
            tableGrid.appendChild(btn);
        }
    }

    // Обработчики кнопок типа заказа
    const cafeBtn = document.getElementById('orderTypeCafe');
    const pickupBtn = document.getElementById('orderTypePickup');
    const deliveryBtn = document.getElementById('orderTypeDelivery');
    const browseBtn = document.getElementById('orderTypeBrowse');
    const closeTableBtn = document.getElementById('closeTableModal');
    const closeDeliveryBtn = document.getElementById('closeDeliveryModal');
    const backToOrderTypeBtn = document.getElementById('backToOrderType');
    const deliveryForm = document.getElementById('deliveryInfoForm');

    // Если в URL НЕТ номера стола (?table=...), скрываем кнопку "Я в кафе"
    // Это значит, что гость не из зала, а просто зашёл на сайт
    try {
        const params = new URLSearchParams(window.location.search);
        const tableParam = params.get('table');
        if (cafeBtn && !tableParam) {
            cafeBtn.style.display = 'none';
        }
    } catch (e) { }

    if (cafeBtn) cafeBtn.addEventListener('click', () => showTableSelect());
    if (pickupBtn) pickupBtn.addEventListener('click', () => setOrderType('pickup'));
    if (deliveryBtn) deliveryBtn.addEventListener('click', () => showDeliveryForm());
    if (browseBtn) browseBtn.addEventListener('click', () => setOrderType('browse'));

    if (closeTableBtn) closeTableBtn.addEventListener('click', () => {
        tableModal.classList.remove('active');
        modal.classList.add('active');
    });

    if (closeDeliveryBtn) closeDeliveryBtn.addEventListener('click', () => {
        deliveryModal.classList.remove('active');
        modal.classList.add('active');
    });

    if (backToOrderTypeBtn) backToOrderTypeBtn.addEventListener('click', () => {
        deliveryModal.classList.remove('active');
        modal.classList.add('active');
    });

    // Обработка формы доставки
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('deliveryName').value.trim();
            const phone = document.getElementById('deliveryPhone').value.trim();
            const address = document.getElementById('deliveryAddressInput').value.trim();

            if (name && phone && address) {
                deliveryInfo = { name, phone, address };
                // Сохраняем временно введённые данные доставки, чтобы они были доступны
                // при переходе к форме оформления заказа
                try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch (e) { }
                setOrderType('delivery');
                deliveryModal.classList.remove('active');
            }
        });
    }

    // Закрытие по клику вне модального окна стола
    if (tableModal) {
        tableModal.addEventListener('click', (e) => {
            if (e.target === tableModal) {
                tableModal.classList.remove('active');
                modal.classList.add('active');
            }
        });
    }

    // Закрытие по клику вне модального окна доставки
    if (deliveryModal) {
        deliveryModal.addEventListener('click', (e) => {
            if (e.target === deliveryModal) {
                deliveryModal.classList.remove('active');
                modal.classList.add('active');
            }
        });
    }
}


// No-op replacements (table selection / waiter notifications removed)
function initTableFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        const tableParam = params.get('table');
        if (!tableParam) return false;

        const t = parseInt(tableParam, 10);
        if (!isNaN(t) && t >= 3 && t <= 11) {
            tableNumber = t;
            // Устанавливаем режим заказа "в кафе"
            orderType = 'cafe';
            applyOrderTypeMode();

            // Добавим небольшой баннер в шапке, чтобы гость видел номер стола
            const headerContent = document.querySelector('.header-content');
            if (headerContent) {
                let banner = document.getElementById('tableBanner');
                if (!banner) {
                    banner = document.createElement('div');
                    banner.id = 'tableBanner';
                    banner.className = 'table-banner';
                    banner.style.marginLeft = '12px';
                    banner.style.padding = '6px 10px';
                    banner.style.borderRadius = '999px';
                    banner.style.background = 'linear-gradient(90deg,var(--accent),var(--accent-2))';
                    banner.style.color = 'var(--on-accent)';
                    banner.style.fontWeight = '700';
                    banner.style.fontSize = '0.95rem';
                    headerContent.appendChild(banner);
                }
                banner.textContent = currentLang === 'ru' ? `Стол №${t}` : `Стол №${t}`;
            }

            // Если есть текущая корзина — обновим UI, чтобы показать тип заказа
            try { updateCartUI(); } catch (e) { }

            return true;
        }
    } catch (e) {
        console.warn('initTableFromUrl error', e);
    }
    return false;
}

function notifyAssignedWaiter() {
    // no-op: waiter system disabled
}


// Блокировка фоновых взаимодействий при открытом обязательном модальном окне
function enableModalLock() {
    document.body.classList.add('modal-blocked');
    // Отключаем прокрутку фона
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

function disableModalLock() {
    document.body.classList.remove('modal-blocked');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

function showTableSelect() {
    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    if (modal) modal.classList.remove('active');
    if (tableModal) tableModal.classList.add('active');
    // при переходе к выбору стола фон всё ещё должен быть недоступен
    enableModalLock();
}

function showDeliveryForm() {
    const modal = document.getElementById('orderTypeModal');
    const deliveryModal = document.getElementById('deliveryFormModal');
    if (modal) modal.classList.remove('active');
    if (deliveryModal) deliveryModal.classList.add('active');
    // при показе формы доставки блокируем фон
    enableModalLock();
}

function selectTable(num) {
    tableNumber = num;
    // Назначаем официанта для выбранного стола
    const waiter = getWaiterForTable(num);
    if (waiter) {
        currentWaiter = waiter;
        try { localStorage.setItem('currentWaiter', JSON.stringify(currentWaiter)); } catch (e) { }
    }
    setOrderType('cafe');
    const tableModal = document.getElementById('tableSelectModal');
    if (tableModal) tableModal.classList.remove('active');
    // Показать уведомление о назначенном официанте
    setTimeout(() => { notifyAssignedWaiter(); }, 250);
}

function setOrderType(type) {
    orderType = type;

    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    if (modal) modal.classList.remove('active');
    if (tableModal) tableModal.classList.remove('active');

    applyOrderTypeMode();
    // После выбора снимаем блокировку и разрешаем взаимодействие с сайтом
    disableModalLock();
}

function applyOrderTypeMode() {
    // Если выбран режим просмотра, добавляем класс browse-mode
    if (orderType === 'browse') {
        document.body.classList.add('browse-mode');
    } else {
        document.body.classList.remove('browse-mode');
    }
    // Обновляем видимость поля адреса и варинтов оплаты при смене типа заказа
    updateDeliveryAddressVisibility();
    adjustPaymentOptionsForDelivery();
}

function getOrderTypeText() {
    if (!orderType || orderType === 'browse') return '';

    if (orderType === 'cafe' && tableNumber) {
        return currentLang === 'ru'
            ? `📍 Стол №${tableNumber}`
            : `📍 Стол №${tableNumber}`;
    } else if (orderType === 'pickup') {
        return currentLang === 'ru' ? '📍 Самовывоз' : '📍 Өзү алып кетүү';
    } else if (orderType === 'delivery' && deliveryInfo) {
        return currentLang === 'ru'
            ? `📍 Доставка: ${deliveryInfo.address}`
            : `📍 Жеткирүү: ${deliveryInfo.address}`;
    }
    return '';
}

function updateDeliveryAddressVisibility() {
    const addressGroup = document.getElementById('deliveryAddressGroup');
    if (addressGroup) {
        addressGroup.style.display = orderType === 'delivery' ? 'block' : 'none';
    }
}

function openImageLightbox(src, alt) {
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImage');
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('active');
}

function closeImageLightbox() {
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImage');
    if (!lb || !lbImg) return;
    lb.classList.remove('active');
    lbImg.src = '';
    lbImg.alt = '';
}

// Плавное появление приветствия
function animateWelcome() {
    const el = document.getElementById('animatedWelcome');
    if (!el) return;
    const text = (translations[currentLang] && translations[currentLang]['about-title']) ? translations[currentLang]['about-title'] : 'Добро пожаловать в SushiDom';
    el.textContent = text;
    // Запускаем анимацию сразу после загрузки
    requestAnimationFrame(() => {
        el.classList.add('fade-in');
    });

    // CTA buttons behavior
    const viewMenuBtn = document.getElementById('viewMenuBtn');
    const viewContactsBtn = document.getElementById('viewContactsBtn');
    if (viewMenuBtn) viewMenuBtn.addEventListener('click', () => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }));
    if (viewContactsBtn) viewContactsBtn.addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));
}

// ============================================
// Инициализация темы
// ============================================// 1. Создаем элемент изображения
const moon = document.createElement('img');
const sun = document.createElement('img');

// Исправлено: src вместо scr
sun.src = 'icons/brightness.svg';
sun.alt = 'light mode';
sun.style.width = '20px';

moon.src = 'icons/moon-stars.svg';
moon.alt = 'Dark mode';
moon.style.width = '20px';
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcon = document.querySelector('.theme-icon');

    if (themeIcon) {
        // Очищаем содержимое, чтобы иконки не дублировались при повторном клике
        themeIcon.textContent = '';

        if (currentTheme === 'dark') {
            themeIcon.appendChild(sun);
        } else {
            themeIcon.appendChild(moon);
        }
    }
}



// ============================================
// Инициализация языка
// ============================================

function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLang.toUpperCase();
    }
    // Обновляем состояние кнопок языка в модальном окне
    const langBtnRu = document.getElementById('langBtnRu');
    const langBtnKg = document.getElementById('langBtnKg');
    if (langBtnRu) {
        langBtnRu.classList.toggle('active', currentLang === 'ru');
    }
    if (langBtnKg) {
        langBtnKg.classList.toggle('active', currentLang === 'kg');
    }
    translatePage();
}

// ============================================
// Перевод страницы
// ============================================

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = translations[currentLang] && translations[currentLang][key];
        if (txt) {
            // основной текст
            el.innerHTML = txt;
            // placeholder, title, aria-label, value
            if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', txt);
            if (el.hasAttribute('title')) el.setAttribute('title', txt);
            if (el.hasAttribute('aria-label')) el.setAttribute('aria-label', txt);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = el.value || '';
        }
    });
}

// ============================================
// Обработчики событий
// ============================================

function initEventListeners() {
    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Переключение языка
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    // Кнопки выбора языка в модальном окне
    const langBtnRu = document.getElementById('langBtnRu');
    const langBtnKg = document.getElementById('langBtnKg');
    if (langBtnRu) {
        langBtnRu.addEventListener('click', () => setLanguage('ru'));
    }
    if (langBtnKg) {
        langBtnKg.addEventListener('click', () => setLanguage('kg'));
    }

    // Нижнее мобильное меню (объявляем раньше, чтобы использовать в других обработчиках)
    const bottomNavMenu = document.getElementById('bottomNavMenu');
    const bottomNavCart = document.getElementById('bottomNavCart');

    function updateBottomNavActive() {
        // Определяем текущую секцию на основе позиции скролла
        const menuSection = document.getElementById('menu');
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;

        if (menuSection) {
            const menuTop = menuSection.offsetTop;
            const menuBottom = menuTop + menuSection.offsetHeight;

            if (scrollPosition >= menuTop && scrollPosition < menuBottom) {
                bottomNavMenu?.classList.add('active');
                bottomNavCart?.classList.remove('active');

                // Если пользователь находится в зоне меню — показываем шапку
                const headerEl = document.querySelector('.header');
                if (headerEl) {
                    headerEl.classList.remove('hidden');
                    headerEl.classList.add('visible');
                }
            } else {
                bottomNavMenu?.classList.remove('active');
            }
        }
    }

    // Открытие корзины
    const cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', () => {
            document.getElementById('cartModal').classList.add('active');
            // Обновляем активное состояние нижнего меню
            if (bottomNavCart) {
                bottomNavCart.classList.add('active');
                bottomNavMenu?.classList.remove('active');
            }
        });
    }

    // Мобильное меню (гамбургер)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            const expanded = mainNav.classList.contains('open');
            mobileMenuBtn.setAttribute('aria-expanded', expanded);
        });

        // Закрываем меню при клике вне навигации
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Закрываем мобильное меню при изменении размера экрана
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                mainNav.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (bottomNavMenu) {
        bottomNavMenu.addEventListener('click', () => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                bottomNavMenu.classList.add('active');
                bottomNavCart?.classList.remove('active');
            }
        });
    }

    if (bottomNavCart) {
        bottomNavCart.addEventListener('click', () => {
            const cartModal = document.getElementById('cartModal');
            if (cartModal) {
                cartModal.classList.add('active');
                bottomNavCart.classList.add('active');
                bottomNavCart.classList.add('active');
                bottomNavMenu?.classList.remove('active');
            }
        });
    }

    // Обновляем активное состояние при скролле
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateBottomNavActive();
        }, 100);
    });

    // Инициализируем активное состояние при загрузке
    updateBottomNavActive();

    // Закрытие модальных окон
    const closeCartModal = document.getElementById('closeCartModal');
    if (closeCartModal) {
        closeCartModal.addEventListener('click', () => {
            document.getElementById('cartModal').classList.remove('active');
            // Обновляем активное состояние нижнего меню
            updateBottomNavActive();
        });
    }

    // Закрытие корзины при клике на overlay
    const cartModalOverlay = document.getElementById('cartModal');
    if (cartModalOverlay) {
        cartModalOverlay.addEventListener('click', (e) => {
            if (e.target === cartModalOverlay) {
                cartModalOverlay.classList.remove('active');
                updateBottomNavActive();
            }
        });
    }

    const closeOrderModal = document.getElementById('closeOrderModal');
    if (closeOrderModal) {
        closeOrderModal.addEventListener('click', () => {
            document.getElementById('orderModal').classList.remove('active');
        });
    }

    const cancelOrder = document.getElementById('cancelOrder');
    if (cancelOrder) {
        cancelOrder.addEventListener('click', () => {
            document.getElementById('orderModal').classList.remove('active');
        });
    }

    // Закрытие по клику вне модального окна
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            // Если это модальное окно выбора типа заказа и оно активно,
            // блокируем закрытие кликом по фону — пользователь должен выбрать.
            if (overlay.id === 'orderTypeModal' && overlay.classList.contains('active')) {
                // Игнорируем клик вне модального контента
                return;
            }
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Очистка корзины
    const clearCart = document.getElementById('clearCart');
    if (clearCart) {
        clearCart.addEventListener('click', () => {
            const confText = translations[currentLang] && translations[currentLang]['confirm_clear_cart'] ? translations[currentLang]['confirm_clear_cart'] : (currentLang === 'ru' ? 'Очистить корзину?' : 'Себетти тазалоо?');
            if (confirm(confText)) {
                cart = [];
                saveCart();
                updateCartUI();
            }
        });
    }

    // Предотвращаем закрытие модалов клавишей Escape, когда включена обязательная блокировка
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('modal-blocked')) {
            e.stopPropagation();
            e.preventDefault();
        }
    });

    // Оформление заказа
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Защита от пустой корзины
            if (cart.length === 0) {
                const cmsg = translations[currentLang] && translations[currentLang]['cart_empty_msg'] ? translations[currentLang]['cart_empty_msg'] : (currentLang === 'ru' ? 'Корзина пуста. Добавьте блюда в корзину.' : 'Себет бош. Себетке тамак кошуңуз.');
                alert(cmsg);
                return;
            }
            showOrderForm();
        });
    }

    // Отправка формы заказа
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
    }

    // Фильтр категорий
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterByCategory(category);

            // Обновляем активную кнопку
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Закрытие модального окна деталей блюда
    const closeDishDetailsModal = document.getElementById('closeDishDetailsModal');
    if (closeDishDetailsModal) {
        closeDishDetailsModal.addEventListener('click', () => {
            document.getElementById('dishDetailsModal').classList.remove('active');
        });
    }

    // Закрытие модального окна выбора варианта
    const closeVariantModal = document.getElementById('closeVariantModal');
    if (closeVariantModal) {
        closeVariantModal.addEventListener('click', () => {
            document.getElementById('variantModal').classList.remove('active');
        });
    }

    // Кнопка добавления в корзину из деталей
    const addToCartFromDetails = document.getElementById('addToCartFromDetails');
    if (addToCartFromDetails) {
        addToCartFromDetails.addEventListener('click', () => {
            const dishId = parseInt(addToCartFromDetails.getAttribute('data-dish-id'));
            if (dishId) {
                addToCart(dishId);
                document.getElementById('dishDetailsModal').classList.remove('active');
            }
        });
    }

    // Слайдер фото
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    if (sliderPrev) sliderPrev.addEventListener('click', () => changeSliderImage(-1));
    if (sliderNext) sliderNext.addEventListener('click', () => changeSliderImage(1));
}

// ============================================
// Переключение темы
// ============================================

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    initTheme();
}

// ============================================
// Переключение языка
// ============================================

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'kg' : 'ru';
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang);
    initLanguage();
    renderMenu(); // Перерисовываем меню с новым языком
    updateCartUI(); // Обновляем корзину с новым языком
}

// ============================================
// Рендеринг меню
// ============================================

function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    // Убедимся, что старый мобильный слайдер удалён перед перерисовкой
    // чтобы при смене фильтра не оставались старые карточки в слайдере.
    try { destroyMenuSlider(); } catch (e) { /* ignore */ }

    menuGrid.innerHTML = '';

    // Фильтруем блюда по категории
    let filteredItems;
    if (currentCategory === 'all') {
        filteredItems = menuData;
    } else if (currentCategory === 'sushi_rolls') {
        const sushiCategories = ['sets', 'cold_rolls', 'baked_rolls'];
        filteredItems = menuData.filter(item => sushiCategories.includes(item.category));
    } else if (currentCategory === 'fastfood') {
        const fastCategories = ['wings', 'nuggets', 'pizza', 'potato', 'wok', 'soups'];
        filteredItems = menuData.filter(item => fastCategories.includes(item.category));
    } else if (currentCategory === 'bubble_tea') {
        const bubbleCategories = ['bubble_tea', 'ice_tea'];
        filteredItems = menuData.filter(item => bubbleCategories.includes(item.category));
    } else if (currentCategory === 'drinks') {
        const drinkCategories = ['coffee', 'lemonade', 'tea'];
        filteredItems = menuData.filter(item => drinkCategories.includes(item.category));
    } else {
        filteredItems = menuData.filter(item => item.category === currentCategory);
    }

    filteredItems.forEach(item => {
        const card = createMenuCard(item);
        menuGrid.appendChild(card);
    });
    // mobile slider removed — grid is responsive and shows 2 columns on small screens
}

// ============================================
// Фильтрация по категориям
// ============================================

function filterByCategory(category) {
    currentCategory = category;
    renderMenu();

    // Прокручиваем к меню
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// Создание карточки блюда
// ============================================

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';

    const name = currentLang === 'ru' ? item.name : item.nameKg;
    const description = currentLang === 'ru' ? item.description : item.descriptionKg;
    let price;
    if (item.variants && item.variants.length > 0) {
        const prices = item.variants.map(v => v.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        price = minPrice === maxPrice ? `${minPrice}` : `${minPrice} - ${maxPrice}`;
    } else {
        price = item.price2 ? `${item.price} / ${item.price2}` : item.price;
    }

    const cartItem = cart.find(ci => ci.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    card.innerHTML = `
        <img src="${item.image}" alt="${name}" class="dish-image" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
        <div class="dish-info">
            <h3 class="dish-name">${name}</h3>
            <p class="dish-description">${description}</p>
            <div class="dish-footer">
                <span class="dish-price">${price} <span data-i18n="currency">сом</span></span>
                <div class="dish-actions">
                        ${quantity === 0
            ? `<button type="button" class="btn-add-cart" data-item-id="${item.id}" onclick="addToCart(${item.id})" data-i18n="add-to-cart">В корзину</button>`
            : `<div class="quantity-controls">
                            <button type="button" class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                            <span class="quantity-value">${quantity}</span>
                            <button type="button" class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                        </div>`
        }
                </div>
            </div>
        </div>
    `;

    // Переводим кнопки и элементы
    const addBtn = card.querySelector('[data-i18n="add-to-cart"]');
    if (addBtn) {
        addBtn.textContent = translations[currentLang]['add-to-cart'];
    }
    const detailsBtn = card.querySelector('[data-i18n="details"]');
    if (detailsBtn) {
        detailsBtn.textContent = translations[currentLang]['details'];
    }
    const currency = card.querySelector('[data-i18n="currency"]');
    if (currency) {
        currency.textContent = translations[currentLang]['currency'];
    }

    // Надёжная загрузка изображения: используем объект Image чтобы обработать ошибки
    const imgEl = card.querySelector('.dish-image');
    if (imgEl) {
        const placeholder = 'https://via.placeholder.com/300x200?text=No+Image';
        const loader = new Image();
        loader.onload = () => {
            imgEl.src = loader.src;
        };
        loader.onerror = () => {
            imgEl.src = placeholder;
        };
        // Начинаем загрузку
        loader.src = item.image || placeholder;

        // Навешиваем обработчик: клик по изображению открывает окно деталей
        imgEl.addEventListener('click', () => showDishDetails(item.id));
    }

    // Делаем всю карточку кликабельной — клик по карточке открывает детали.
    // Исключаем клики по кнопкам, контролам количества и по самому изображению.
    card.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('.dish-image') || e.target.closest('.dish-actions')) {
            // Если клик по кнопке/изображению/областям действий — не открываем детали здесь
            return;
        }
        showDishDetails(item.id);
    });

    return card;
}

// ============================================
// Работа с корзиной
// ============================================
function openVariantModal(item) {
    const modal = document.getElementById('variantModal');
    const title = document.getElementById('variantTitle');
    const options = document.getElementById('variantOptions');

    title.textContent = currentLang === 'ru' ? `Выберите вариант для ${item.name}` : `Тандоо ${item.name} үчүн вариант`;
    options.innerHTML = '';

    item.variants.forEach(variant => {
        const option = document.createElement('button');
        option.className = 'variant-option';
        option.textContent = `${variant.name} - ${variant.price} сом`;
        option.addEventListener('click', () => {
            addToCartWithVariant(item, variant);
            modal.classList.remove('active');
        });
        options.appendChild(option);
    });

    modal.classList.add('active');
}

function addToCartWithVariant(item, variant) {
    const cartItemId = `${item.id}-${variant.name}`;
    const existingItem = cart.find(ci => ci.id === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            name: `${currentLang === 'ru' ? item.name : item.nameKg} (${variant.name})`,
            price: variant.price,
            image: item.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    renderMenu();

    const addedLabel = translations[currentLang] && translations[currentLang]['added'] ? translations[currentLang]['added'] : (currentLang === 'ru' ? 'Добавлено:' : 'Кошулду:');
    showToast(`${addedLabel} ${currentLang === 'ru' ? item.name : item.nameKg} (${variant.name})`);
}

function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    if (item.variants && item.variants.length > 0) {
        // Открываем модальное окно для выбора варианта
        openVariantModal(item);
        return;
    }

    // Найдём кнопку, если она есть (карточка меню)
    const btn = document.querySelector(`button.btn-add-cart[data-item-id="${itemId}"]`);
    const addingText = translations[currentLang] && translations[currentLang]['adding'] ? translations[currentLang]['adding'] : (currentLang === 'ru' ? 'Добавление…' : 'Кошулууда…');
    if (btn) {
        btn.disabled = true;
        btn.textContent = addingText;
        btn.classList.add('loading');
    }

    // Небольшая имитация загрузки для UX (можно убрать или уменьшить)
    setTimeout(() => {
        const existingItem = cart.find(ci => ci.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: currentLang === 'ru' ? item.name : item.nameKg,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }

        saveCart();
        updateCartUI();
        renderMenu(); // Обновляем меню для отображения количества

        // Показ уведомления о добавлении (без открытия корзины)
        const addedLabel = translations[currentLang] && translations[currentLang]['added'] ? translations[currentLang]['added'] : (currentLang === 'ru' ? 'Добавлено:' : 'Кошулду:');
        const itemName = currentLang === 'ru' ? item.name : (item.nameKg || item.name);
        showToast(`${addedLabel} ${itemName}`);

    }, 350);
}

function increaseQuantity(itemId) {
    const cartItem = cart.find(ci => ci.id === itemId);
    if (cartItem) {
        cartItem.quantity += 1;
        saveCart();
        updateCartUI();
        renderMenu();
    }
}

function decreaseQuantity(itemId) {
    const cartItem = cart.find(ci => ci.id === itemId);
    if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(ci => ci.id !== itemId);
        }
        saveCart();
        updateCartUI();
        renderMenu();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(ci => ci.id !== itemId);
    saveCart();
    updateCartUI();
    renderMenu();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Обновляем бейдж корзины
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Обновляем бейдж корзины в нижнем меню
    const bottomNavBadge = document.getElementById('bottomNavBadge');
    if (bottomNavBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        bottomNavBadge.textContent = totalItems;
        bottomNavBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Обновляем содержимое корзины
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    const totalPrice = document.getElementById('totalPrice');

    if (!cartItems || !cartEmpty || !cartTotal || !totalPrice) return;

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartTotal.style.display = 'none';
    } else {
        cartItems.style.display = 'flex';
        cartEmpty.style.display = 'none';
        cartTotal.style.display = 'block';

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=No+Image'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ${translations[currentLang]['currency']} × ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button type="button" class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button type="button" class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <div class="cart-item-total">${itemTotal} ${translations[currentLang]['currency']}</div>
                <button type="button" class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #dc3545;" title="${translations[currentLang]['remove']}">×</button>
            `;
            cartItems.appendChild(cartItem);
        });

        totalPrice.textContent = `${total} ${translations[currentLang]['currency']}`;
    }
    // Обновляем валидацию формы заказа (кнопка Отправить зависит от корзины)
    try { validateOrderForm(); } catch (e) { /* ignore */ }
}

// ============================================
// Показ формы заказа
// ============================================

function showOrderForm() {
    const orderModal = document.getElementById('orderModal');
    const orderSummary = document.getElementById('orderSummary');
    const orderForm = document.getElementById('orderForm');

    if (!orderModal || !orderSummary || !orderForm) return;

    // Очищаем форму
    orderForm.reset();

    // Если есть данные доставки, заполняем форму
    if (orderType === 'delivery' && deliveryInfo) {
        const nameInput = document.getElementById('customerName');
        const phoneInput = document.getElementById('customerPhone');
        if (nameInput) nameInput.value = deliveryInfo.name;
        if (phoneInput) phoneInput.value = deliveryInfo.phone;
        // Заполняем адрес доставки в форме оформления заказа
        const addressInput = document.getElementById('deliveryAddress');
        if (addressInput) addressInput.value = deliveryInfo.address || '';
    }

    // Формируем сводку заказа
    let summaryHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        summaryHTML += `
            <div class="order-summary-item">
                <span>${item.name} × ${item.quantity}</span>
                <span>${itemTotal} ${translations[currentLang]['currency']}</span>
            </div>
        `;
    });

    summaryHTML += `
        <div class="order-summary-item" style="font-weight: 600; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 2px solid var(--border);">
            <span>${translations[currentLang]['cart-total']}</span>
            <span>${total} ${translations[currentLang]['currency']}</span>
        </div>
    `;

    orderSummary.innerHTML = summaryHTML;

    // Показываем заметку о типе заказа (например: "Стол №3") вверху формы
    try {
        let note = document.getElementById('orderTypeNote');
        if (!note) {
            note = document.createElement('div');
            note.id = 'orderTypeNote';
            note.className = 'order-type-note';
            // Вставляем перед сводкой заказа
            orderSummary.parentNode.insertBefore(note, orderSummary);
        }
        const ot = getOrderTypeText();
        note.textContent = ot;
        note.style.display = ot ? 'block' : 'none';
    } catch (e) { /* ignore */ }
    // Показываем/скрываем поле адреса в зависимости от типа заказа
    updateDeliveryAddressVisibility();
    // Обновляем видимость способов оплаты и QR
    adjustPaymentOptionsForDelivery();
    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    toggleMbankQr(checked ? checked.value : null);

    orderModal.classList.add('active');
}

// ============================================
// Функции оформления заказа
// ============================================

/**
 * Формирует аккуратный текст заказа для WhatsApp
 * @param {string} name - Имя клиента
 * @param {string} phone - Телефон клиента
 * @param {string} comment - Комментарий к заказу
 * @returns {string} Отформатированный текст заказа
 */
function createOrderText(name, phone, comment, paymentMethod) {
    // Проверка на пустую корзину
    if (cart.length === 0) {
        throw new Error(currentLang === 'ru' ? 'Корзина пуста' : 'Себет бош');
    }
    const headerContainer = document.getElementById('order-header');
    const logo = document.createElement('img');
    logo.src = 'icons/plate-eating.svg';
    logo.style.width = '30px';

    const text = currentLang === 'ru'
        ? ' 🍽 Новый заказ из SushiDom'
        : ' 🍽 SushiDom кафесинен жаңы заказ';
    // Формируем список блюд
    let itemsText = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsText += `${item.name} x${item.quantity} — ${itemTotal} ${translations[currentLang]['currency']}\n`;
    });

    // Итоговая сумма (с пустой строкой перед итогом)
    const totalText = `\n💰 Итого: ${total} ${translations[currentLang]['currency']}\n`;

    // Информация о клиенте (добавляем +996 к номеру)
    const fullPhone = '+996 ' + phone;
    const customerInfo = `👤 ${currentLang === 'ru' ? 'Клиент' : 'Клиент'}: ${name}\n📞 ${currentLang === 'ru' ? 'Телефон' : 'Телефон'}: ${fullPhone}`;

    // Способ оплаты
    let paymentText = '';
    if (paymentMethod) {
        let pmLabel = paymentMethod === 'cash' ? (translations[currentLang]['payment-cash'] || (currentLang === 'ru' ? 'Наличными' : 'Накта'))
            : paymentMethod === 'card' ? (translations[currentLang]['payment-card'] || (currentLang === 'ru' ? 'Картой' : 'Карта менен'))
                : paymentMethod === 'mbank' ? (translations[currentLang]['payment-mbank'] || 'MBank')
                    : paymentMethod;
        paymentText = `\n💳 ${currentLang === 'ru' ? 'Способ оплаты' : 'Төлөө ыкмасы'}: ${pmLabel}`;
    }

    // Комментарий (если есть)
    let commentText = '';
    if (comment && comment.trim()) {
        commentText = `\n📝 ${currentLang === 'ru' ? 'Комментарий' : 'Комментарий'}: ${comment}`;
    }

    // Тип заказа (стол/самовывоз/доставка)
    const orderTypeInfo = getOrderTypeText();
    const orderTypeText = orderTypeInfo ? `\n${orderTypeInfo}` : '';

    // Собираем полный текст заказа
    const headerText = '🍽 ' + (currentLang === 'ru' ? 'Новый заказ из SushiDom' : 'SushiDom кафесинен жаңы заказ') + '\n\n';

    return headerText + itemsText + totalText + customerInfo + paymentText + orderTypeText + commentText;
}

/**
 * Отправляет заказ в WhatsApp
 * @param {string} orderText - Текст заказа
 */
function sendToWhatsApp(orderText) {
    // Формируем URL для WhatsApp (отправка на общий номер кафе)
    const whatsappUrl = `https://wa.me/${CAFE_PHONE_NUMBER}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
}

// Вспомогательный вариант: отправить на конкретный номер (без '+')
function sendToWhatsAppTo(orderText, phoneNumber) {
    if (!phoneNumber) return sendToWhatsApp(orderText);
    const target = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${target}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Отправляет заказ в Google Sheets через Google Apps Script
 * @param {string} name - Имя клиента
 * @param {string} phone - Телефон клиента
 * @param {string} comment - Комментарий к заказу
 * @returns {Promise} Промис с результатом отправки
 */
async function sendToExcel(name, phone, comment, paymentMethod, address) {
    // Проверяем, настроен ли URL Google Sheets
    if (GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        console.log('Google Sheets не настроен. Пропускаем отправку.');
        return Promise.resolve();
    }

    // Вычисляем общую сумму заказа
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Формируем текст заказа для сохранения
    const orderText = cart.map(item => `${item.name} × ${item.quantity}`).join(', ');

    // Данные для отправки в Google Sheets
    const orderData = {
        date: new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
        order: orderText,
        total: total,
        customerName: name,
        customerPhone: phone,
        // Добавляем адрес доставки в комментарий, если он есть
        comment: ((comment && comment.trim()) ? comment.trim() + ' | ' : '') + (address || ''),
        paymentMethod: paymentMethod || ''
    };

    try {
        // Отправляем данные в Google Sheets
        // Используем no-cors режим для обхода CORS ограничений
        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Важно: позволяет отправлять без CORS проверки
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });

        console.log('Заказ успешно отправлен в Google Sheets');
        return Promise.resolve();
    } catch (error) {
        // Логируем ошибку, но не прерываем процесс заказа
        console.error('Ошибка отправки в Google Sheets:', error);
        // Возвращаем успешный промис, чтобы не блокировать отправку в WhatsApp
        return Promise.resolve();
    }
}

/**
 * Очищает корзину и localStorage
 */
function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartUI();
    renderMenu();
}

/**
 * Основная функция оформления заказа
 * Выполняет все необходимые действия: валидацию, отправку в WhatsApp и Google Sheets
 * @param {Event} e - Событие формы
 */
async function placeOrder(e) {
    e.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const comment = document.getElementById('orderComment').value.trim();

    // Валидация: проверка на пустую корзину
    if (cart.length === 0) {
        alert(currentLang === 'ru'
            ? 'Корзина пуста. Добавьте блюда в корзину.'
            : 'Себет бош. Себетке тамак кошуңуз.');
        return;
    }

    // Валидация: проверка обязательных полей
    if (!name || !phone) {
        alert(currentLang === 'ru'
            ? 'Заполните все обязательные поля'
            : 'Бардык милдеттүү талааларды толтуруңуз');
        return;
    }

    // Валидация: проверка формата телефона
    // Принимаем форматы: +996 998 252 023, 0998252023, 996998252023
    const cleanPhone = phone.replace(/[\s-]/g, ''); // Убираем пробелы и дефисы
    const phoneRegex = /^(\+?996|0)?[0-9]{9}$/;

    if (!phoneRegex.test(cleanPhone)) {
        alert(currentLang === 'ru'
            ? 'Введите корректный номер телефона\nПример: +996 998 252 023 или 0998252023'
            : 'Туура телефон номурун киргизиңиз\nМисал: +996 998 252 023 же 0998252023');
        return;
    }

    try {
        // Читаем выбранный способ оплаты
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked') ? document.querySelector('input[name="paymentMethod"]:checked').value : 'cash';

        // Формируем текст заказа
        // Если это доставка, синхронизируем адрес из формы в `deliveryInfo`
        if (orderType === 'delivery') {
            const addrInput = document.getElementById('deliveryAddress');
            const addrVal = addrInput ? addrInput.value.trim() : (deliveryInfo ? deliveryInfo.address : '');
            if (!deliveryInfo) deliveryInfo = {};
            deliveryInfo.address = addrVal || deliveryInfo.address;
            try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch (e) { }
        }

        const orderText = createOrderText(name, phone, comment, paymentMethod);

        // Параллельно отправляем в WhatsApp и Google Sheets
        // Открываем WhatsApp для отправки сообщения клиентом — или отправляем напрямую через сервер
        const targetPhone = (orderType === 'cafe' && currentWaiter && currentWaiter.phone) ? currentWaiter.phone : CAFE_PHONE_NUMBER;
        if (NOTIFY_ENDPOINT && NOTIFY_ENDPOINT.trim() !== '') {
            try {
                await sendNotificationToServer(orderText, targetPhone);
            } catch (err) {
                console.error('Notification to server failed, falling back to WhatsApp:', err);
                sendToWhatsAppTo(orderText, targetPhone);
            }
        } else {
            // Fallback: open WhatsApp so customer sends message manually
            sendToWhatsAppTo(orderText, targetPhone);
        }

        // Отправляем в Google Sheets в фоне (не блокируем процесс)
        const deliveryAddrForSheet = (orderType === 'delivery' && deliveryInfo && deliveryInfo.address) ? deliveryInfo.address : '';
        sendToExcel(name, phone, comment, paymentMethod, deliveryAddrForSheet).catch(error => {
            console.error('Ошибка при отправке в Google Sheets:', error);
        });

        // Очищаем корзину и localStorage
        clearCart();

        // Закрываем модальное окно
        const orderModal = document.getElementById('orderModal');
        if (orderModal) {
            orderModal.classList.remove('active');
        }

        // Показываем сообщение об успехе
        alert(currentLang === 'ru'
            ? '✅ Заказ отправлен! Мы свяжемся с вами в ближайшее время.'
            : '✅ Заказ жөнөтүлдү! Биз жакынкы убакта сиз менен байланышабыз.');

    } catch (error) {
        console.error('Ошибка при оформлении заказа:', error);
        alert(currentLang === 'ru'
            ? `❌ Произошла ошибка: ${error.message}. Пожалуйста, попробуйте еще раз.`
            : `❌ Ката кетти: ${error.message}. Сураныч, кайра аракет кылыңыз.`);
    }
}

/**
 * Отправляет уведомление о заказе на серверный webhook.
 * Ожидается, что сервер сам доставит сообщение на телефон кафе (SMS, WhatsApp Business API и т.д.).
 * @param {string} orderText
 * @param {string} phone
 */
async function sendNotificationToServer(orderText, phone) {
    if (!NOTIFY_ENDPOINT || NOTIFY_ENDPOINT.trim() === '') {
        return Promise.reject(new Error('NOTIFY_ENDPOINT not configured'));
    }

    const payload = {
        phone: (phone || '').toString().replace(/\D/g, ''),
        message: orderText
    };

    const res = await fetch(NOTIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error('Server responded with ' + res.status + ' ' + txt);
    }

    return res.json ? res.json() : true;
}

/**
 * Обработчик отправки формы заказа
 * @param {Event} e - Событие формы
 */
function handleOrderSubmit(e) {
    placeOrder(e);
}

// ============================================
// Модальное окно деталей блюда
// ============================================

/**
 * Показывает модальное окно с деталями блюда
 * @param {number} dishId - ID блюда
 */
function showDishDetails(dishId) {
    const dish = menuData.find(item => item.id === dishId);
    if (!dish) return;

    const modal = document.getElementById('dishDetailsModal');
    const title = document.getElementById('dishDetailsTitle');
    const name = document.getElementById('dishDetailsName');
    const description = document.getElementById('dishDetailsDescription');
    const price = document.getElementById('dishDetailsPrice');
    const ingredientsList = document.getElementById('dishIngredientsList');
    const slider = document.getElementById('dishSlider');
    const sliderDots = document.getElementById('sliderDots');
    const addBtn = document.getElementById('addToCartFromDetails');

    if (!modal || !title || !name || !description || !price || !ingredientsList || !slider) return;

    // Заполняем информацию о блюде
    const dishName = currentLang === 'ru' ? dish.name : dish.nameKg;
    const dishDescription = currentLang === 'ru' ? dish.description : dish.descriptionKg;
    const dishPrice = dish.price2 ? `${dish.price} / ${dish.price2}` : dish.price;

    title.textContent = dishName;
    name.textContent = dishName;
    description.textContent = dishDescription;
    price.textContent = `${dishPrice} ${translations[currentLang]['currency']}`;

    // Устанавливаем ID блюда для кнопки добавления
    if (addBtn) {
        addBtn.setAttribute('data-dish-id', dishId);
    }

    // Получаем фото для слайдера
    const images = dish.images && dish.images.length > 0 ? dish.images : [dish.image];
    currentSliderIndex = 0;

    // Очищаем слайдер
    slider.innerHTML = '';
    sliderDots.innerHTML = '';

    // Добавляем фото в слайдер
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = `<img src="${img}" alt="${dishName}" onclick="openImageLightbox('${img}','${dishName}')" onerror="this.src='https://via.placeholder.com/600x400?text=No+Image'">`;
        slider.appendChild(slide);

        // Добавляем точку для навигации
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-slide', index);
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    // Показываем/скрываем кнопки навигации
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    if (sliderPrev) sliderPrev.style.display = images.length > 1 ? 'block' : 'none';
    if (sliderNext) sliderNext.style.display = images.length > 1 ? 'block' : 'none';
    sliderDots.style.display = images.length > 1 ? 'flex' : 'none';

    // Ингредиенты
    ingredientsList.innerHTML = '';
    if (dish.ingredients && dish.ingredients.length > 0) {
        const ingredients = currentLang === 'ru' ? dish.ingredients : (dish.ingredientsKg || dish.ingredients);
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
    } else {
        // Если ингредиенты не указаны, используем описание
        const li = document.createElement('li');
        li.textContent = dishDescription;
        ingredientsList.appendChild(li);
    }

    // Показываем модальное окно
    modal.classList.add('active');
    updateSlider();
}

/**
 * Переключает слайдер на следующее/предыдущее фото
 * @param {number} direction - Направление: 1 (вперёд) или -1 (назад)
 */
function changeSliderImage(direction) {
    const slider = document.getElementById('dishSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-slide');
    if (slides.length === 0) return;

    currentSliderIndex += direction;

    if (currentSliderIndex < 0) {
        currentSliderIndex = slides.length - 1;
    } else if (currentSliderIndex >= slides.length) {
        currentSliderIndex = 0;
    }

    updateSlider();
}

/**
 * Переходит к конкретному слайду
 * @param {number} index - Индекс слайда
 */
function goToSlide(index) {
    const slider = document.getElementById('dishSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-slide');
    if (index < 0 || index >= slides.length) return;

    currentSliderIndex = index;
    updateSlider();
}

/**
 * Обновляет отображение слайдера
 */
function updateSlider() {
    const slider = document.getElementById('dishSlider');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-slide');
    if (slides.length === 0) return;

    // Перемещаем слайдер
    slider.style.transform = `translateX(-${currentSliderIndex * 100}%)`;

    // Обновляем активную точку
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSliderIndex);
    });
}

// ============================================
// Мобильный слайдер для меню
// ============================================

let menuSliderState = {
    currentIndex: 0,
    intervalId: null,
    initialized: false,
};

function initMenuSlider() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    // Показ только на узких экранах
    if (window.innerWidth > 768) {
        destroyMenuSlider();
        return;
    }

    if (menuSliderState.initialized) return;

    // Создаем контейнер слайдера
    const slider = document.createElement('div');
    slider.id = 'menuSlider';
    slider.className = 'menu-slider';

    const track = document.createElement('div');
    track.className = 'menu-slider-track';

    // Перемещаем карточки в слайды
    while (menuGrid.firstChild) {
        const slideWrapper = document.createElement('div');
        slideWrapper.className = 'menu-slide';
        slideWrapper.appendChild(menuGrid.firstChild);
        track.appendChild(slideWrapper);
    }

    slider.appendChild(track);

    // Кнопки навигации
    const prev = document.createElement('button');
    prev.className = 'slider-btn slider-prev';
    prev.innerHTML = '‹';
    prev.addEventListener('click', () => changeMenuSlide(-1));

    const next = document.createElement('button');
    next.className = 'slider-btn slider-next';
    next.innerHTML = '›';
    next.addEventListener('click', () => changeMenuSlide(1));

    slider.appendChild(prev);
    slider.appendChild(next);

    // Точки
    const dots = document.createElement('div');
    dots.className = 'menu-slider-dots';
    slider.appendChild(dots);

    // Вставляем слайдер перед меню (menuGrid заменён на пустой контейнер)
    menuGrid.parentNode.insertBefore(slider, menuGrid);

    // Инициализация точек
    updateMenuDots();

    // Автопрокрутка
    menuSliderState.intervalId = setInterval(() => changeMenuSlide(1), 3500);

    // События для свайпа
    initSliderTouch(track);

    menuSliderState.initialized = true;
}

function destroyMenuSlider() {
    const slider = document.getElementById('menuSlider');
    const menuGrid = document.getElementById('menuGrid');
    if (!slider || !menuGrid) return;

    const track = slider.querySelector('.menu-slider-track');
    if (track) {
        while (track.firstChild) {
            const slide = track.firstChild;
            // извлекаем карточку из обертки
            const card = slide.firstChild;
            if (card) menuGrid.appendChild(card);
            track.removeChild(slide);
        }
    }

    slider.remove();
    if (menuSliderState.intervalId) {
        clearInterval(menuSliderState.intervalId);
        menuSliderState.intervalId = null;
    }
    menuSliderState.currentIndex = 0;
    menuSliderState.initialized = false;
}

function changeMenuSlide(direction) {
    const slider = document.getElementById('menuSlider');
    if (!slider) return;
    const track = slider.querySelector('.menu-slider-track');
    const slides = track ? track.children : [];
    if (!slides || slides.length === 0) return;

    let idx = menuSliderState.currentIndex + direction;
    if (idx < 0) idx = slides.length - 1;
    if (idx >= slides.length) idx = 0;

    goToMenuSlide(idx);
}

function goToMenuSlide(index) {
    const slider = document.getElementById('menuSlider');
    if (!slider) return;
    const track = slider.querySelector('.menu-slider-track');
    const dots = slider.querySelectorAll('.menu-slider-dot');
    const slides = track.children;
    if (index < 0 || index >= slides.length) return;

    track.style.transform = `translateX(-${index * 100}%)`;
    menuSliderState.currentIndex = index;

    dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function updateMenuDots() {
    const slider = document.getElementById('menuSlider');
    if (!slider) return;
    const dotsContainer = slider.querySelector('.menu-slider-dots');
    const track = slider.querySelector('.menu-slider-track');
    dotsContainer.innerHTML = '';
    const count = track ? track.children.length : 0;
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'menu-slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToMenuSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function initSliderTouch(track) {
    if (!track) return;
    let startX = 0;
    let deltaX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        if (menuSliderState.intervalId) {
            clearInterval(menuSliderState.intervalId);
            menuSliderState.intervalId = null;
        }
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        deltaX = e.touches[0].clientX - startX;
    }, { passive: true });

    track.addEventListener('touchend', () => {
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) changeMenuSlide(-1);
            else changeMenuSlide(1);
        }
        // восстанавливаем автопрокрутку
        if (!menuSliderState.intervalId) {
            menuSliderState.intervalId = setInterval(() => changeMenuSlide(1), 3500);
        }
        startX = 0; deltaX = 0;
    });
}

// Пересоздаем/уничтожаем слайдер при изменении размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768) destroyMenuSlider();
        else initMenuSlider();
    }, 200);
});

// ============================================
// Экспорт функций для использования в HTML
// ============================================

// ============================================
// Управление шапкой при скролле
// ============================================

/**
 * Инициализирует логику скрытия/показа шапки при скролле
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollTop = 0;
    let scrollThreshold = 100; // Минимальное расстояние скролла для срабатывания
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Если прокрутили меньше порога, не меняем состояние
                if (Math.abs(currentScrollTop - lastScrollTop) < 10) {
                    ticking = false;
                    return;
                }

                // В самом верху страницы всегда показываем шапку
                if (currentScrollTop < 50) {
                    header.classList.remove('hidden');
                    header.classList.add('visible');
                }
                // При скролле вниз - скрываем
                else if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
                    header.classList.add('hidden');
                    header.classList.remove('visible');
                }
                // При скролле вверх - показываем
                else if (currentScrollTop < lastScrollTop) {
                    header.classList.remove('hidden');
                    header.classList.add('visible');
                }

                lastScrollTop = currentScrollTop;
                ticking = false;
            });

            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// Экспорт функций для использования в HTML
// ============================================

// ============================================
// Система отзывов
// ============================================

// Утилита: простой toast для уведомлений
function showToast(message, timeout = 3000) {
    const toast = document.createElement('div');
    toast.className = 'cf-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    // force reflow for animation
    void toast.offsetWidth;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 400);
    }, timeout);
}


let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

/**
 * Инициализация системы отзывов
 */
async function initReviews() {
    // Попробуем получить отзывы с сервера (если настроен)
    await fetchReviewsFromServer();

    // Инициализация рейтинга звездами
    initStarRating();

    // Обработчик формы отзыва
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }

    // Кнопки загрузки фото
    const takePhotoBtn = document.getElementById('takePhotoBtn');
    const choosePhotoBtn = document.getElementById('choosePhotoBtn');
    const removePhotoBtn = document.getElementById('removePhotoBtn');
    const reviewPhoto = document.getElementById('reviewPhoto');

    if (takePhotoBtn && reviewPhoto) {
        takePhotoBtn.addEventListener('click', () => {
            reviewPhoto.setAttribute('capture', 'environment');
            reviewPhoto.click();
        });
    }

    if (choosePhotoBtn && reviewPhoto) {
        choosePhotoBtn.addEventListener('click', () => {
            reviewPhoto.removeAttribute('capture');
            reviewPhoto.click();
        });
    }

    if (removePhotoBtn) {
        removePhotoBtn.addEventListener('click', () => {
            const photoPreview = document.getElementById('photoPreview');
            const reviewPhoto = document.getElementById('reviewPhoto');
            if (photoPreview) photoPreview.innerHTML = '';
            if (reviewPhoto) reviewPhoto.value = '';
            removePhotoBtn.style.display = 'none';
        });
    }

    if (reviewPhoto) {
        reviewPhoto.addEventListener('change', handlePhotoSelect);
    }

    // Отображение отзывов
    displayReviews();
}

/**
 * Инициализация рейтинга звездами
 */
function initStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('reviewRating');

    if (!stars.length || !ratingInput) return;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingInput.value = rating;
            updateStarRating(rating);
        });

        star.addEventListener('mouseenter', () => {
            updateStarRating(index + 1, true);
        });
    });

    const starContainer = document.getElementById('starRating');
    if (starContainer) {
        starContainer.addEventListener('mouseleave', () => {
            const currentRating = parseInt(ratingInput.value) || 0;
            updateStarRating(currentRating);
        });
    }
}

/**
 * Обновление отображения звезд рейтинга
 */
function updateStarRating(rating, isHover = false) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

/**
 * Обработка выбора фото
 */
function handlePhotoSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert(currentLang === 'ru' ? 'Пожалуйста, выберите изображение' : 'Сураныч, сүрөт тандаңыз');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const photoPreview = document.getElementById('photoPreview');
        const removePhotoBtn = document.getElementById('removePhotoBtn');

        if (photoPreview) {
            photoPreview.innerHTML = `
                <img src="${event.target.result}" alt="Preview" class="photo-preview-image">
            `;
        }

        if (removePhotoBtn) {
            removePhotoBtn.style.display = 'block';
        }
    };

    reader.readAsDataURL(file);
}

/**
 * Обработка отправки отзыва
 */
function handleReviewSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('reviewerName').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value.trim();
    const photoInput = document.getElementById('reviewPhoto');

    if (!name || !rating || !comment) {
        alert(currentLang === 'ru'
            ? 'Заполните все обязательные поля'
            : 'Бардык милдеттүү талааларды толтуруңуз');
        return;
    }

    if (rating === 0) {
        alert(currentLang === 'ru'
            ? 'Пожалуйста, выберите оценку'
            : 'Сураныч, баалоо тандаңыз');
        return;
    }

    // Получаем фото, если есть
    let photoData = null;
    if (photoInput && photoInput.files && photoInput.files[0]) {
        const file = photoInput.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            photoData = event.target.result;
            saveReview(name, rating, comment, photoData);
        };

        reader.readAsDataURL(file);
    } else {
        saveReview(name, rating, comment, null);
    }
}

/**
 * Сохранение отзыва
 */
function saveReview(name, rating, comment, photoData) {
    const review = {
        id: Date.now(),
        name: name,
        rating: rating,
        comment: comment,
        photo: photoData,
        date: new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }),
        timestamp: Date.now()
    };

    reviews.unshift(review); // Добавляем в начало
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Очищаем форму
    document.getElementById('reviewForm').reset();
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('removePhotoBtn').style.display = 'none';
    updateStarRating(0);

    // Обновляем отображение
    displayReviews();

    // Показываем сообщение об успехе
    alert(currentLang === 'ru'
        ? 'Спасибо за ваш отзыв!'
        : 'Пикириңиз үчүн рахмат!');

    // Попробуем отправить на сервер в фоне (если настроен)
    postReviewToServer(review).then(saved => {
        if (saved && typeof saved === 'object') {
            const idx = reviews.findIndex(r => r.timestamp === review.timestamp);
            if (idx !== -1) {
                reviews[idx] = saved;
                localStorage.setItem('reviews', JSON.stringify(reviews));
            }
        } else {
            console.warn('Review stored locally but not synced to server.');
        }
    });
}

function displayReviews(limit = 6) {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const reviewsEmpty = document.getElementById('reviewsEmpty');

    if (!reviewsGrid || !reviewsEmpty) return;

    if (reviews.length === 0) {
        reviewsGrid.style.display = 'none';
        reviewsEmpty.style.display = 'block';
        return;
    }

    reviewsGrid.style.display = 'grid';
    reviewsEmpty.style.display = 'none';
    reviewsGrid.innerHTML = '';

    const reviewsToShow = reviews.slice(0, limit);

    reviewsToShow.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsGrid.appendChild(reviewCard);
    });
}

/**
 * Создание карточки отзыва
 */
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += `<span class="review-star ${i <= review.rating ? 'active' : ''}">★</span>`;
    }

    let photoHTML = '';
    if (review.photo) {
        photoHTML = `<img src="${review.photo}" alt="Review photo" class="review-photo">`;
    }

    card.innerHTML = `
        <div class="review-header">
            <div class="review-author">
                <strong>${review.name}</strong>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-stars">${starsHTML}</div>
        </div>
        <div class="review-content">
            <p class="review-comment">${review.comment}</p>
            ${photoHTML}
        </div>
    `;

    return card;
}

/**
 * Получение всех отзывов
 */
function getAllReviews() {
    return reviews.sort((a, b) => b.timestamp - a.timestamp); // Сортировка по дате (новые сначала)
}

// Попытка получить отзывы с сервера (если настроен)
async function fetchReviewsFromServer() {
    if (!REVIEWS_ENDPOINT) return; // не настроен
    try {
        const res = await fetch(REVIEWS_ENDPOINT, { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        if (Array.isArray(data)) {
            reviews = data.sort((a, b) => b.timestamp - a.timestamp);
            localStorage.setItem('reviews', JSON.stringify(reviews));
        }
    } catch (err) {
        console.warn('Could not fetch reviews from server:', err);
    }
}

async function postReviewToServer(review) {
    if (!REVIEWS_ENDPOINT) return false;
    try {
        const res = await fetch(REVIEWS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        });
        if (!res.ok) throw new Error('Network response was not ok');
        const saved = await res.json();
        return saved;
    } catch (err) {
        console.warn('Failed to post review to server:', err);
        return false;
    }
}
window.addToCart = addToCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;
window.showDishDetails = showDishDetails;
window.filterByCategory = filterByCategory;
window.getAllReviews = getAllReviews;
window.createReviewCard = createReviewCard;

// Показываем модалку выбора типа заказа сразу, если нужно
(function () {
    // Init order type modal (только навешиваем обработчики, не показываем сразу)
    initOrderTypeModal();
    // Если стол передан через параметр ?table=, сразу выбираем его.
    // В этом случае окно "Как вы хотите заказать?" не показываем вообще.
    const handledByUrl = initTableFromUrl();
    // Если стол НЕ передан в URL, показываем модалку выбора типа заказа
    if (!handledByUrl) {
        // Если в localStorage сохранён официант/стол — восстановим баннер
        try {
            const savedWaiter = localStorage.getItem('currentWaiter');
            if (savedWaiter && !currentWaiter) {
                currentWaiter = JSON.parse(savedWaiter);
                // Отложенно показываем баннер
                setTimeout(() => { notifyAssignedWaiter(); }, 300);
            }
        } catch (e) { }

        const orderTypeModal = document.getElementById('orderTypeModal');
        if (orderTypeModal) {
            orderTypeModal.classList.add('active');
            enableModalLock();
        }
    }
})();
