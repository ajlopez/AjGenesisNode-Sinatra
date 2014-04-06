<h1><%= @title %></h1>

<div class="row actions">
<a class="btn btn-info btn-sm" href="/${entity.name}">${entity.descriptor} List</a>
<a class="btn btn-primary btn-sm" href="/${entity.name}/<%= @${entity.name}.id %>/edit">Edit ${entity.descriptor}</a>
<a class="btn btn-danger btn-sm" href="/${entity.name}/<%= @${entity.name}.id %>/delete">Delete ${entity.descriptor}</a>
</div>

<div class="row">
    <table class="table-bordered table-striped">
        <tr>
            <td>Id</td>
            <td><%= @${entity.name}.id %></td>
        </tr>
<# entity.properties.forEach(function (property) { #>        
        <tr>
            <td>${property.descriptor}</td>
            <td><%= @${entity.name}.${property.name} %></td>
        </tr>
<# }); #>        
    </table>
</div>

