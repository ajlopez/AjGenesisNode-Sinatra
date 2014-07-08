
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
