class Car
  attr_accessor :make, :model, :mpg, :mileage, :color

  def initialize(make:, model:, mpg:nil , mileage: nil, color: nil)
    @make = make
    @model = model
    @mpg = mpg
    @mileage = mileage
    @color = color
  end

  def display_info
    puts "#{@make} #{@model}"
  end

  def drive(miles)
    @mileage += miles
  end

  def resale_value
    if @mileage > 100000
      "Not worth much."
    else
      "Might be worth something."
    end
  end
end
# BEFORE LUNCH ACTIVITY

# Let's expand on your car class a little bit and make it do some cool stuff.

# - Add a method that returns the make and model to the user.

# - Add a method named "drive" that takes one argument called "miles". Add the amount of miles passed in to the cars' "mileage"

# - Create a method called "resale_value". Create a conditional that uses the mileage to determine and return the resale value of the car. Feel free to just make up the dollar values. (ex. mileage > 100000 might return $500.)
