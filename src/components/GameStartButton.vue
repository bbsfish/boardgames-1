<template>
  <div>
    <button @click='startGame'>Start Game</button>
  </div>
</template>

<script>
export default {
  name: 'GameStartButton',
  methods: {
    startGame() {
      console.log('startGame');
    },
  },
};
</script>
