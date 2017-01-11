# # # complete the student/grade exercise we did in Javascript, but this time do it in Ruby!
# #
# amanda = { name: "Amanda", grade: 84 }
# katie = { name: "Katie", grade: 78 }
# kevin = { name: "Kevin", grade: 46 }
# luke = { name: "Luke", grade: 96 }
# students = [amanda, katie, kevin, luke]
# # puts "What's your grade?"
# # grade = gets.chomp
# # grade = grade.to_i
# students.each do |student|
#   grade = student[:grade]
#   name = student[:name]
#   puts "#{name}: #{get_letter_grade(grade)}"
# end

@student_names = ["Amanda", "Nicole", "Kevin"]
@student_grades = ["100", "19", "78"]
@zipped_array =  @student_names.zip(@student_grades)

# student_names.each_with_index do |element, index|
#   grade = get_letter_grade(student_grades[index])
#   puts "#{element}: #{grade}"
# end
#
# def get_letter_grade(grade)
#   grade = grade.to_i
#   if grade >= 90
#     "A"
#   elsif grade >= 80
#     "B"
#   elsif grade >= 70
#     "C"
#   elsif grade >= 60
#     "D"
#   else
#     "F"
#   end
# end


food_prices = { pizza: 15, burger: 2, soda: 3 }
[[:pizza, 15], [:burger, 2]]

@array = []
food_prices.each do |key, value|
  @array << [key.to_s, value]
end

@my_result =  food_prices.keys.map(&:to_s).zip(food_prices.values)
