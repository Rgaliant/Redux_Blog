categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']
featured = [true, false]

10.times do
  App.create(
    title: Faker::App.name,
    body: Faker::Lorem.paragraph(4),
    author: Faker::App.author,
    category: categories.sample,
    featured: featured.sample
  )
end
