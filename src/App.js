import React, {Component} from 'react';

// REPRODUCE RUNTIME ERROR
import validator from './validator';

// REPRODUCE COMPILE-TIME ERROR
// import validator from './validatorWithAjvAsync';

// SOLUTION 4
// import validator from './validatorWithBabel';

// SOLUTION 5
// import validator from './validateCompiled';

class App extends Component {

  attemptValidation = async () => {
    try {
      await validator.validate({
        foo: 'bar',
      });
      alert('success');
    }
    catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <button onClick={this.attemptValidation} >
        Attempt Validation
      </button>
    );
  }
}

export default App;
