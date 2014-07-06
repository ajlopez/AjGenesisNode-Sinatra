
var models = require('../source/ajgenesis/libs/models');

exports['Complete model'] = function (test) {
    var model = { project: { name: 'project' } };
    
    models.completeModel(model);
    
    test.equal(model.project.title, 'Project');
    test.equal(model.builddir, '.');
    test.ok(model.entities);
    test.equal(model.entities.length, 0);
};

exports['Complete model with builddir'] = function (test) {
    var model = { project: { name: 'project' }, builddir: 'build' };
    
    models.completeModel(model);
    
    test.equal(model.project.title, 'Project');
    test.equal(model.builddir, 'build');
};

exports['Complete model with entities and properties'] = function (test) {
    var model = { 
        name: 'project',
        
        entities: [
            { 
                name: 'customer',
                properties: [
                    {
                        name: 'name'
                    },
                    {
                        name: 'address'
                    }
                ]
            },
            { 
                name: 'supplier'
            }
        ]
    };
    
    models.completeModel(model);
    
    test.equal(model.title, 'Project');

    test.equal(model.entities[0].setname, 'customers');
    test.equal(model.entities[0].title, 'Customer');
    test.equal(model.entities[0].classname, 'Customer');
    test.equal(model.entities[0].settitle, 'Customers');
    
    test.equal(model.entities[1].setname, 'suppliers');
    test.equal(model.entities[1].title, 'Supplier');
    test.equal(model.entities[1].classname, 'Supplier');
    test.equal(model.entities[1].settitle, 'Suppliers');
    
    test.equal(model.entities[0].properties[0].title, 'Name');
    test.equal(model.entities[0].properties[0].type, 'text');
    test.equal(model.entities[0].properties[1].title, 'Address');
    test.equal(model.entities[0].properties[1].type, 'text');
};

