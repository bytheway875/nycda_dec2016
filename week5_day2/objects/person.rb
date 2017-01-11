class Person
  attr_accessor :first_name, :last_name

  # the initialize function is run when you call
  # Object.new
  # You are "initializing" a new instance of the object.
  # You can use ordered parameters (first_name, last_name)
  # or named parameters(first_name:, last_name:)
  # In either case, all parameters are required unless you indicate otherwise!

  # Below is an example of an initialize function with named parameters. You pass the arguments in as key/value pairs.
  # Because you pass in the name of the argument as a key, you can add the arguments in any order.

  # Person.new(last_name: "Shannon", first_name: "Byrne")
  def initialize(first_name:, last_name:)
    self.first_name = first_name
    self.last_name = last_name
  end


  def introduce_yourself
    "Hi, my name is #{@first_name}"
  end

  def full_name
    @full_name = "#{@first_name} #{@last_name}"
  end

  def full_name=name
    name_array = name.split(" ")
    @first_name = name_array[0]
    @last_name = name_array[1]
  end

  getter
  def first_name
    @first_name
  end
  #
  # # setter
  # def first_name= name
  #   @first_name = name
  # end

  # def last_name
  #   @last_name
  # end
  #
  # def last_name=name
  #   @last_name =  name
  # end

end

# In this example, we use ordered parameters. The order of the
# parameters in the function definition defines the order that the
# parameters must be passed in when you create a new instance.
# ex Person.new("Shannon", "Byrne")
# def initialize(first_name, last_name)
#   @first_name = first_name
#   @last_name = last_name
# end

# def initialize(full_name)
#   self.full_name = full_name
# end

# @my_person = Person.new

# function Person(firstName, lastName){
#  firstName: firstName,
#  lastName: lastName
# }

# var myPerson = new Person
