<template>
    <v-container grid-list-md>
       <v-layout row>
          <v-flex xs12>
            <h2>Meetups organized by you</h2>
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="loading">
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                    indeterminate
                    class="primary--text"
                    :width="7"
                    :size="70">
                </v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-else>
          <v-flex xs4 v-for="meetup in userMeetups" :key="meetup.id"> 
              <v-card :to="'/meetups/' + meetup.id">
                <v-img
                  alt
                  :src="meetup.imageUrl"
                ></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="primary--text">{{meetup.title }}</h3>
                    <div>{{ meetup.description }}</div>
                  </div>
                </v-card-title>
              </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    },
    userMeetups () {
      return this.$store.getters.userMeetups
    }
  }
}
</script>
