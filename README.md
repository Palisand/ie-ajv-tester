_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)._

You might find yourself [in a pickle](https://github.com/epoberezkin/ajv/issues/675#issuecomment-357741260) when attempting to provide asynchronous json schema validation via the delightfully performant [AJV](https://github.com/epoberezkin/ajv) for a [Create React App](https://github.com/facebookincubator/create-react-app) (CRA) app running in an Internet Explorer (IE) setting.

IE 11 [does not support async functions](http://kangax.github.io/compat-table/es2016plus/#test-async_functions) but AJV [provides optional transpilation](https://github.com/epoberezkin/ajv#using-transpilers-with-asynchronous-validation-functions) of its generated validation code through [ajv-async](https://github.com/epoberezkin/ajv-async), which uses [nodent](https://github.com/MatAtBread/nodent).

After installing ajv-async and running your CRA app you will probably come across this error:

```
Failed to compile.

./node_modules/nodent/nodent.js
Module parse failed: Unexpected character '#' (1:0)
You may need an appropriate loader to handle this file type.
| #!/usr/bin/env node
| 
| 'use strict';
```

> You can reproduce this error for the app in this repository by `import`ing `validator` from `./validatorWithAjvAsync` within _`App.js`_; you can just uncomment the line and remove the previous import.

Ok, no problem, you can just do what it says and write a Webpack loader of your own. Oh wait, doing this the right way (no hacky code) would involve [ejecting from CRA](https://github.com/facebookincubator/create-react-app/issues/2608#issuecomment-311091522) and you may not want to do that.

At this point, you have 4 options:
1. Maintain a fork of CRA with a custom Webpack configuration.
2. Eject from CRA and provide your custom or third-party Webpack loader.
3. Drop asyncronous validation (provide schemas that do not use `$async: true`) in IE contexts.
4. Use an alternate transpilation method through the `processCode` option (see [AJV Options](https://github.com/epoberezkin/ajv#options)).

**I am currently working on 4.**
