import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
	    return this.store.all('booking');
    },

    actions: {
	reload: function() {
	    this.store.unloadAll('booking');
	    return this.store.find('booking');
	    
	}
    }

});
