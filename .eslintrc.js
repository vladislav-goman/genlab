const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  plugins: ['import'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        extension: ['', '.js', '.jsx'],
        moduleDirectory: ['node_modules', './packages', './packages/core'],
      },
    },
  },
  root: true,
  rules: {
    'import/order': ERROR,
    'react/prop-types': OFF,
    /* see https://github.com/yannickcr/eslint-plugin-react/issues/976 */
    'react/no-unused-prop-types': [OFF],
    'react/jsx-filename-extension': [OFF],
    /*
     * as discussed in the team this rule does not make any sense in some cases
     * e.g. if you have a react class that needs a private method and you don't want to put the private
     * method at the top of the file
     */
    'no-restricted-syntax': [OFF],
    'no-param-reassign': [ERROR, { props: false }],
    'no-use-before-define': [ERROR, { functions: false, classes: false }],
    /* need to run promises in sequence in browser tests */
    'no-await-in-loop': [OFF],
    /* this is an explicit javascript feature and we already use it in some cases */
    eqeqeq: [ERROR, 'allow-null'],
    /* project started with 4 indents, so we keep it */
    indent: [OFF],
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-indent-props': [ERROR, 2],
    /* max-len for links does not make any sense */
    'max-len': [
      1,
      140,
      4,
      {
        ignoreUrls: true,
        ignoreComments: false,
      },
    ],
    /*
     * Remove lint telling me that json file extensions (and others) are missing
     */

    'import/extensions': [OFF, 'never'],
    /*
     * Those package.json files do not include dependencies anymore.
     * That's why this rule thinks that there are dependencies missing per package.
     */
    'import/no-extraneous-dependencies': [OFF],
    'import/no-unresolved': [ERROR, { ignore: ['static-configuration', 'client-configuration', 'config-custom', 'core-app'] }],
    'no-plusplus': [OFF],
    /*
     * Does not make sense in every case. Example: A tab element is semantically not a button or link, it's really
     * more a div and should be clickable.
     */
    'jsx-a11y/no-static-element-interactions': [OFF],
    /**
     * Super annoying rule if you want to build modules with multiple exports but you want to start
     * with only one export. This would always force you to declare the export as a default export which
     * doesn't always semantically make sense.
     */
    'import/prefer-default-export': [OFF],
    'import/no-named-as-default': [OFF],
    // Temporary off "no-cycle", coz we have lots of the warnings and it is hard to find error in the log
    // TODO: Need to review the warnings and fix them where possible
    'import/no-cycle': [OFF],
    'class-methods-use-this': [OFF],
    'lines-between-class-members': [ERROR, 'always', { exceptAfterSingleLine: true }],
    'object-curly-newline': ['error', { consistent: true }],
    'jsx-a11y/click-events-have-key-events': [ERROR],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
        specialLink: [],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'prefer-destructuring': [OFF],
    'react/destructuring-assignment': [ERROR, 'always', { ignoreClassFields: true }],
    'react/prefer-stateless-function': [OFF],
    'react/jsx-one-expression-per-line': [OFF],
    'react/no-array-index-key': [OFF],
    /**
     * See https://reactjs.org/docs/react-component.html#componentdidupdate
     * "You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition"
     */
    'react/no-did-update-set-state': [OFF],
    'react/no-this-in-sfc': [OFF],
    'react/button-has-type': [OFF],
    'react/jsx-wrap-multilines': [OFF],
    'react/forbid-foreign-prop-types': [OFF],
    'react/sort-comp': [
      'error',
      {
        order: ['instance-variables', 'static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    /**
     * Disable @flow check until we've completely moved to typescript
     */
    'flowtype/no-types-missing-file-annotation': OFF,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true,
    mocha: true,
  },
  globals: {
    document: true,
    jasmine: true,
    spyOn: true,
    pending: true,
    window: true,
    page: true,
    browser: true,
    sessionStorage: true,
    XMLHttpRequest: true,
    fetch: true,
    requestAnimationFrame: true,
    Blob: true,
    FileReader: true,
    i18n: true,
    yl: true,
    APP_VERSION: true,
  },
};
