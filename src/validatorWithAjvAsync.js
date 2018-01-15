import AJV from 'ajv';
import ajvAsync from 'ajv-async';
import schema from './schema';

const validator = ajvAsync(new AJV({
  schemas: [schema],
}));

export default {
  validate: validator.getSchema('schema.json'),
};
