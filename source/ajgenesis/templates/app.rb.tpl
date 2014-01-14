# myapp.rb
require 'sinatra/base'

class MyApp < Sinatra::Base

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

    run! if app_file == $0
end