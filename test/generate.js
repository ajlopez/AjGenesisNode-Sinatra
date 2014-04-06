
var generatetask = require('../source/ajgenesis/tasks/generate'),
    path = require('path'),
    fs = require('fs'),
    ajgenesis = require('ajgenesis');

exports['generate controllers'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    var model = ajgenesis.loadModel('models');
    
    test.ok(model.entities);
    test.ok(Array.isArray(model.entities));
    test.equal(model.entities.length, 2);
    
    if (fs.existsSync('build') && !fs.existsSync(path.join('build', 'development.db')))
        removeDirSync('build');
    
    generatetask(model, [], ajgenesis, function (err, result) {
        test.equal(err, null);
        test.equal(result, null);
        
        test.ok(fs.existsSync('build'));
        
        test.ok(fs.existsSync(path.join('build', 'app.rb')));

        test.ok(fs.existsSync(path.join('build', 'public')));
        
        test.ok(fs.existsSync(path.join('build', 'views')));
        test.ok(fs.existsSync(path.join('build', 'views', 'index.erb')));

        test.ok(fs.existsSync(path.join('build', 'views', 'customerlist.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'customernew.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'customerview.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'customeredit.erb')));

        test.ok(fs.existsSync(path.join('build', 'views', 'supplierlist.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'suppliernew.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'supplierview.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'supplieredit.erb')));

        test.ok(fs.existsSync(path.join('build', 'entities')));
        test.ok(fs.existsSync(path.join('build', 'entities', 'customer.rb')));
        test.ok(fs.existsSync(path.join('build', 'entities', 'supplier.rb')));
        
        process.chdir(cwd);
        
        test.done();
    });    
}

function removeDirSync(dirname) {
    var filenames = fs.readdirSync(dirname);
    
    filenames.forEach(function (filename) {
        filename = path.join(dirname, filename);
        
        if (isDirectory(filename))
            removeDirSync(filename);
        else
            removeFileSync(filename);
    });
    
    fs.rmdirSync(dirname);
}

function removeFileSync(filename) {
    fs.unlinkSync(filename);
}

function isDirectory(filename)
{
    try {
        var stats = fs.lstatSync(filename);
        return stats.isDirectory();
    }
    catch (err)
    {
        return false;
    }
}

