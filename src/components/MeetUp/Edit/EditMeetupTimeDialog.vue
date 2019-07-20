<template>
  <v-dialog width="350px" persistent v-model="editDialog">
      <v-btn accent slot="activator">
         Edit Time
      </v-btn>
      <v-card>
          <v-container>
            <v-layout>
                <v-flex xs12>
                    <v-card-title>Edit Meetup Time</v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-time-picker
                        v-model="editableTime"
                        style="width: 100%"
                        format="24hr"
                        actions>
                        <template scope="{save, cancel}">
                            <v-btn flat class="blue--text darken-1" @click="editDialog=false">Close</v-btn>
                            <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
                        </template>
                    </v-time-picker>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
          </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editableTime: null
    }
  },
  methods: {
    onSaveChanges () {
      this.editDialog = false
      const newDate = new Date(this.meetup.date)
      const hours = this.editableTime.match(/^(\d+)/)[1]
      const minutes = this.editableTime.match(/:(\d+)/)[1]

      newDate.setHours(hours)
      newDate.setMinutes(minutes)

      this.$store.dispatch('updateMeetup', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    this.editableTime = new Date(this.meetup.date).toTimeString().substr(0, 8)
  }
}
</script>
