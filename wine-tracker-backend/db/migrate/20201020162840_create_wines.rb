class CreateWines < ActiveRecord::Migration[6.0]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :varietal
      t.string :wine_type
      t.string :country
      t.string :image_url
      t.decimal  :price, precision: 5, scale: 2

      t.timestamps
    end
  end
end
