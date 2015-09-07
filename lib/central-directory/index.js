var Zip = require( '../zip' )

/**
 * Central Directory
 * @return {CentralDirectory}
 */
function CentralDirectory() {
  
  if( !(this instanceof CentralDirectory) )
    return new CentralDirectory()
  
}

/**
 * Central Directory Header
 * @type {Function}
 */
CentralDirectory.Header = require( './header' )

CentralDirectory.EOD = function() {
  this.signature = 0x06054B50
  this.currentDisk = 0x0000
  this.directoryDisk = 0x0000
  this.entryCount = 0x0000
  this.directorySize = 0x00000000
  this.offset = 0x00000000
  this.commentLength = 0x0000
  this.comment = ''
}

CentralDirectory.EOD64 = function() {
  this.signature = 0x07064B50
  this.lastDisk = 0x00000000
  this.offset = 0x0000000000000000
  this.diskCount = 0x00000000
}

/**
 * CentralDirectory prototype
 * @type {Object}
 */
CentralDirectory.prototype = {
  
  constructor: CentralDirectory,
  
  get signature() {},
  
  sign: function() {},
  
}

// Exports
module.exports = CentralDirectory
