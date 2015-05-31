import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
	edit:function(booking){
	    this.transitiionToRoute('bookings.edit',booking);
				   },
        back:function(){
            this.transitionToRoute('bookings');
            
            }
        }
    });
  
