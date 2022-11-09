const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};
