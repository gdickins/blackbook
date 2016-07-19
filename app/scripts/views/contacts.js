import $ from 'jquery';
import Backbone from 'backbone';
import contactCollection from '../collections/contacts';

function contacts() {
    let $contactsHeader = $(`
      <div>
        <table id="displayTable">
          <tr>
            <th>
              Full Name
            </th>
            <th>
              Nickname
            </th>
            <th>
              E-Mail
            </th>
            <th>
              Phone
            </th>
          </tr>
        </table>
        <input type="button", id ="newContact", value="Add">
      </div>
    `);

    function renderRow(contact) {
        let $contactsRow = $(`
            <tr>
              <td>
                ${contact.get('fullName')}
              </td>
              <td>
                ${contact.get('nickname')}
              </td>
              <td>
                ${contact.get('email')}
              </td>
              <td>
                ${contact.get('phone')}
              </td>
            </tr>
      `);
        $contactsHeader.find('table').append($contactsRow);
    }
    contactCollection.on('add', renderRow);
    contactCollection.forEach(renderRow);
    $contactsHeader.find('input[id="newContact"]').on('click', function(evt) {
        console.log('Adding Contact');
        location.hash = 'newContact';
    });
    // contactCollection.get(contact).forEach(renderRow);
    return $contactsHeader;
}



export default contacts;
