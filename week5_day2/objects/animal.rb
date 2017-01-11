class Zoo

  def exhibits
    [Lion.new, Tiger.new, Owl.new]
  end

  def make_noises
    exhibits.each do |animal|
      puts "The #{animal.animal_type} says #{animal.make_noise}"
    end
  end
end


class Animal
  attr_accessor :legs

  def make_noise
    "growl"
  end

  def animal_type
    self.class
  end
end

# DRY - Don't repeat yourself.
class Lion < Animal
  def make_noise
    "roar"
  end

end

class Tiger < Animal
  def make_noise
    "roar"
  end

  def make_angry_noise
    make_noise * 10
  end
end

class Owl < Animal
  def make_noise
    "hoot"
  end
end

# function myFunction(something){
#   if(something == undefined){
#     return "error"
#   }
# }

def my_function(something)
  return "error" if something.nil?
  return "error" unless !something.nil?

end


# Write a recursive method to subtract one from a variable that is originally equal to 100 until the variable is equal to 0
@number = 100
def subtract
  puts @number
  @number -= 1
  subtract if @number > 0
end

subtract
