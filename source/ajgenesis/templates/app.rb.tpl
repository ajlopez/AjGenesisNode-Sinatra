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

<# for (var n in entities) { 
    var entity = entities[n];
#>

get '/${entity.name}' do
  @title = "${entity.title} List"
  @${entity.setname} = ${entity.classname}.all
  erb :${entity.name}list
end

get '/${entity.name}/new' do
  @title = "New ${entity.title}"
  erb :${entity.name}new
end

post '/${entity.name}/new' do
  ${entity.name} = ${entity.classname}.new
<# entity.properties.forEach(function (property) { #>
  ${entity.name}.${property.name} = params[:${property.name}]
<# }); #>
  ${entity.name}.save
  redirect to('/${entity.name}')
end

get '/${entity.name}/:id' do
  @title = "${entity.title}"
  @${entity.name} = ${entity.classname}.get(params[:id])
  erb :${entity.name}view
end

get '/${entity.name}/:id/edit' do
  @title = "Edit ${entity.title}"
  @${entity.name} = ${entity.classname}.get(params[:id])
  erb :${entity.name}edit
end

post '/${entity.name}/:id/edit' do
  ${entity.name} = ${entity.classname}.get(params[:id])
<# entity.properties.forEach(function (property) { #>
  ${entity.name}.${property.name} = params[:${property.name}]
<# }); #>
  ${entity.name}.save
  redirect to("/${entity.name}/#{${entity.name}.id}")
end

get '/${entity.name}/:id/delete' do
  ${entity.name} = ${entity.classname}.get(params[:id])
  ${entity.name}.destroy
  redirect to('/${entity.name}')
end

<# } #>
