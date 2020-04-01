
function something()
{
  // При каждом обращении к something() создаётся новая переменная x
  //  Эта переменная доступна только внутри этого метода

  // Получаем значение  по ключу 'bbb' из хеша localStorage и записываем её в переменную x 
  var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

  // Увеличиваем переменную x на 1. Без умножения получается добавление 1 к строке x 
  x = x * 1 + 1;    // x += 1

  // Отправить значение x в хеш localStorege с ключём 'bbb'  {'bbb' => x}
  window.localStorage.setItem('bbb', x);  // hh['bbb'] = x

  // Выводим окно с хначением переменной x
  alert(x);

  // Забываем переменную x

  // enumerate window.localStorage site:stackoverflow.com
}

function add_to_cart(id)
{
  var key = 'product_' + id;                  // Создаём переменную КЛЮЧЬ с id (product_2)
  var x = window.localStorage.getItem(key); // Считываем из хеша value по КЛЮЧУ
  x = x * 1 + 1;                // Увеличиваем значение на единицу
  window.localStorage.setItem(key, x);    // Записываем новое значение в хеш

  // Вывод количества товаров в корзине
  // alert('Количество питц в Вашей корзине ' + cart_get_number_of_item());
  update_orders_input();  // обновление строки со списком заказанных товаров.
  update_orders_button(); // обновление количества на кнопке "Корзина"
}

function update_orders_button()
{
  var text = 'Корзина (' + cart_get_number_of_item() + ')';
  $('#orders_button').val(text);
}

function update_orders_input()
{   
  // Здесь мы хотим обновлять список заказанных товаров ( типа 'Product_1=2,Product_4=1,')
  var orders = cart_get_orders(); // Получаем строку с заказанными товарами из хеша
  // на стороне пользователя localStorage с помощью функции ниже.

  // Далее мы обращаемся к полю с id="orders_input" для вывода в него переменной orders
  // т.е. списка заказанного. Знак # указывает, что мы обращаемся к полю по id
  $('#orders_input').val(orders);
}

function cart_get_number_of_item()
{
  // Команды скрипта работают в консоле браузера, т.е. их можно там оттестить.
  var cnt = 0;

  for ( i = 0;  i < window.localStorage.length; i++) 
  {
    // Получаем ключ текущего элемента в хеше (записываем его в key
    var key = window.localStorage.key(i);

    // Получаем значение из хеша по ключу (записываем это значение в value)
    var value = window.localStorage.getItem(key);  // Типа value = hh[key]

    // Если ключ key начинается с 'product_' или дословно: если позиция (index Of) с которой
    // начинается строка 'product_' - это нулевая позикия в текущем ключе key, то ...
    if(key.indexOf('product_') == 0)
    {
      //cnt++;  // ... увеличиваем cnt на 1  (плюс один вид товара)
      cnt = cnt + value*1;
    }     
  }
  return cnt;
}

function cart_get_orders()
{
  // Команды скрипта работают в консоле браузера, т.е. их можно там оттестить.
  var orders = '';

  for ( i = 0;  i < window.localStorage.length; i++) 
  {
    // Получаем ключ текущего элемента в хеше (записываем его в key
    var key = window.localStorage.key(i);

    // Получаем значение из хеша по ключу (записываем это значение в value)
    var value = window.localStorage.getItem(key);  // это типа: value = hh[key]

    // Если ключ key начинается с 'product_' или дословно: если позиция (index Of) с которой
    // начинается строка 'product_' - это нулевая позиция в текущем ключе key, то ...
    if(key.indexOf('product_') == 0)
    {
      //cnt++;  // ... увеличиваем cnt на 1  (плюс один вид товара)
      orders = orders + key + '=' + value + ',';
    }     
  }
  return orders;
}

function cancel_order()
{
  alert('aaa');
  return false;
}

