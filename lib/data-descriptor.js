/**
 * Data Descriptor
 * Used to facilitate ZIP file streaming.  
 * @return {DataDescriptor}
 */
function DataDescriptor() {
  
  if( !(this instanceof DataDescriptor) )
    return new DataDescriptor()
  
  this.signature = DataDescriptor.SIGNATURE
  this.crc32 = 0x00000000
  this.compressedSize = 0x00000000
  this.size = 0x00000000
  
}

/**
 * Although not originally assigned a signature,
 * this value has commonly been adopted as a
 * signature value for the data descriptor record.
 * @type {Number}
 */
DataDescriptor.SIGNATURE = 0x08074B50

/**
 * DataDescriptor prototype
 * @type {Object}
 */
DataDescriptor.prototype = {
  
  constructor: DataDescriptor,
  
  parse: function( buffer ) {
    // TODO
  },
  
  toBuffer: function() {
    // TODO
  },
  
}

// Exports
module.exports = DataDescriptor
