<h1><%= @title %></h1>

<div class="row actions">
<a class="btn btn-info btn-sm" href="/${entity.name}">${entity.title} List</a>
<a class="btn btn-primary btn-sm" href="/${entity.name}/<%= @${entity.name}.id %>/edit">Edit ${entity.title}</a>
<a class="btn btn-danger btn-sm" href="/${entity.name}/<%= @${entity.name}.id %>/delete">Delete ${entity.title}</a>
</div>

<div class="row">
    <table class="table-bordered table-striped">
        <tr>
            <td>Id</td>
            <td><%= @${entity.name}.id %></td>
        </tr>
<# entity.properties.forEach(function (property) { 
    if (property.type == 'reference') { #>
        <tr>
            <td>${property.title}</td>
            <td><%= @${entity.name}.${property.name}.nil? ? '' : @${entity.name}.${property.name}.name %></td>
        </tr>
<#  } else { #>
        <tr>
            <td>${property.title}</td>
            <td><%= @${entity.name}.${property.name} %></td>
        </tr>
<#  }
  }); #>        
    </table>
</div>

