import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    goToLink : function(booking) {
        this.transitionToRoute('bookings.show', booking);
    }
  }
});