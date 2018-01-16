/* eslint-disable */
'use strict';
var ValidationError = require('ajv/lib/compile/error_classes').Validation;
var validate = (function() {
  var refVal = [];
  return async function(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=schema.json */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      if (true) {
        var errs__0 = errors;
        var valid1 = true;
        for (var key0 in data) {
          var isAdditional0 = !(false || key0 == 'foo');
          if (isAdditional0) {
            valid1 = false;
            throw new ValidationError([{
              keyword: 'additionalProperties',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/additionalProperties',
              params: {
                additionalProperty: '' + key0 + ''
              },
              message: 'should NOT have additional properties'
            }]);
            break;
          }
        }
        if (valid1) {
          if (data.foo === undefined) {
            valid1 = false;
            throw new ValidationError([{
              keyword: 'required',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/required',
              params: {
                missingProperty: 'foo'
              },
              message: 'should have required property \'foo\''
            }]);
          } else {
            var errs_1 = errors;
            if (typeof data.foo !== "string") {
              throw new ValidationError([{
                keyword: 'type',
                dataPath: (dataPath || '') + '.foo',
                schemaPath: '#/properties/foo/type',
                params: {
                  type: 'string'
                },
                message: 'should be string'
              }]);
            }
            var valid1 = errors === errs_1;
          }
        }
      }
    } else {
      throw new ValidationError([{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'object'
        },
        message: 'should be object'
      }]);
    }
    if (errors === 0) return data;
    else throw new ValidationError(vErrors);
  };
})();
validate.schema = {
  "$id": "schema.json",
  "$async": true,
  "type": "object",
  "properties": {
    "foo": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": ["foo"]
};
validate.errors = null;
export default {validate};
