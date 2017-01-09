# seventeen = 12 + 5
# seventeen = 11 + 6

@pets_name = "Hudson"

# puts 12/5
# puts 12 % 5
puts 12.0/5

# You can use single quotes or double quotes for a string!
puts 'Shannon'
puts "Shannon"

# String interpolation only works with double quotes
puts "#{@pets_name}"

new_array = [1,2,3,4,5]
puts new_array[4]
puts new_array.length

me = { name: 'Shannon', favorite_color: 'blue' }
me2 = { :name => 'Shannon', :favorite_color => 'blue'}
me3 = { 'name' => 'Shannon', 'favorite_color' => 'shannon'}

puts me
puts me2

puts me[:name]
puts me3['name']



holidays = ['xmas', 'halloween']
holidays_and_dates = { holidays[0] => 'dec 25', holidays[1] => 'oct 31' }

puts holidays_and_dates
puts holidays_and_dates[:xmas] # this symbol does not exist!
puts holidays_and_dates["xmas"]

puts holidays_and_dates[holidays[0]]
