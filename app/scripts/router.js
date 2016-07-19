import $ from 'jquery';
import Backbone from 'backbone';
import logIn from './views/login';
import signUp from './views/signup';
import contacts from './views/contacts';
import newContact from './views/newcontact';
import contactCollection from './collections/contacts';

const Router = Backbone.Router.extend({
  routes: {
    login       : 'logInFunction',
    signup      : 'signUpFunction',
    contacts    : 'contactsFunction',
    newContact  : 'newContactFunction',
    '/*'        : 'logInFunction'
  },
  logInFunction: function() {
    var $logIn = logIn();
    $('#container').empty().append($logIn);
  },
  signUpFunction: function() {
    var $signUp = signUp();
    $('#container').empty().append($signUp);
  },
  contactsFunction: function() {
    contactCollection.fetch();
    var $contacts = contacts();
    $('#container').empty().append($contacts);
  },
  newContactFunction: function() {
    var $newContact = newContact();
    $('#container').empty().append($newContact);
  },
});

const router = new Router();

export default router;
