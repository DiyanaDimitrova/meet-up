<template>
  <v-dialog persistent v-model="deleteDialog">
       <v-btn fab accent slot="activator">
          <v-icon>delete</v-icon>
      </v-btn>
      <v-card>
          <v-container>
            <v-layout>
                <v-flex xs12>
                    <v-card-title>Do you want to delete this meetup?</v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card-text>
                        The meetup will be permenently erased!
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                <v-card-actions>
                    <v-btn flat class="green--text darken-1" @click="deleteDialog=false">Cancel</v-btn>
                    <v-btn flat class="red--text darken-1" @click="onDelete">Delete</v-btn>
                </v-card-actions>
                </v-flex>
            </v-layout>
          </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetupId'],
  data () {
    return {
      deleteDialog: false
    }
  },
  methods: {
    onDelete () {
        this.$store.dispatch('deleteMeetup', this.meetupId)
        this.$router.push('/meetups')
    }
  }
}
</script>
