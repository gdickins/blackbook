import $ from 'jquery';
import Backbone from 'backbone';

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
                ${contact.fullName}
              </td>
              <td>
                ${contact.nickname}
              </th>
              <td>
                ${contact.email}
              </td>
              <td>
                ${contact.phone}
              </td>
            </tr>
      `);
        $contactsHeader.find('table').append($contactsRow);
    }
    contactCollection.on('add', renderRow);
    contactCollection.forEach(renderRow);
    $contacts.find('input[id="newContact"]').on('click', function(evt) {
        console.log('Adding Contact');
        location.hash = 'newContact';
    });
    return $contacts;
}



export default contacts;
