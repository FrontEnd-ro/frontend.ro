module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    'linebreak-style': 'off',
    'prefer-const': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    /**
     * We'd normally want to keep this, but due to how the <Link> component in Next works,
     * we need to turn it off
    */
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-prototype-builtins': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off', // Disabling becasue TS takes care of it
    '@next/next/no-img-element': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './client'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
      },
    },
  },
};
