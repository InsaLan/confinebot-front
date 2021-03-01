<template>
<sui-form @submit.prevent="onSubmit(username, password)">
  <sui-form-field >
    <label>username</label>
      <input type="text"
             v-model="username"
              placeholder="username"/>

    <sui-form-field>
      <label>password</label>
      <input
        v-model="password"
        type="password">
    </sui-form-field>
    <sui-button >
      login
    </sui-button>
  </sui-form-field>
</sui-form>
</template>

<script>

import { LOGIN } from '@/store/action.type';
// import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit(username, password) {
      this.$store
        .dispatch(LOGIN, { username, password })
        .then(() => this.$router.push({ name: 'home' }));
    },
  },
};
</script>

<style scoped>

</style>
