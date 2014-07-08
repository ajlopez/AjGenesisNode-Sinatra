# myapp.rb

require 'sinatra'
require 'sinatra/reloader' if development?
require 'data_mapper'

require 'sinatra/base'

<# for (var n in entities) { #>
require './entities/${entities[n].name}'
<# } #>

DataMapper.finalize

DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/development.db")

<# for (var n in entities) { #>
${entities[n].title}.auto_upgrade!
<# } #>

get '/' do
  @title = "${project.title}"
  erb :index
end

get '/about' do
  @title = "About this Project"
  erb :about
end

<# for (var n in entities) { #>
require "./controllers/${entities[n].name}"
<# } #>
