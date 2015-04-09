import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  time: DS.attr('string'),
  purpose: DS.attr('string'),
  requiredkms: DS.attr('number'),
  charges: DS.attr('number'),
  rev: DS.attr('string')
});
