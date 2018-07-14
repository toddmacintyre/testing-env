const isTest = String(process.env.NODE_ENV) === 'test';
module.exports = {
  presets: [['env', {modules: isTest ? 'commonjs' : false}]],
  plugins: [
    'transform-object-rest-spread',
    isTest ? 'transform-es2015-modules-commonjs' : null,
  ].filter(Boolean),
};
