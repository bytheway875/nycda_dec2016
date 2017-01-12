require 'sinatra'

# root path
get '/' do
  erb :index
end

get '/new-path' do
  erb :new_path
end

get '/:name' do
  @name = params[:name].capitalize
  @background_color = "red";
  erb :name
end

# get '/aaron' do
#   "This is Aaron's page"
# end
#
# get '/mandy' do
#   "This is Mandy's page"
# end
