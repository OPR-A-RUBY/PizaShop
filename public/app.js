
function something()
{
	// При каждом обращении к something() создаётся новая переменная x
	//  Эта переменная доступна только внутри этого метода

	// Получаем значение  по ключу 'aaa' из хеша localStorage и записываем её в переменную x 
	var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

	// Увеличиваем переменную x на 1. Без умножения получается добавление 1 к строке x 
	x = x * 1 + 1;    // x += 1

	// Отправить значение x в хеш localStorege с ключём 'aaa'  {'aaa' => x}
	window.localStorage.setItem('bbb', x);  // hh['bbb'] = x

	// Выводим окно с хначением переменной x
	alert(x);

	// Забываем переменную x

	// enumerate window.localStorage site:stackoverflow.com
}

function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
}