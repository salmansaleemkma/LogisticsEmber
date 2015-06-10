import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.all('booking');
    },
    actions: {
	delete: function(booking) {
	    booking.destroyRecord();
	    return false;
	}
    }
    
});
