require 'sinatra'
require 'dotenv'
Dotenv.load


get '/' do
  erb :root
end

get '/new-page' do
  puts '______________'
  puts params.inspect
  puts '______________'
  erb :new_page
end

get '/people/:name' do
  puts '______________'
  puts params.inspect
  puts '______________'
  "Hello, #{params[:name]}. Your favorite color is #{params[:color]}"
end

get '/dotenv' do
  "test: #{ENV['MY_PASSWORD']}"
end

post '/send-email' do
  puts '______________'
  puts params.inspect
  puts '______________'
  if params[:thoughts]
    "Thanks for sending us your thoughts!"
  else
    "You didn't send us anything"
  end
end


# all blog posts
get 'blogs'
# create a new blog posts
post 'blogs'
# page where we view one blog posts
# a page where we update one blog posts
# an endpoint where we delete
