<h1><%= @title %></h1>

<div class="row actions">
<a class="btn btn-info btn-sm" href="/${entity.name}">${entity.title} List</a>
</div>

<div class='row'>
<form method="post" role="form" class="form">

<# entity.properties.forEach(function (property) {
    if (property.type == 'text') { #>
    <div class="form-group">
        <label for="${property.name}">${property.title}</label>
        <textarea class="form-control" name="${property.name}" id="${property.name}"></textarea>
    </div>        
<#
    }
    else { #>
    <div class="form-group">
        <label for="${property.name}">${property.title}</label>
        <input type="text" class="form-control" name="${property.name}" id="${property.name}">
    </div>
<#  }    
}); #>
    
    <input class="btn btn-primary" type="submit" value="Create" />
</form>
</div>
