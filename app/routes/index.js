import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
	return this.store.find('booking');
    },

    actions: {
	reload: function() {
	    this.store.unloadAll('booking');
	    return this.store.find('booking');
	    
	}
    }

});
