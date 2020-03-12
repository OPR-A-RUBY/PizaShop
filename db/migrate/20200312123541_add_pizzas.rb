class AddPizzas < ActiveRecord::Migration[6.0]
  	def change

  		Product.create({ 
  			:title => 'Сырная', 
  			:discription => ' Лучшая питца для завтрака. Очень сытная и любимая многими гурманами.', 
  			:price => 300, 
  			:size => 40, 
  			:is_spicy => false,	
  			:is_veg => false, 
  			:is_best_offer => false, 
  			:path_of_image => '/images/pizza_cheese.jpg' 
  			})

  		Product.create({
  			:title => 'Классическая', 
  			:discription => ' Если теряетесь какую питцу выбрать, то этот вариант для Вас.', 
  			:price => 350, 
  			:size => 40, 
  			:is_spicy => false,	
  			:is_veg => false, 
  			:is_best_offer => false, 
  			:path_of_image => '/images/pizza_classic.jpg' 
  			})

  		Product.create({
  			:title => 'Гавайская', 
  			:discription => ' Название говорит само за себя. Экзотические овочи в составе этой питцы Вас удивят новыми вкусами.', 
  			:price => 300, 
  			:size => 40, 
  			:is_spicy => false,	
  			:is_veg => true, 
  			:is_best_offer => false, 
  			:path_of_image => '/images/hawaiian.jpg' 
  			})

  		Product.create({ 
  			:title => 'Малышка', 
  			:discription => ' Маленькую питцу делают для маленьких детей.', 
  			:price => 150, 
  			:size => 25, 
  			:is_spicy => false,	
  			:is_veg => false, 
  			:is_best_offer => true, 
  			:path_of_image => '/images/pizza_litle.jpg' 
  			})

  		Product.create({ 
  			:title => 'Перчик', 
  			:discription => ' Острая питца для любителей поострее. Халапенью тому подтверждение.', 
  			:price => 300, 
  			:size => 40, 
  			:is_spicy => true,	
  			:is_veg => false, 
  			:is_best_offer => false, 
  			:path_of_image => '/images/pizza_peper.jpg' 
  			})

  		Product.create({
  			:title => 'Пеперони', 
  			:discription => ' Классическая питца с колбасой Peperoni. Те, кто пробовал, оценили её по достоинстиву.', 
  			:price => 400, 
  			:size => 40, 
  			:is_spicy => true,	
  			:is_veg => false, 
  			:is_best_offer => false, 
  			:path_of_image => '/images/pizza_peperoni.jpg' 
  			})
  end
end
