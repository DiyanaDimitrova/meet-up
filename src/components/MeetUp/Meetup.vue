<template>
    <v-container>
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
        <v-flex xs12>
            <v-card class="deep-purple lighten-3">
            <v-card-title>
                <h3 class="primary--text">{{ meetup.title }}</h3>
                <template v-if="userIsCreator">
                    <v-spacer></v-spacer>
                    <app-edit-meetup-dialog :meetup="meetup"></app-edit-meetup-dialog>
                    <app-delete-meetup-dialog :meetupId="meetup.id"></app-delete-meetup-dialog>
                </template>
            </v-card-title>
            <v-img
                :src="meetup.imageUrl"
                height="400px"
            ></v-img>
            <v-card-text>
                <div class="primary--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
                <div>
                    <app-edit-meetup-date-dialog :meetup="meetup" v-if="userIsCreator">
                    </app-edit-meetup-date-dialog>
                    <app-edit-meetup-time-dialog :meetup="meetup" v-if="userIsCreator">
                    </app-edit-meetup-time-dialog>
                </div>
                <div>{{ meetup.description }}</div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <app-register-dialog
                :meetupId="meetup.id"
                v-if="userIsAutheticated && !userIsCreator"></app-register-dialog>
            </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAutheticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAutheticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
