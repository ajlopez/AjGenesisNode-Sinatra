
var utils = require('./utils');

function completeProperty(property) {
    if (!property)
        return;
        
    if (property.name && !property.title)
        property.title = utils.capitalize(property.name);
        
    if (!property.type)
        property.type = 'text';
}

function completeEntity(entity) {
    if (!entity)
        return;
        
    if (entity.name && !entity.title)
        entity.title = utils.capitalize(entity.name);

    if (entity.name && !entity.classname)
        entity.classname = utils.capitalize(entity.name);
        
    if (entity.name && !entity.setname)
        entity.setname = utils.pluralize(entity.name);
        
    if (entity.title && !entity.settitle)
        entity.settitle = utils.pluralize(entity.title);
        
    if (entity.properties)
        entity.properties.forEach(function (property) {
            completeProperty(property);
        });
}

function completeModel(model) {
    if (!model)
        return;
        
    if (model.name && !model.title)
        model.title = utils.capitalize(model.name);
        
    if (!model.builddir)
        model.builddir = '.';
        
    if (model.project && model.project.name && !model.project.title)
        model.project.title = utils.capitalize(model.project.name);
        
    if (!model.entities)
        model.entities = [];
        
    if (model.entities && Array.isArray(model.entities))
        model.entities.forEach(function (entity) {
            completeEntity(entity);
        });
}

module.exports = {
    completeModel: completeModel
};