gem 'sinatra', '1.3.6'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader'

get "/" do
  File.read(File.join('public', 'index.html'))
end
