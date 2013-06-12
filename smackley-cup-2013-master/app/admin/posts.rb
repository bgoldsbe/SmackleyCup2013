ActiveAdmin.register Post do

  config.batch_actions = true
  filter :text

  states = {:new=>"Reset", :approved=>"Approve", :rejected=>"Reject"}

  states.map{ |k,v| k.to_s }.each do |state|
    scope state, :default => state == "new" do |posts|
      posts.where(:state => state)
    end
  end


  states.map{ |k,v| [k.to_s, v] }.each do |state|
    batch_action state[1] do |selection|
      Post.find(selection).each do |post|
        post.update_attributes!(:state => state[0])
      end
      redirect_to admin_posts_path, :notice => "you marked some posts #{state[0]}"
    end
  end

  form do |f|
    f.inputs "Details" do
      f.input :text
      f.input :state, :as => :select, :collection => ['new','approved','rejected']
    end
    f.actions
  end
  
end
