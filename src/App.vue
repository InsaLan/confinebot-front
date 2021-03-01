<template>
  <div id="app">
    <TopMenu />
    <router-view/>
    <Footer />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
<script>
import TopMenu from '@/components/topMenu.vue';
import Footer from '@/components/footer.vue';

export default {
  components: { Footer, TopMenu },
};

</script>
