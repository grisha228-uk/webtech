// Скрипт для валидации комбо и показа уведомлений

// Функция для проверки состава заказа
function validateOrder(event) {
	// Получаем выбранные блюда
	const hasSoup = selectedDishes.soup !== null;
	const hasMain = selectedDishes.main !== null;
	const hasSalad = selectedDishes.salad !== null;
	const hasDrink = selectedDishes.drink !== null;
	const hasDessert = selectedDishes.dessert !== null;

	// Проверяем, выбрано ли хотя бы что-то
	if (!hasSoup && !hasMain && !hasSalad && !hasDrink && !hasDessert) {
		event.preventDefault();
		showNotification('nothing', 'Ничего не выбрано. Выберите блюда для заказа');
		return false;
	}

	// Проверяем валидные комбо
	// Комбо 1: Суп + Главное + Салат + Напиток (+ Десерт опционально)
	if (hasSoup && hasMain && hasSalad && hasDrink) {
		return true; // Валидное комбо
	}

	// Комбо 2: Суп + Главное + Напиток (+ Десерт опционально)
	if (hasSoup && hasMain && !hasSalad && hasDrink) {
		return true; // Валидное комбо
	}

	// Комбо 3: Суп + Салат + Напиток (+ Десерт опционально)
	if (hasSoup && !hasMain && hasSalad && hasDrink) {
		return true; // Валидное комбо
	}

	// Комбо 4: Главное + Салат + Напиток (+ Десерт опционально)
	if (!hasSoup && hasMain && hasSalad && hasDrink) {
		return true; // Валидное комбо
	}

	// Комбо 5: Главное + Напиток (+ Десерт опционально)
	if (!hasSoup && hasMain && !hasSalad && hasDrink) {
		return true; // Валидное комбо
	}

	// Если не подходит ни одно комбо, показываем соответствующее уведомление
	event.preventDefault();

	// Определяем, какое уведомление показать
	if (!hasDrink && (hasSoup || hasMain || hasSalad)) {
		// Выбраны блюда, но нет напитка
		showNotification('drink', 'Выберите напиток');
	} else if (hasSoup && !hasMain && !hasSalad) {
		// Выбран только суп (и возможно напиток/десерт)
		showNotification('main-salad', 'Выберите главное блюдо или салат/стартер');
	} else if (hasSalad && !hasSoup && !hasMain) {
		// Выбран только салат (и возможно напиток/десерт)
		showNotification('soup-main', 'Выберите суп или главное блюдо');
	} else if ((hasDrink || hasDessert) && !hasMain) {
		// Выбран только напиток/десерт без главного блюда
		showNotification('main', 'Выберите главное блюдо');
	} else {
		// Другие случаи - напиток отсутствует
		showNotification('drink', 'Выберите напиток');
	}

	return false;
}

// Функция для создания и показа уведомления
function showNotification(type, message) {
	// Удаляем предыдущее уведомление, если оно есть
	const existingNotification = document.querySelector('.notification-overlay');
	if (existingNotification) {
		existingNotification.remove();
	}

	// Определяем эмодзи в зависимости от типа уведомления
	let emoji = '👌';
	switch(type) {
		case 'nothing':
			emoji = '🤷';
			break;
		case 'drink':
			emoji = '🥤';
			break;
		case 'main-salad':
			emoji = '🍽️';
			break;
		case 'soup-main':
			emoji = '🍲';
			break;
		case 'main':
			emoji = '🍴';
			break;
	}

	// Создаем элементы уведомления
	const overlay = document.createElement('div');
	overlay.className = 'notification-overlay';

	const notification = document.createElement('div');
	notification.className = 'notification';

	const emojiDiv = document.createElement('div');
	emojiDiv.className = 'notification__emoji';
	emojiDiv.textContent = emoji;

	const text = document.createElement('p');
	text.className = 'notification__text';
	text.textContent = message;

	const button = document.createElement('button');
	button.className = 'notification__button';
	button.textContent = 'Окей 👌';
	button.onclick = closeNotification;

	// Собираем уведомление
	notification.appendChild(emojiDiv);
	notification.appendChild(text);
	notification.appendChild(button);
	overlay.appendChild(notification);

	// Добавляем на страницу
	document.body.appendChild(overlay);

	// Закрытие по клику на overlay
	overlay.addEventListener('click', function(e) {
		if (e.target === overlay) {
			closeNotification();
		}
	});
}

// Функция для закрытия уведомления
function closeNotification() {
	const overlay = document.querySelector('.notification-overlay');
	if (overlay) {
		overlay.remove();
	}
}

// Добавляем обработчик на форму
document.addEventListener('DOMContentLoaded', function() {
	const orderForm = document.querySelector('.order-form');
	if (orderForm) {
		orderForm.addEventListener('submit', validateOrder);
	}
});
