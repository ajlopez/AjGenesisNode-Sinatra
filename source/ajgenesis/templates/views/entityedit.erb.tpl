<h1><%= @title %></h1>

<div class="row actions">
<a class="btn btn-info btn-sm" href="/${entity.name}">${entity.title} List</a>
<a class="btn btn-info btn-sm" href="/${entity.name}/<%= @${entity.name}.id %>">View ${entity.title}</a>
</div>

<div class='row'>
<form method="post" role="form" class="form">

<# entity.properties.forEach(function (property) { #>
    <div class="form-group">
        <label for="${property.name}">${property.title}</label>
        <input type="text" class="form-control" name="${property.name}" id="${property.name}" value="<%= @${entity.name}.${property.name} %>">
    </div>
<# }); #>
    
    <input class="btn btn-primary" type="submit" value="Update" />
</form>
</div>


