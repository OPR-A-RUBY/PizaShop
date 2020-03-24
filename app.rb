#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base
end
# .string .text .integer .float .decimal .datetime .timestamp .time .date .binary .boolean

get '/' do
	@product = Product.all 
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
	@order = params[:order]
	@product = Product.all
	puts @order
	@hh = {}
	n = ""
	key = ""
	value = ""
	@order.each_char do |item|
		if item == ","
			# Делим переменную на key и value
			puts n
			i = 0
			s = n.size
			n.each_char do |item_i|
				i = i + 1
				if item_i == "="
					key = n[8,i-1-8]
					value = n[i,s]
					i = 0
					puts key
					puts value
				end		
			end
			# Пишем в хеш данные по товару
			@hh[key] = value.to_i
			# Обнуляем переменные для нового товара
			n = ""
		else
			n = n + item
		end				
	end
	puts @hh
	erb :cart
end