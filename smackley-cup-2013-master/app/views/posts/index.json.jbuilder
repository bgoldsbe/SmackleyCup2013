json.array!(@posts) do |post|
  json.extract! post, :priority, :text, :author_id, :state
  json.url post_url(post, format: :json)
end