import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';
import user from '../models/user';


function logIn() {
    let $logInForm = $(`
      <form class="logInForm">
        <input type="text" id="userName" placeholder="User Name">
  			<input type="password" id="password" placeholder="Password">
  			<input type="submit" id="logIn" value="Log In">
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
          location.hash = 'contacts';
        },
        error: function() {
          console.log('The log in failed');
        }
      });

    });
    return $logInForm;
}

export default logIn;
