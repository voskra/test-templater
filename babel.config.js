module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    'babel-plugin-ts-nameof'
  ]
};
