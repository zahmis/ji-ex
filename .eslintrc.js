module.exports = {
  extends: ['weseek'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: [
          'JSXElement *',
          'JSXElement',
          'JSXAttribute',
          'JSXSpreadAttribute',
        ],
        ArrayExpression: 'first',
        FunctionDeclaration: { body: 1, parameters: 2 },
        FunctionExpression: { body: 1, parameters: 2 },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules/'],
      },
    },
  },
};
