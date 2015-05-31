import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed(
        'model.name',
        'model.purpose',
        'model.from',
        'model.to',
        'model.requiredkms',
        'model.charges',
        'model.time',
        function() {
            return !Ember.isEmpty(this.get('model.name')) &&
                !Ember.isEmpty(this.get('model.purpose')) &&
                !Ember.isEmpty(this.get('model.from')) &&
                !Ember.isEmpty(this.get('model.to')) &&
                !Ember.isEmpty(this.get('model.requiredkms')) &&
                !Ember.isEmpty(this.get('model.charges')) &&
                !Ember.isEmpty(this.get('model.time'));
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
