class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :favorite_wine
      t.string :image_url

      t.timestamps
    end
  end
end
