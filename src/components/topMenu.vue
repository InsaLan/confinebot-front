<template>
  <div>
    <sui-menu pointing secondary>
      <router-link
        is="sui-menu-item"
        v-for="(route, key) in items"
        :active="isActive(key)"
        :key="key"
        :content="key"
        :to="{name: route}"
        @click="select(key)"
      />
      <sui-menu-menu  position="right">
        <router-link v-if="!isAuthenticated"
          :to="{name: 'login'}"
          is="sui-menu-item"
          :active="isActive('Login')"
          content="Login"
          @click="select('Login')"
        />
          <router-link v-else
            :to="{name: 'settings'}"
            is="sui-menu-item"
            :active="isActive('Settings')"
            content="Settings"
            @click="select('Settings')"
          />
      </sui-menu-menu>
    </sui-menu>

  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'TopMenu',
  data() {
    return {
      active: 'Home',
      items: {
        Overview: 'home', Match: 'match', Statistic: 'stats', Team: 'team',
      },
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
  computed: { ...mapGetters(['isAuthenticated', 'getUser']) },
};
</script>
