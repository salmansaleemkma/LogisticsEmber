import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
	return this.store.find('booking');
    },
    actions: {
	showModal: function(name, model) {
	    this.render(name, {
		into: 'application',
		outlet: 'modal',
		model: model
	    });
	},
	removeModal: function() {
	    this.disconnectOutlet({
		outlet: 'modal',
		parentView: 'application'
	    });
	}
    }
});
