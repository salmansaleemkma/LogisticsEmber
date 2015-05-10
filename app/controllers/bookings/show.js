import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        back:function(){
            this.transitionToRoute('bookings');
            
            },
        edit:function(booking){
            this.transitionToRoute('booking.edit',booking)
        }
        }
    });
  