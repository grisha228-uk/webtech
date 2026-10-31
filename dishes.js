// Массив блюд
const dishes = [
	// Супы
	{
		keyword: 'borch',
		name: 'Борщ',
		price: 280,
		category: 'soup',
		kind: 'meat',
		count: '350г',
		image: 'img/borch.webp'
	},
	{
		keyword: 'solyanka',
		name: 'Солянка',
		price: 320,
		category: 'soup',
		kind: 'meat',
		count: '350г',
		image: 'img/solyanka.webp'
	},
	{
		keyword: 'mushroom-soup',
		name: 'Грибной суп',
		price: 260,
		category: 'soup',
		kind: 'veg',
		count: '350г',
		image: 'img/gribnoj.webp'
	},
	{
		keyword: 'gaspacho',
		name: 'Гаспачо',
		price: 195,
		category: 'soup',
		kind: 'veg',
		count: '350г',
		image: 'img/gaspacho.jpg'
	},
	{
		keyword: 'fish-soup',
		name: 'Рыбный суп',
		price: 270,
		category: 'soup',
		kind: 'fish',
		count: '330г',
		image: 'img/ribniysup.jpg'
	},
	{
		keyword: 'ramen',
		name: 'Рамен',
		price: 375,
		category: 'soup',
		kind: 'meat',
		count: '425г',
		image: 'img/ramen.jpg'
	},

	// Главные блюда
	{
		keyword: 'fried-potatoes-chanterelles',
		name: 'Жареная картошка с лисичками',
		price: 385,
		category: 'main',
		kind: 'veg',
		count: '400г',
		image: 'img/lisichkikart.png'
	},
	{
		keyword: 'pelmeni',
		name: 'Пельмени',
		price: 225,
		category: 'main',
		kind: 'meat',
		count: '300г',
		image: 'img/pelmeni.webp'
	},
	{
		keyword: 'stuffed-zucchini',
		name: 'Кабачки фаршированные',
		price: 270,
		category: 'main',
		kind: 'veg',
		count: '350г',
		image: 'img/кабачки.webp'
	},
	{
		keyword: 'pasta-shrimp',
		name: 'Паста с креветками',
		price: 340,
		category: 'main',
		kind: 'fish',
		count: '280г',
		image: 'img/pastaskrevetkami.jpg'
	},
	{
		keyword: 'fish-cutlet-rice',
		name: 'Рыбная котлета с рисом и спаржей',
		price: 320,
		category: 'main',
		kind: 'fish',
		count: '270г',
		image: 'img/ribnayakotletapure.jpg'
	},
	{
		keyword: 'pizza-margarita',
		name: 'Пицца Маргарита',
		price: 450,
		category: 'main',
		kind: 'veg',
		count: '470г',
		image: 'img/pizzamargarita.jpg'
	},

	// Салаты и стартеры
	{
		keyword: 'caesar-salad',
		name: 'Салат Цезарь',
		price: 370,
		category: 'salad',
		kind: 'meat',
		count: '220г',
		image: 'img/salatcesar.jpg'
	},
	{
		keyword: 'crab-salad',
		name: 'Салат с крабовыми палочками',
		price: 250,
		category: 'salad',
		kind: 'fish',
		count: '230г',
		image: 'img/crabsalat.jpg'
	},
	{
		keyword: 'french-fries',
		name: 'Картофель фри с соусом Цезарь',
		price: 280,
		category: 'salad',
		kind: 'veg',
		count: '235г',
		image: 'img/freepotato.jpg'
	},
	{
		keyword: 'chicken-nuggets',
		name: 'Куриные наггетсы',
		price: 285,
		category: 'salad',
		kind: 'meat',
		count: '220г',
		image: 'img/nuggets.jpg'
	},
	{
		keyword: 'olivier-salad',
		name: 'Салат Оливье',
		price: 310,
		category: 'salad',
		kind: 'meat',
		count: '195г',
		image: 'img/salatolive.jpg'
	},
	{
		keyword: 'tuna-salad',
		name: 'Салат с тунцом',
		price: 480,
		category: 'salad',
		kind: 'fish',
		count: '250г',
		image: 'img/saladwithtuna.jpg'
	},

	// Напитки
	{
		keyword: 'orange-juice',
		name: 'Апельсиновый сок',
		price: 120,
		category: 'drink',
		kind: 'cold',
		count: '300мл',
		image: 'img/apelsinoviysok.webp'
	},
	{
		keyword: 'apple-juice',
		name: 'Яблочный сок',
		price: 110,
		category: 'drink',
		kind: 'cold',
		count: '300мл',
		image: 'img/yablochniysok.jfif'
	},
	{
		keyword: 'pomegranate-juice',
		name: 'Гранатовый сок',
		price: 150,
		category: 'drink',
		kind: 'cold',
		count: '300мл',
		image: 'img/granatsok.webp'
	},
	{
		keyword: 'cappuccino',
		name: 'Капучино',
		price: 180,
		category: 'drink',
		kind: 'hot',
		count: '300мл',
		image: 'img/cappuchino.jpg'
	},
	{
		keyword: 'green-tea',
		name: 'Зеленый чай',
		price: 100,
		category: 'drink',
		kind: 'hot',
		count: '300мл',
		image: 'img/greentea.jpg'
	},
	{
		keyword: 'black-tea',
		name: 'Черный чай',
		price: 90,
		category: 'drink',
		kind: 'hot',
		count: '300мл',
		image: 'img/blacktea.jpg'
	},

	// Десерты
	{
		keyword: 'donuts',
		name: 'Пончики (3 штуки)',
		price: 410,
		category: 'dessert',
		kind: 'snack',
		count: '300г',
		image: 'img/donuts.jpg'
	},
	{
		keyword: 'chocolate-cake',
		name: 'Шоколадный торт',
		price: 270,
		category: 'dessert',
		kind: 'cake',
		count: '125г',
		image: 'img/chocolatecake.jpg'
	},
	{
		keyword: 'cheesecake',
		name: 'Чизкейк',
		price: 240,
		category: 'dessert',
		kind: 'cake',
		count: '125г',
		image: 'img/cheesecake.jpg'
	},
	{
		keyword: 'cheesecake-chocolate',
		name: 'Шоколадный чизкейк',
		price: 260,
		category: 'dessert',
		kind: 'cake',
		count: '140г',
		image: 'img/cheesecakechocolate.jpg'
	},
	{
		keyword: 'macaron',
		name: 'Макарон',
		price: 300,
		category: 'dessert',
		kind: 'snack',
		count: '140г',
		image: 'img/macaronpirozhnoe.jpg'
	},
	{
		keyword: 'ice-cream',
		name: 'Мороженое с пончиком',
		price: 310,
		category: 'dessert',
		kind: 'icecream',
		count: '180г',
		image: 'img/icecream.jpg'
	}
];
