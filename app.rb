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
	erb :index
end

get '/about' do
	erb :about
end