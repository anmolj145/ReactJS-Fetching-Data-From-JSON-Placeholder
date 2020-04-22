import React, {Component} from 'react';

class MyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount(){
    localStorage.setItem('email', 'test@gmail.com')
    localStorage.setItem('password', '123')
  }

  submitHandler = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
      this.props.history.push("/data");
    }
    else {
      alert('Enter correct credentials !!!');
    }
  }

  render() {
    return (
      <div className="App-form">
        <h1>Login Here</h1>
          <p>Enter your email:</p>
          <input type="email" placeholder="Email" name="email" id="email"/>
          <p>Enter your password:</p>
          <input type="password" placeholder="Password" name="password" id="password"/>
          <br/>
          <br/>
          <input type="submit" name="Submit" onClick={this.submitHandler} />
      </div>
    );
  }
}

export default MyForm;