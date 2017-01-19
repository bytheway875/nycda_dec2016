class Book < ActiveRecord::Base

  #class Book corresponds to our books table in the database.

  # SELECT * FROM books
  # Book.all

  # SELECT * FROM books WHERE id=1 LIMIT 1
  # Book.find(1)

  # SELECT * FROM books where title="Something" LIMIT 1
  # Book.find_by(title: "Something")

  # SELECT * FROM books WHERE year_published=1988
  # Book.where(year_published: 1988)

  # INSERT INTO books (attributes) VALUES (values)
  # Book.create(year_published: 1988, title: 'Something', author: 'Someone')
  # Book.new(year_published: 1988, title: 'Something', author: 'Someone').save

  # DELETE
  # Book.find(1).destroy!
end
