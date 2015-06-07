module.exports = {
  DEFAULT:   10, // Default value
  LABEL:     11, // File is a volume label
  FOLDER:    20, // File is a folder (directory)
  DEFLATE:   20, // File is compressed using Deflate compression
  PKWARE:    20, // File is encrypted using traditional PKWARE encryption
  DEFLATE64: 21, // File is compressed using Deflate64
  DCLI:      25, // File is compressed using PKWARE DCL Implode 
  PATCH:     27, // File is a patch data set 
  ZIP64:     45, // File uses ZIP64 format extensions
  BZIP2:     46, // File is compressed using BZIP2 compression
  DES:       50, // File is encrypted using DES
  THREE_DES: 50, // File is encrypted using 3DES
  RC2:       50, // File is encrypted using original RC2 encryption
  RC4:       50, // File is encrypted using RC4 encryption
  AES:       51, // File is encrypted using AES encryption
  C_RC2:     51, // File is encrypted using corrected RC2 encryption
  C_RC64:    52, // File is encrypted using corrected RC2-64 encryption
  NO_OAEP:   61, // File is encrypted using non-OAEP key wrapping
  CDE:       62, // File has encrypted Central Directory
  LZMA:      63, // File is compressed using LZMA
  PPMD:      63, // File is compressed using PPMd+
  BLOWFISH:  63, // File is encrypted using Blowfish
  TWOFISH:   63, // File is encrypted using Twofish
}
