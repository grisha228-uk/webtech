// Скрипт для отображения блюд на странице

// Функция для создания HTML-элемента блюда
function createDishElement(dish) {
	const dishDiv = document.createElement('div');
	dishDiv.className = 'dish';
	dishDiv.setAttribute('data-dish', dish.keyword);

	dishDiv.innerHTML = `
		<img src="${dish.image}" alt="${dish.name}" class="dish__image">
		<p class="dish__price">${dish.price}₽</p>
		<p class="dish__name">${dish.name}</p>
		<p class="dish__weight">${dish.count}</p>
		<button class="dish__button">Добавить</button>
	`;

	return dishDiv;
}

// Функция для отображения блюд по категориям
function displayDishes() {
	// Сортируем блюда по алфавиту
	const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));

	// Получаем контейнеры для каждой категории
	const soupGrid = document.querySelector('.dishes[data-category="soup"] .dishes__grid');
	const mainGrid = document.querySelector('.dishes[data-category="main"] .dishes__grid');
	const drinkGrid = document.querySelector('.dishes[data-category="drink"] .dishes__grid');

	// Очищаем контейнеры
	if (soupGrid) soupGrid.innerHTML = '';
	if (mainGrid) mainGrid.innerHTML = '';
	if (drinkGrid) drinkGrid.innerHTML = '';

	// Добавляем блюда в соответствующие категории
	sortedDishes.forEach(dish => {
		const dishElement = createDishElement(dish);

		if (dish.category === 'soup' && soupGrid) {
			soupGrid.appendChild(dishElement);
		} else if (dish.category === 'main' && mainGrid) {
			mainGrid.appendChild(dishElement);
		} else if (dish.category === 'drink' && drinkGrid) {
			drinkGrid.appendChild(dishElement);
		}
	});
}

// Запускаем отображение блюд после загрузки страницы
document.addEventListener('DOMContentLoaded', displayDishes);
