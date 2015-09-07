/**
 * Archive
 * @return {Archive}
 */
function Archive() {
  
  if( !(this instanceof Archive) )
    return new Archive()
  
  // this.directory = new Zip.CentralDirectory()
  this.records = []
  
}

/**
 * Zip Archive File
 * @type {Function}
 */
Archive.File = require( './file' )

/**
 * Archive prototype
 * @type {Object}
 */
Archive.prototype = {
  
  constructor: Archive,
  
  get isEmpty() {},
  
  add: function( file ) {},
  extract: function( file, dest ) {},
  replace: function( oldFile, newFile ) {},
  remove: function( file ) {},
  partition: function( partMap ) {},
  
}

// Exports
module.exports = Archive
