import AJV from 'ajv';
import schema from './schema';

require('babel-polyfill');
const Babel = require('@babel/standalone');

const processCode = source => {
  return Babel.transform(source, {
    ast: false,
    comments: false,
    compact: true,
    parserOpts: {
      allowReturnOutsideFunction: true,
    },
    presets: ['es2015', 'es2016', 'es2017'],
  }).code;
};

const validator = new AJV({
  processCode,
  schemas: [schema],
});

export default {
  validate: validator.getSchema('schema.json'),
};
