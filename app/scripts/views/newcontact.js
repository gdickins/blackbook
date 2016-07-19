import $ from 'jquery';
import Backbone from 'backbone';
import contactCollection from '../collections/contacts';
import settings from '../settings';
import user from '../models/user';

function newContact() {
    let $newContact = $(`
      <form>
        <input type="text" id="fullName" placeholder="Full Name">
        <input type="text" id="nickname" placeholder="Nickname">
        <input type="email" id="email" placeholder="E-mail">
  			<input type="tel" id="telephone" placeholder="Phone Number">
        <input type="submit" id="addContact" value="Add Contact">
      </form>
    `);
    $newContact.find('input[id="addContact"]').on('click', function(evt) {
        evt.preventDefault();
        contactCollection.create({
          fullName: $('#fullName').val(),
          nickname: $('#nickname').val(),
          email: $('#email').val(),
          phone: $('#telephone').val(),
          author: user.username
        }, {

          success: function() {
            location.hash = 'contacts';
          }
        });


    });
    return $newContact;
}

export default newContact;
