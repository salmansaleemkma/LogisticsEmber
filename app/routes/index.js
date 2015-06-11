import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
	reload: function() {
	    this.store.unloadAll('booking');
	    return this.store.find('booking');
	    
	}
    }

});
