import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDialog from './components/MeetUp/Edit/EditMeetupDialog.vue'
import EditMeetupDateDialog from './components/MeetUp/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/MeetUp/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/MeetUp/Registration/RegisterDialog.vue'
import DeleteMeetupDialog from './components/MeetUp/Delete/DeleteMeetupDialog.vue'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-dialog', EditMeetupDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-register-dialog', RegisterDialog)
Vue.component('app-delete-meetup-dialog', DeleteMeetupDialog)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCGjnrADnbRW_5K9jzyuBswiGT_X1VwgqM',
      authDomain: 'meetups-9ab4f.firebaseapp.com',
      databaseURL: 'https://meetups-9ab4f.firebaseio.com',
      projectId: 'meetups-9ab4f',
      storageBucket: 'gs://meetups-9ab4f.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
