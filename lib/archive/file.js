/**
 * File
 * @return {File}
 */
function File() {
  
  if( !(this instanceof File) )
    return new File()
  
}

/**
 * File prototype
 * @type {Object}
 */
File.prototype = {
  
  constructor: File,
  
  get signatures() {},
  get crc32() {},
  
  compress: function() {},
  decompress: function() {},
  encrypt: function() {},
  sign: function() {},
  
}

// Exports
module.exports = File
