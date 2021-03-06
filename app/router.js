import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('rules');
  this.route('contact');
  this.route('searchPage', {path: '/searchPage/:searchPage_id'});
});

export default Router;
