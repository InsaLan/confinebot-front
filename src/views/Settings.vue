<template>
<div>
  <h1>settings</h1>
</div>
</template>

<script>
import {
  FETCH_USER,
} from '@/store/action.type';
import { mapGetters } from 'vuex';

export default {
  name: 'Settings',
  mounted() {
    this.$store.dispatch(FETCH_USER);
  },
  computed: {
    ...mapGetters(['user']),
  },
};
</script>

<style scoped>

</style>
