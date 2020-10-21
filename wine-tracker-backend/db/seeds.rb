# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Review.destroy_all
Wine.destroy_all

jonelle_image = "https://previews.dropbox.com/p/thumb/AA8fOHv_KLEE1SS8cE4K0WhApU1fvXcuexvrPXJlZOUe2rivg5haLJr2jVHP4L5aYGz-NBD1i2TIYYhKzUaoQxVHU_ExWxnnsTqNWQaXnHjk_NuOF-5tfE4PL-pVKl7PwyFxrfwj7AYN8TyCKMDtYZqbhbxktClnycTufa5Pv291mb6ffUR0Uiku3VAkUrsZU5j_prxPYjLckX8_-nBWXyU76L9rxLURFn7jkxvpqBWgjKY5d09dQZSczyCk51XdOZaSNdNxknA84GJ0TZI0BB_ePv-nrTjNsIl7tpZzlNbUfZ2bi51mmDKdNrGuAoiQY0FTCq-w0tM3QOXBKLK-Pr_P8l6f5HuT-G5tj_xgeGYvTQ/p.jpeg?fv_content=true&size_mode=5"
jonelle = User.create(name: "Jonelle Noelani", favorite_wine: "Champagne", image_url: jonelle_image)

buena_vista = "https://images.vivino.com/thumbs/f7tR4MRISRWWdrXFoGzG_w_pb_x600.png"
cabernet = Wine.create(name: "Buena Vista", varietal: "Cabernet Sauvignon", wine_type: "red", country: "USA", price: 50.00, image_url: buena_vista)

ken_wright = "https://images.vivino.com/thumbs/Z5_ArJJxTEagV2s89FJhUA_pb_x600.png"
pinot = Wine.create(name: "Ken Wright", varietal: "Pinot Noir", wine_type: "red", country: "USA", price: 44.99, image_url: ken_wright)

dom_fouassier = "https://images.vivino.com/thumbs/Sy5BGdVbRYKMkcDCyhR1Tg_pb_x600.png"
sb = Wine.create(name: "Domaine Fouassier", varietal: "Sauvignon Blanc", wine_type: "white", country: "France", price: 30.00, image_url: dom_fouassier)

thanisch = "https://images.vivino.com/thumbs/QqCPG5BWRQ-h3KwFNQEhjw_pb_x600.png"
riesling = Wine.create(name: "Dr. H. Thanisch", varietal: "Riesling", wine_type: "white", country: "Germany", price: 80.00, image_url: thanisch)

billecart = "https://images.vivino.com/thumbs/QtuMcrwFTbW3fdPD0bbqug_pb_x600.png"
champagne = Wine.create(name: "Billecart-Salmon", varietal: "blend", wine_type: "sparkling", country: "France", price: 134.99, image_url: billecart)

giusti = "https://images.vivino.com/thumbs/Nu_kzSKyRYWCxjev2GidAQ_pb_x600.png"
prosecco = Wine.create(name: "Giusti", varietal: "Glera", wine_type: "sparkling", country: "France", price: 25.00, image_url: giusti)

Review.create(user_id: jonelle.id, wine_id: cabernet.id, rating: 4, review: "Bold and Opulent!  Black cherry, graphite and spice.  Very lengthy finish.")
Review.create(user_id: jonelle.id, wine_id: pinot.id, rating: 5, review: "Another awesome wine from the master!  A bit brighter and more energetic than the rest of the lineup.  Layers of red and blue fruits, dried flowers, cola and exotic spice.")
Review.create(user_id: jonelle.id, wine_id: sb.id, rating: 4, review: "Pure and well structured with nicely balanced acidity.")
Review.create(user_id: jonelle.id, wine_id: riesling.id, rating: 5, review: "Super concentrated apricot, peach, honey and lychee.  Medium sweet but lifted by the high acidity.  A zinger!")
Review.create(user_id: jonelle.id, wine_id: champagne.id, rating: 5, review: "Elegant and consistent!  Peach and pear mingled with brioche.  Would not turn down.")
Review.create(user_id: jonelle.id, wine_id: prosecco.id, rating: 4, review: "Light, fruity apple and lime.  Refreshing fizz.  Cheers!")