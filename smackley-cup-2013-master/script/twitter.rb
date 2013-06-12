require_relative "../config/boot"
require_relative "../config/environment"

require 'clockwork'
include Clockwork

handler do |job|
  puts "Running #{job}"
end

every(30.seconds, 'twitter pull') {
  `foreman run rake twitter:search`
}
