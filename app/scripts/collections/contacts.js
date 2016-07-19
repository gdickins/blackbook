import Backbone from 'backbone';
import Contact from '../models/contact';
import settings from '../settings';

const Contacts = Backbone.Collection.extend({
  model: Contact,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/contacts`
});

let contactCollection = new Contacts();

export default contactCollection;
