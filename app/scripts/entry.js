import $ from 'jquery';
import Backbone from 'backbone';
import user from './models/user';
import router from './router';
import settings from './settings';


$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  console.log('AJAX intercept');
  if (user.authtoken) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + user.authtoken);
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);

  }
});



Backbone.history.start();
