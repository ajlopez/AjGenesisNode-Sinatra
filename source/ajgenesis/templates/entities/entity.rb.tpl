
require 'dm-core'

class ${entity.classname}
    include DataMapper::Resource
    property :id, Serial
<# entity.properties.forEach(function (property) { 
    if (property.type == 'reference') { #>
    belongs_to :${property.name}, '${property.reference.classname}'
<# } else { #>    
    property :${property.name}, String
<# }
  }); #>
end
