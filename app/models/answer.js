import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  text: DS.attr(),
  question: DS.belongsTo('question', { async:true }),
  date_added: DS.attr()
});
