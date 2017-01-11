# # X Make a ruby program (make a new file)
# # Asks someone for a number
# # Then, create a conditional that sees if that number is
# # greater than, equal to, or less than 15
#
# puts "Guess a number."
#
# number_string = gets.chomp
# number = number_string.to_i
#
# puts "Now enter a password"
# password = gets.chomp
#
# # look for a password of "correct" to give a message if the number
# # does not equal 15
# if number < 15 && password == "correct"
#   puts "That number is less than 15"
# elsif number < 15
#   puts "I can't tell you anything because you don't the right password."
# elsif number == 15
#   puts "That number is equal to 15"
# elsif number > 15 && password == "correct"
#   puts "That number is greater than 15"
# else
#   puts "I can't tell you anything because you dont have the right password."
# end
#
# # "apple" "pear"   /  "orange" "grapefruit" "lemon"
#
# # if fav fruit is apple or pear, tell them one thing.
# # if fav fruit is o, g, l, tell them something else.
# # if its none of things, tell them you dont understand what they are saying.
#
# puts "Tell me your favorite fruit"
#
# fruit = gets.chomp
#
# if fruit == "pear" || fruit =="apple"
#   puts "Yum. Thats a good fruit"
# elsif fruit == "orange" || fruit == "grapefruit" || fruit == "lemon"
#   puts "Looks like you like citrus!"
# else
#   "Hmm... Ive never heard of that one"
# end
#
# # var myArray = ["element1", "element2", "element3"];
# #
# # myArray.forEach(function(element){
# #   console.log(element)
# # });
# #
# # for(i = 0; i < myArray.length; i++){
# #   console.log(myArray[i]);
# # }
# #
# # i = 0;
# # while(i < myArray.length){
# #   console.log(myArray[i])
# #   i++;
# # }
# for i in 0..4
#   puts "#{i}"
# end
# 0
# 1
# 2
# 3
# 4
my_array =  ["apple", "banana", "something"]


# 0..4 == [0,1,2,3,4]
for element in my_array
  puts "My element is a #{element}"
end

my_array.each do |element|
  puts "#{element}"
end

(0..4).each do |i|
  puts i
end

for i in 0..4
  puts i
end

i = 0
while i < 10
  puts "This number is less than 10!"
  i++
end

until i > 10
  puts "This number is less than 10!"
  i++
end



# function subtractTwo(n){
#   return n - 2;
# }

def subtract_two(n)
  // The last line of a function is its return value!
  n - 2
end

# If either arg is 0, we dont want to do any math on those numbers. We want to return out of the function early.
def divide(x, y)
  if x == 0 || y == 0
    return "We dont do math on zeros"
  end

  x / y
end
