import React, {Component} from 'react';
import validator from './validator';
// import validator from './validatorWithAjvAsync';

class App extends Component {

  attemptValidation = async () => {
    try {
      await validator.validate({
        foo: "bar",
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
