/**
 * Data Descriptor
 * Used to facilitate ZIP file streaming.
 * NOTE: This descriptor MUST exist if bit 3 of
 * the general purpose bit flag is set.
 * @return {DataDescriptor}
 */
function DataDescriptor() {
  
  if( !(this instanceof DataDescriptor) )
    return new DataDescriptor()
  
  this.signature = DataDescriptor.SIGNATURE
  
  // NOTE: For ZIP64(tm) format archives,
  // the compressed and uncompressed sizes are 8 bytes each.
  this.crc32 = 0x00000000
  this.compressedSize = 0x00000000
  this.size = 0x00000000
  
}

/**
 * Data Descriptor Signature
 * 
 * Although not originally assigned a signature,
 * this value has commonly been adopted as a
 * signature value for the data descriptor record.
 * 
 * NOTE: Implementers should be aware that ZIP files
 * may be encountered with or without this
 * signature marking data descriptors.
 * 
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
    
    // NOTE: When compressing files, compressed and uncompressed sizes
    // should be stored in ZIP64 format (as 8 byte values) when a
    // file's size exceeds 0xFFFFFFFF
    
    // NOTE: When writing ZIP files, implementors SHOULD include the
    // signature value marking the data descriptor record.
    
    // NOTE: When the Central Directory Encryption method is used,
    // the data descriptor record is not required, but MAY be used.
    // If present, and bit 3 of the general purpose bit field is set to
    // indicate its presence, the values in fields of the data descriptor
    // record MUST be set to binary zeros.
    
    // TODO
    
  },
  
}

// Exports
module.exports = DataDescriptor
