<template>
<div class="app">
  <h1>Simple Meteor example using Vue 2.1</h1>
</template>

<script>
export default {
  data() {
    return {
      buttonLabel: 'Click me!',
      count: 0,
      user: null,
    }
  },
  methods: {
  },
  metaInfo: {
    title: 'Meteor + Vue',
  }
};
</script>

<style>
body {
  margin: 30px;
}
a {
  color: #40b883;
  text-decoration: none;
}
h1, h2 {
  font-weight: normal;
}
</style>
