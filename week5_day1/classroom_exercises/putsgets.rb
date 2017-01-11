puts 'What is your name?'
#
# 'gets.chomp' cuts your input off at the end of your input
# simply using 'gets' will capture the entire line!
name = gets.chomp
#
puts "Hi, #{name}!"


# 1. Ask someone for their favorite color.
puts 'What is your favorite color'

# 2. Get their response
color = gets.chomp

# 3. And then tell them you like that color too!
puts "#{color}, that's my favorite color too!"


>
>=
==
!=
<=
<

a = 5

if a < 10
  puts "It's less than 10!"
elsif a == 10
  puts "It is equal to 10"
else
  puts "Its greater than 10!"
end

# compare to JS 
# if(a < 10){
#   console.log("It's less than 10!")
# } else if(condition) {
# }else {
#   console.log("...")
# }
