import AJV from 'ajv';
import schema from './schema';

const validator = new AJV({
  schemas: [schema],
});

export default {
  validate: validator.getSchema('schema.json'),
};
