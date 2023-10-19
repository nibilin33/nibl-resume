module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", [
    '@babel/preset-env',
    {
      'useBuiltIns': 'entry',
      'corejs': 3 // 指定 corejs 的版本,如果package.json没有core-js，还需要另外安装
    }
  ]]
};
