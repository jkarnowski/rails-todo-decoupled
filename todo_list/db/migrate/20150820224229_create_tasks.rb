class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :body
      t.boolean :is_complete, default: false

      t.timestamps
    end
  end
end
