module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx|jsx|js)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx', '.jsx', '.js');
  return config;
};
