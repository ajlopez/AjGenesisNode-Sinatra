var createtask = require('../create'),
    path = require('path'),
    fs = require('fs'),
    ajgenesis = require('ajgenesis');

exports['create application'] = function (test) {
    test.async();

    var cwd = process.cwd();
    
    process.chdir('test');
    
    var dirname = 'myapp';
    
    createtask(null, [dirname], ajgenesis, function (err, result) {
        test.equal(err, null);
        
        test.ok(fs.existsSync(dirname));
        
        test.ok(fs.existsSync(path.join(dirname, 'package.json')));

        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'templates')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'tasks')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'libs')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'models')));
        
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'models', 'project.json')));
        
        removeDirSync(dirname);
        process.chdir(cwd);

        test.done();
    });
};

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

