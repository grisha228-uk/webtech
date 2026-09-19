// Скрипт для выбора блюд и подсчета стоимости

// Хранилище выбранных блюд
const selectedDishes = {
	soup: null,
	main: null,
	drink: null
};

// Функция для обновления отображения заказа
function updateOrderDisplay() {
	const orderDisplay = document.getElementById('order-display');

	// Проверяем, выбрано ли хотя бы одно блюдо
	const hasSelection = selectedDishes.soup || selectedDishes.main || selectedDishes.drink;

	if (!hasSelection) {
		orderDisplay.innerHTML = '<p class="order-empty">Ничего не выбрано</p>';
		return;
	}

	let html = '';

	// Суп
	if (selectedDishes.soup) {
		html += `
			<div class="order-item">
				<p class="order-item__category">Суп</p>
				<p class="order-item__name">${selectedDishes.soup.name} ${selectedDishes.soup.price}₽</p>
			</div>
		`;
	} else {
		html += `
			<div class="order-item">
				<p class="order-item__category">Суп</p>
				<p class="order-item__empty">Блюдо не выбрано</p>
			</div>
		`;
	}

	// Главное блюдо
	if (selectedDishes.main) {
		html += `
			<div class="order-item">
				<p class="order-item__category">Главное блюдо</p>
				<p class="order-item__name">${selectedDishes.main.name} ${selectedDishes.main.price}₽</p>
			</div>
		`;
	} else {
		html += `
			<div class="order-item">
				<p class="order-item__category">Главное блюдо</p>
				<p class="order-item__empty">Блюдо не выбрано</p>
			</div>
		`;
	}

	// Напиток
	if (selectedDishes.drink) {
		html += `
			<div class="order-item">
				<p class="order-item__category">Напиток</p>
				<p class="order-item__name">${selectedDishes.drink.name} ${selectedDishes.drink.price}₽</p>
			</div>
		`;
	} else {
		html += `
			<div class="order-item">
				<p class="order-item__category">Напиток</p>
				<p class="order-item__empty">Напиток не выбран</p>
			</div>
		`;
	}

	// Стоимость заказа
	const totalPrice =
		(selectedDishes.soup?.price || 0) +
		(selectedDishes.main?.price || 0) +
		(selectedDishes.drink?.price || 0);

	html += `
		<div class="order-total">
			<p class="order-total__label">Стоимость заказа</p>
			<p class="order-total__price">${totalPrice}₽</p>
		</div>
	`;

	orderDisplay.innerHTML = html;
}

// Функция для обработки клика на блюдо
function handleDishClick(event) {
	// Находим ближайший родительский элемент с классом dish
	const dishElement = event.target.closest('.dish');
	if (!dishElement) return;

	// Получаем keyword блюда из data-атрибута
	const dishKeyword = dishElement.getAttribute('data-dish');

	// Находим блюдо в массиве
	const dish = dishes.find(d => d.keyword === dishKeyword);
	if (!dish) return;

	// Сохраняем выбранное блюдо в соответствующую категорию
	selectedDishes[dish.category] = dish;

	// Обновляем отображение заказа
	updateOrderDisplay();
}

// Добавляем обработчик события после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
	// Добавляем обработчик клика на все блюда
	document.addEventListener('click', handleDishClick);

	// Инициализируем отображение заказа
	updateOrderDisplay();
});
