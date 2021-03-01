<template>
<div>
  <h1>Matches</h1>
  <ul>
    <li v-for="item in matches" :key="item.id">
      {{item.map}}: server: {{item.server.ip}} - STATUS: {{item.state}}
    </li>
  </ul>
</div>
</template>

<script>
import {
  FETCH_ALL_MATCHES,
} from '@/store/action.type';
import { mapGetters } from 'vuex';

export default {
  name: 'Match',
  mounted() {
    this.$store.dispatch(FETCH_ALL_MATCHES);
  },
  computed: {
    ...mapGetters(['matches']),
  },
};
</script>

<style scoped>

</style>
