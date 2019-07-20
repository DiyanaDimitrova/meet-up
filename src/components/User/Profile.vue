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
            <v-card>
            <v-card-title>
                <h6 class="primary--text">{{ user }}</h6>

            </v-card-title>
            <v-card-text>

            </v-card-text>
            <v-card-actions>

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
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
