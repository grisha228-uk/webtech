// Скрипт для фильтрации блюд

// Функция для фильтрации блюд в определенной категории
function filterDishes(category, kind) {
	const categorySection = document.querySelector(`.dishes[data-category="${category}"]`);
	if (!categorySection) return;

	const dishElements = categorySection.querySelectorAll('.dish');

	dishElements.forEach(dish => {
		const dishKind = dish.getAttribute('data-kind');

		if (kind === null) {
			// Показать все блюда
			dish.style.display = 'flex';
		} else if (dishKind === kind) {
			// Показать только блюда с соответствующим kind
			dish.style.display = 'flex';
		} else {
			// Скрыть остальные блюда
			dish.style.display = 'none';
		}
	});
}

// Функция для обработки клика на кнопку фильтра
function handleFilterClick(event) {
	const filterButton = event.target.closest('.filter-button');
	if (!filterButton) return;

	// Получаем родительскую секцию с категорией
	const categorySection = filterButton.closest('.dishes');
	if (!categorySection) return;

	const category = categorySection.getAttribute('data-category');
	const kind = filterButton.getAttribute('data-kind');

	// Получаем все кнопки фильтров в этой категории
	const allFilters = categorySection.querySelectorAll('.filter-button');

	// Проверяем, была ли кнопка уже активна
	const wasActive = filterButton.classList.contains('active');

	// Убираем класс active у всех фильтров в этой категории
	allFilters.forEach(btn => btn.classList.remove('active'));

	if (wasActive) {
		// Если кнопка была активна - показываем все блюда
		filterDishes(category, null);
	} else {
		// Добавляем класс active к выбранной кнопке
		filterButton.classList.add('active');
		// Фильтруем блюда
		filterDishes(category, kind);
	}
}

// Добавляем обработчик событий после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
	// Добавляем обработчик клика на все кнопки фильтров
	document.addEventListener('click', handleFilterClick);
});
