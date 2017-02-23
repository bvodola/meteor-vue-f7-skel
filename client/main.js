// import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
// import { Accounts } from 'meteor/accounts-base'
import VueTracker from 'vue-meteor-tracker';
import VueMeta from 'vue-meta';

// Main app
import App from '/imports/ui/App.vue';
//
// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_AND_EMAIL',
// })

Vue.use(VueTracker);
Vue.use(VueMeta);

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
