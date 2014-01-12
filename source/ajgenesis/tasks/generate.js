
var path = require('path'),
    models = require('../libs/models');

function generate(model, args, ajgenesis, cb) {
    models.completeModel(model);
    
    var publicdir = path.join('build', 'public');
    var viewsdir = path.join('build', 'views');
    
    ajgenesis.createDirectory('build');
    ajgenesis.createDirectory(publicdir);
    ajgenesis.createDirectory(viewsdir);

    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'app.rb.tpl'), path.join('build', 'app.rb'), model);
    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'bower.json.tpl'), path.join('build', 'bower.json'), model);

    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'layout.erb.tpl'), path.join('build', 'views', 'layout.erb'), model);
    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'layoutjumbo.erb.tpl'), path.join('build', 'views', 'layoutjumbo.erb'), model);
    
    model.entities.forEach(function (entity) {
        model.entity = entity;

        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entitylist.erb.tpl'), path.join('build', 'views', entity.name + 'list.erb'), model);

        delete model.entity;
    });
    
    cb(null, null);
}

module.exports = function (model, args, ajgenesis, cb) {
    var source = path.resolve(path.join(__dirname, '..', '..', 'site'));    
    ajgenesis.copyDirectory(source, 'build', function(err, result) {
        if (err) {
            cb(err, null);
            return;
        }
        
        generate(model, args, ajgenesis, cb);
    });
}
