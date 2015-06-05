import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
	delete: function(booking) {
	    var _this = this;

	    booking.destroyRecord().then(function() {
		_this.transitionTo('bookings.index');
	    });
	},
	edit:function(booking){
	    this.transitiionToRoute('bookings.edit',booking);
				   },
        back:function(){
            this.transitionToRoute('bookings');
            
            }
        }
    });
  
