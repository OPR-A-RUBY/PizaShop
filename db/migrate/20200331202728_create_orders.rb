class CreateOrders < ActiveRecord::Migration[6.0]
  def change
  	create_table :orders do |t|
  		t.text :cl_name
  		t.text :cl_phone
  		t.text :cl_adress
  		t.text :cl_string

  		t.timestamps
  	end

    Order.create({
    	:cl_name => 'Opreman', 
    	:cl_phone => '+7 987-654-32-10', 
    	:cl_adress => 'ул.Ленина д.4, кв.2', 
    	:cl_string => 'product_2=2,'
    	})
  end
end
