<template>
  <div class="container">
    <sui-card-group :items-per-row="3">
      <sui-card v-if="isAuthenticated">
        <sui-card-content>
          <sui-container text-align="center">
            <sui-button basic positive>add team</sui-button>
          </sui-container>
        </sui-card-content>
      </sui-card>
      <sui-card v-for='(team, i) in teams' :key='i'>
        <sui-card-content>
          <sui-card-header>{{ team.name }}</sui-card-header>
          <sui-card-meta>{{ team.id }}</sui-card-meta>
        </sui-card-content>
        <sui-card-content v-if="isAuthenticated" extra>
          <sui-container text-align="center">
            <sui-button-group>
              <sui-button basic positive>Edit</sui-button>
              <sui-button @click="removeTeam(team.id)" basic negative>Remove</sui-button>
            </sui-button-group>
          </sui-container>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
import {
  FETCH_TEAMS,
  DELETE_TEAM,
  CREATE_TEAM,
} from '@/store/action.type';
import { mapGetters } from 'vuex';

export default {
  name: 'Team',
  mounted() {
    this.$store.dispatch(FETCH_TEAMS);
  },
  methods: {
    removeTeam(id) {
      this.$store.dispatch(DELETE_TEAM, id);
    },
    addTeam(team) {
      this.$store.dispatch(CREATE_TEAM, team);
    },
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'teams']),
  },
};
</script>

<style scoped>
.container {
  margin-top: 4%;
  margin-left: 4%;
}
</style>
