import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('bookings', function() {
    this.route('new');

    this.route('show', {
      path: ':booking_id'
    });

    this.route('edit', {
      path: ':booking_id/edit'
    });
  });
});
