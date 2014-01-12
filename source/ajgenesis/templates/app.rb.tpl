# myapp.rb
require 'sinatra'

get '/' do
  @title = "${project.descriptor}"
  erb :index
end

<# for (var n in entities) { 
    var entity = entities[n];
#>

get '/${entity.name}' do
  @title = "${entity.setdescriptor}"
  erb :${entity.name}list
end
<# } #>

