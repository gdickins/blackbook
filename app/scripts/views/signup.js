import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';
import user from '../models/user';
import router from '../router';


function signUp() {
    let $signUpForm = $(`
      <form class="signUpForm">
        <h1>Sign Up</h1>
        <input type="text" id="userName" placeholder="User Name">
  			<input type="password" id="password" placeholder="Password">
  			<input type="submit" id="signUp" value="Sign Up">
      </form>
    `);
    $signUpForm.find('input[type="submit"]').on('click', function(evt) {
      evt.preventDefault();
      let username =  $signUpForm.find('#userName').val();
      let password =  $signUpForm.find('#password').val();
      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appId}/`,
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
          console.log('The sign up failed');
        }
      });

    });
    return $signUpForm;
}

export default signUp;
