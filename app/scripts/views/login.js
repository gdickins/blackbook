import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';
import user from '../models/user';
import router from '../router';


function logIn() {
    let $logInForm = $(`
      <form class="logInForm">
        <h1>Log In</h1>
        <input type="text" id="userName" placeholder="User Name">
  			<input type="password" id="password" placeholder="Password">
  			<input type="submit" id="logIn" value="Log In">
  			<input type="button" id="signUp" value="Sign Up">
      </form>
    `);
    $logInForm.find('input[type="submit"]').on('click', function(evt) {
      evt.preventDefault();
      let username =  $logInForm.find('#userName').val();
      let password =  $logInForm.find('#password').val();
      console.log(settings.basicAuth);
      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appId}/login`,
        data: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          Authorization: `Basic ${settings.basicAuth}`
        },
        contentType: 'application/json',
        success: function(response) {
          user.username = username;
          user.authtoken = response._kmd.authtoken;
          // location.hash = 'contacts';
          router.navigate('contacts', {trigger: true});
        },
        error: function() {
          console.log('The log in failed');
        }
      });

    });
    $logInForm.find('input[id="signUp"]').on('click', function(evt) {
      router.navigate('signup', {trigger: true});
    });
    return $logInForm;
}

export default logIn;
