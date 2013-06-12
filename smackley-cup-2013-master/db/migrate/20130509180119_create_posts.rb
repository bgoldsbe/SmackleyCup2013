class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :priority
      t.text :text
      t.integer :author_id
      t.string :state

      t.timestamps
    end
  end
end
