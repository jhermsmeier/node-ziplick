/**
 * Central Directory Header
 * @return {Header}
 */
function Header() {
  
  if( !(this instanceof Header) )
    return new Header()
  
}

Header.SIGNATURE = 0x02014B50

/**
 * Header prototype
 * @type {Object}
 */
Header.prototype = {
  
  constructor: Header,
  
}

// Exports
module.exports = Header
