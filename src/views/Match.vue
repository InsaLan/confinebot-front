<template>
<div>
  <h1>Matches</h1>
  <ul>
    <li v-for="item in matches" :key="item.id">
      {{item.map}}: server: {{item.server.ip}} - STATUS: {{item.state}}
    </li>
  </ul>
  <nav v-if="isAuthenticated">
  </nav>
</div>
</template>

<script>
import {
  FETCH_ALL_MATCHES,
  CREATE_MATCH,
} from '@/store/action.type';
import { mapGetters } from 'vuex';

export default {
  name: 'Match',
  mounted() {
    this.$store.dispatch(FETCH_ALL_MATCHES);
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(CREATE_MATCH);
    },
  },
  computed: {
    ...mapGetters(['matches', 'isAuthenticated']),
  },
};
</script>

<style scoped>

</style>
