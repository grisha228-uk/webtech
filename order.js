// Скрипт для выбора блюд и подсчета стоимости

// Хранилище выбранных блюд
const selectedDishes = {
	soup: null,
	main: null,
	drink: null,
	salad: null,
	dessert: null
};

// Функция для обновления отображения заказа
function updateOrderDisplay() {
	const orderDisplay = document.getElementById('order-display');

	// Проверяем, выбрано ли хотя бы одно блюдо
	const hasSelection = selectedDishes.soup || selectedDishes.main || selectedDishes.drink || selectedDishes.salad || selectedDishes.dessert;

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

	// Салат/стартер
	if (selectedDishes.salad) {
		html += `
			<div class="order-item">
				<p class="order-item__category">Салат/стартер</p>
				<p class="order-item__name">${selectedDishes.salad.name} ${selectedDishes.salad.price}₽</p>
			</div>
		`;
	} else {
		html += `
			<div class="order-item">
				<p class="order-item__category">Салат/стартер</p>
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

	// Десерт
	if (selectedDishes.dessert) {
		html += `
			<div class="order-item">
				<p class="order-item__category">Десерт</p>
				<p class="order-item__name">${selectedDishes.dessert.name} ${selectedDishes.dessert.price}₽</p>
			</div>
		`;
	} else {
		html += `
			<div class="order-item">
				<p class="order-item__category">Десерт</p>
				<p class="order-item__empty">Десерт не выбран</p>
			</div>
		`;
	}

	// Стоимость заказа
	const totalPrice =
		(selectedDishes.soup?.price || 0) +
		(selectedDishes.main?.price || 0) +
		(selectedDishes.drink?.price || 0) +
		(selectedDishes.salad?.price || 0) +
		(selectedDishes.dessert?.price || 0);

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

// Функция для сброса заказа
function resetOrder() {
	selectedDishes.soup = null;
	selectedDishes.main = null;
	selectedDishes.drink = null;
	selectedDishes.salad = null;
	selectedDishes.dessert = null;
	updateOrderDisplay();
}

// Добавляем обработчик события после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
	// Добавляем обработчик клика на все блюда
	document.addEventListener('click', handleDishClick);

	// Добавляем обработчик на кнопку сброса формы
	const orderForm = document.querySelector('.order-form');
	if (orderForm) {
		orderForm.addEventListener('reset', function() {
			resetOrder();
		});
	}

	// Инициализируем отображение заказа
	updateOrderDisplay();
});
