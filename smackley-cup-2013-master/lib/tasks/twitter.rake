namespace :twitter do
  task :search => :environment do 
    @search = JSON.parse(open("http://search.twitter.com/search.json?q=#{ENV['TWITTER_SEARCH']}").read)['results']
    @search.each do |t|
      @author = Author.find_or_create_by_name(t['from_user'])
      @author.save
      @post = Post.find_or_create_by_text(t['text'])
      @post.author_id = @author.id
      @post.save
    end
  end
end
