class CreateRatings < ActiveRecord::Migration[5.2]

  def change 
    create_table :ratings do |t|
      t.integer :stars
      t.integer :user_id
      t.integer :franchise_id
    end
  end

end