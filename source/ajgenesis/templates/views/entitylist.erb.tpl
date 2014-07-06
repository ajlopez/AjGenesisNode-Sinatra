<h1><%= @title %></h1>

<div class="row actions">
<a class="btn btn-primary btn-sm" href="/${entity.name}/new">New ${entity.title}</a>
</div>

<div class="row">
    <table class="table-striped table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>${entity.properties[0].title}</th>
            </tr>
        </thead>
        <tbody>
            <% @${entity.setname}.each do |${entity.name}| %>
            <tr>
            <td><a href="/${entity.name}/<%= ${entity.name}.id %>"><%= ${entity.name}.id %></a></td>
            <td><%= ${entity.name}.${entity.properties[0].name} %></td>
            </tr>
            <% end %>
        <tbody>
    </table>
</div>


