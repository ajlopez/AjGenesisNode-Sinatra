
var path = require('path'),
    models = require('../libs/models');

function generate(model, args, ajgenesis, cb) {
    models.completeModel(model);
    
    var builddir = model.builddir;
    var publicdir = path.join(builddir, 'public');
    var viewsdir = path.join(builddir, 'views');
    var controllersdir = path.join(builddir, 'controllers');
    var entitiesdir = path.join(builddir, 'entities');
    
    ajgenesis.createDirectory(builddir);
    ajgenesis.createDirectory(publicdir);
    ajgenesis.createDirectory(viewsdir);
    ajgenesis.createDirectory(controllersdir);
    ajgenesis.createDirectory(entitiesdir);

    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'app.rb.tpl'), path.join(builddir, 'app.rb'), model);

    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'layout.erb.tpl'), path.join(viewsdir, 'layout.erb'), model);
    
    model.entities.forEach(function (entity) {
        model.entity = entity;

        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entitylist.erb.tpl'), path.join(viewsdir, entity.name + 'list.erb'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entitynew.erb.tpl'), path.join(viewsdir, entity.name + 'new.erb'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entityview.erb.tpl'), path.join(viewsdir, entity.name + 'view.erb'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entityedit.erb.tpl'), path.join(viewsdir, entity.name + 'edit.erb'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'entities', 'entity.rb.tpl'), path.join(entitiesdir, entity.name + '.rb'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'controllers', 'entity.rb.tpl'), path.join(controllersdir, entity.name + '.rb'), model);

        delete model.entity;
    });
    
    cb(null, null);
}

module.exports = function (model, args, ajgenesis, cb) {
    generate(model, args, ajgenesis, cb);
}
