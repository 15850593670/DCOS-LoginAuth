import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../service/AuthService'
import { LOGIN_URL, RETURN_URL } from '../constants/LoginConstants';
import em from './em'

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    };
    em.on('login', function () {
      console.log('logg in')
      $('#failAlert').hide()
      $('#successAlert').show();
      window.parent.postMessage(JSON.stringify({ type: 'token', token: { uid: this.state.user } }), RETURN_URL)
      window.close()
    }.bind(this))
  }
  logError(err) {
    $('#failAlert').show()
    // alert("There's an error logging in");
    console.log("Error logging in", err);
  }

  login(e) {
    var that = this
    e.preventDefault();
    Auth.login(this.state.user, this.state.password).catch(function (err) {
      that.logError(err)
    })

  }
  alertDismiss(){
    $('#failAlert').hide()
  }

  render() {
    return (
      <div className="container">

        <div className='row'>
          <div className='col-sm-6 col-md-4 col-md-offset-4'>
            <h1 className='text-center login-title'>LDAP authentication</h1>
            <div className='account-wall'>
              <img className='profile-img' src='https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120' alt=''></img>
              <form className='form-signin'>
                <input type='text' name='username' className='form-control' placeholder='Username' required autofocus valueLink={this.linkState('user')}></input>
                <input type='password' name='password' className='form-control' placeholder='Password' required valueLink={this.linkState('password')}></input>
                <button className='btn btn-lg btn-primary btn-block' onClick={this.login.bind(this)}> Sign in</button>
                <span className='clearfix'></span>
              </form>
              <div id='successAlert' className="alert alert-success" role="alert" style={{display: 'none', marginLeft: '8%', marginRight: '8%'}}>
                <strong>OK! </strong> Loading...
              </div>
              <div id='failAlert' className="alert alert-danger " role="alert" style={{display: 'none', marginLeft: '8%', marginRight: '8%'}}>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.alertDismiss.bind(this)}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong>Failed! </strong> Check your username and password.
            </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
