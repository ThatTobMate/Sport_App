task purge_old_authentication_tokens: :environment do
  User.find_each do |user|
    puts 'purging'
    Tiddle.purge_old_tokens(user)
  end
end