
require 'dm-core'

class ${entity.descriptor}
    include DataMapper::Resource
    property :id, Serial
<# entity.properties.forEach(function (property) { #>
    property :${property.name}, String
<# }); #>
end
