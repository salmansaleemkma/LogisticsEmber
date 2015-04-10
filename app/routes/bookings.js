import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('booking');
    },
    actions: {
        save: function() {
            console.log('+--- save action bubbled up to bookings route');
            return false;
        },
        cancel: function() {
            console.log('+--- cancel action bubbled up to bookings route');
            return false;
        }
    }
    
});
