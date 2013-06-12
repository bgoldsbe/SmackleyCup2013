class Post < ActiveRecord::Base
  
  attr_accessible :state, :priority, :text, :author_id
  
  belongs_to :author
  
  scope :approved, where(:state => "approved")

  profanity_filter! :text, :method => 'stars'
  
end
