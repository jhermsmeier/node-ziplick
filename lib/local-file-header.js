var Zip = require( './zip' )

/**
 * Local File Header
 * @return {LocalFileHeader}
 */
function LocalFileHeader() {
  
  if( !(this instanceof LocalFileHeader) )
    return new LocalFileHeader()
  
  this.signature = LocalFileHeader.SIGNATURE
  this.version = new Zip.Version()
  this.flags = 0x0000
  this.compressionMethod = 0x0000
  this.lastModTime = 0x0000
  this.lastModDate = 0x0000
  this.crc32 = 0x00000000
  this.compressedSize = 0x00000000
  this.size = 0x00000000
  this.filenameLength = 0x0000
  this.extraFieldLength = 0x0000
  
  this.filename = ''
  this.extraField = null
  
}

/**
 * [SIGNATURE description]
 * @type {Number}
 */
LocalFileHeader.SIGNATURE = 0x04034B50

/**
 * [parse description]
 * @param  {Buffer} buffer
 * @return {LocalFileHeader}
 */
LocalFileHeader.parse = function( buffer ) {
  return new LocalFileHeader().parse( buffer )
}

/**
 * LocalFileHeader prototype
 * @type {Object}
 */
LocalFileHeader.prototype = {
  
  constructor: LocalFileHeader,
  
  parse: function( buffer ) {
    
    if( !Buffer.isBuffer( buffer ) )
      throw new TypeError( 'Argument must be a buffer.' )
    
    if( buffer.readUInt16LE( 0 ) !== LocalFileHeader.SIGNATURE )
      throw new Error( 'Invalid signature ' + buffer.readUInt16LE( 0 ) )
    
    // TODO
    
  },
  
  toBuffer: function() {
    
    var buffer = new Buffer( 30 )
    
    buffer.fill( 0 )
    
    // TODO
    
    return Buffer.concat( buffer, filename, extra )
    
  },
  
}

// Exports
module.exports = LocalFileHeader
