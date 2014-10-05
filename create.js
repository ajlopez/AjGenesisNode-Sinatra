
var path = require('path');
var generatetask = require('./source/ajgenesis/tasks/generate');

module.exports = function (model, args, ajgenesis, cb) {
    var dirname = args[0];
    
    var source = path.resolve(path.join(__dirname, 'source'));
    
    ajgenesis.copyDirectory(source, dirname, function (err, result) {
        if (err) {
            cb(err, null);
            return;
        }
    
        ajgenesis.fileTransform(path.join(__dirname, 'templates', 'project.json.tpl'), path.join(ajgenesis.getModelDirectory(dirname), 'project.json'), { name: dirname });

        var model = ajgenesis.loadModel(ajgenesis.getModelDirectory(dirname));
        model.builddir = dirname;
        
        generatetask(model, [], ajgenesis, cb);
    });
}
