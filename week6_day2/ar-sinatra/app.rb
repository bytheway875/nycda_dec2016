require "sinatra"
require 'sinatra/activerecord'
require './user'

set :database, { adapter: "sqlite3", database: "foo.sqlite3" }

get '/' do
  @users = User.all
  erb :index
end

post '/create-user' do
  user = User.create(params)
  if !user.nil?
    "Thanks, #{user.first_name}!"
  end
end

get '/users/:id' do
  params[:id]
  @user = User.find(params[:id])
  puts @user
  "This is the page for #{@user.first_name}."
end



# ActiveRecord methods
# SELECT * from users
#User.all

# INSERT
#User.create(attribute: value)

# SELECT * from users WHERE id=1
#User.find(1)

# SELECT * from users WHERE attribute=value
#User.where(attribute:value)

# SELECT * from users WHERE attribute=value LIMIT 1
#User.find_by(attribute: value)

# DELETE
#User.find(1).destroy!

# UPDATE
#User.find(1).update_attributes(attribute: value)
