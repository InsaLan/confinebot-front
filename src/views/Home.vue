<template>
  <div>
    <sui-grid centered vertical-align="middle">
    <sui-grid-row>
      <sui-header centered size="medium">Match</sui-header>
      <sui-statistic>
        <sui-statistic-value>45</sui-statistic-value>
        <sui-statistic-label>played</sui-statistic-label>
      </sui-statistic>
    </sui-grid-row>
    <sui-divider />
    <sui-grid-row>
      <sui-header size="medium">Map</sui-header>
      <sui-statistic>
        <sui-statistic-value>30</sui-statistic-value>
        <sui-statistic-label>total</sui-statistic-label>
      </sui-statistic>
    </sui-grid-row>
    <sui-divider />
    <sui-grid-row>
      <sui-header size="medium">Team</sui-header>
      <sui-statistic>
        <sui-statistic-value>64</sui-statistic-value>
        <sui-statistic-label>registered</sui-statistic-label>
      </sui-statistic>
    </sui-grid-row>
    </sui-grid>
  </div>
</template>

<style scoped>

</style>
<script>

export default {
  name: 'Home',
};

</script>
