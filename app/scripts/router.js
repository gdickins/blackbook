import $ from 'jquery';
import Backbone from 'backbone';
import logIn from './views/login';
import contacts from './views/contacts';
import newContact from './views/newcontact';

const Router = Backbone.Router.extend({
  routes: {
    login       : 'logInFunction',
    contacts    : 'contactsFunction',
    newContact  : 'newContactFunction',
    '/*'        : 'logInFunction'
  },
  logInFunction: function() {
    console.log('Login');
    var $logIn = logIn();
    $('#container').empty().append($logIn);
  },
  contactsFunction: function() {
    console.log('contacts');
    var $contacts = contacts();
    $('#container').empty().append($contacts);
  },
  newContactFunction: function() {
    console.log('newContact');
    var $newContact = newContact();
    $('#container').empty().append($newContact);
  },
});

const router = new Router();

export default router;
