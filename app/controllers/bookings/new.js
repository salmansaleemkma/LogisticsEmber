import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed(
        'model.email',
        'model.firstName',
        'model.lastName',
        'model.twitter',
        function() {
            return !Ember.isEmpty(this.get('model.email')) &&
                !Ember.isEmpty(this.get('model.firstName')) &&
                !Ember.isEmpty(this.get('model.lastName')) &&
                !Ember.isEmpty(this.get('model.twitter'));
        }
    ),
    actions: {
        save: function() {
            if (this.get('isValid')) {
                var _this = this;
                this.get('model').save().then(function(booking) {
                    _this.transitionToRoute('bookings.show', booking);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }
            return false;
        },
        cancel: function() {
            this.transitionToRoute('bookings');
        return false;
        }
    }
        
});
