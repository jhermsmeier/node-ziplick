/**
 * Version
 * @return {Version}
 */
function Version( major, minor, vendor ) {
  
  if( !(this instanceof Version) )
    return new Version( major, minor, vendor )
  
  this.major = major || 1
  this.minor = minor || 0
  this.vendor = vendor || 255
  
}

/**
 * Version prototype
 * @type {Object}
 */
Version.prototype = {
  
  constructor: Version,
  
  parse: function( buffer ) {
    
    this.major = buffer[0] / 10 >> 0
    this.minor = buffer[0] % 10
    
    this.vendor = buffer[1]
    
  },
  
  toNumber: function() {
    return this.major * 10 + this.minor
  },
  
  toString: function() {
    return this.major + '.' + this.minor
  },
  
  toBuffer: function() {
    
    var buffer = new Buffer( 2 )
    
    buffer[0] = this.major * 10 + this.minor
    buffer[1] = this.vendor
    
    return buffer
    
  },
  
}

// Exports
module.exports = Version
