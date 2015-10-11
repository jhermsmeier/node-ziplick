module.exports = {
  STORE:      0, // Store (without compression)
  LZWA:       1, // UnShrinking Dynamic Lempel-Ziv-Welch-Algorithm (LZWA)
  EXPAND1:    2, // Expanding (compression level 1)
  EXPAND2:    3, // Expanding (compression level 2)
  EXPAND3:    4, // Expanding (compression level 3)
  EXPAND4:    5, // Expanding (compression level 4)
  IMPLODE:    6, // Imploding
  TOKENIZE:   7, // Tokenization
  DEFLATE:    8, // Deflating LZSS & Huffman-Entropy coding
  DEFLATE64:  9, // Enhanced Deflating (DEFLATE64)
  PKWARE:    10, // PKWARE Data Compression Library Imploding (prev. IBM TERSE)
  BZIP2:     12, // Bzip2
  LZMA:      14, // LZMA
  TERSE:     18, // IBM TERSE (new)
  LZ77:      19, // IBM LZ77 z Architecture (PFS)
  LZMA2:     95, // Xz (LZMA2) 1.0.4 extension by WinZIP 18.0 (November 2013)
  JPEG:      96, // JPEG Compression[7] extension by WinZIP 12.0 (September 2008)
  WAVPACK:   97, // WavPack extension by WinZIP 11.0 Beta (Oktober 2006)
  PPMD:      98, // PPMd Version 1, rev 1 extension by WinZIP 10.0 Beta (August 2005)
  AES:       99, // AES-encrypted extension by WinZIP
}
