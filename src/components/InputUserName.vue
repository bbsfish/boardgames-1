<template>
  <div>
    <label for='input-username'>
      Input USER NAME
      <input name='input-username' v-model='inputUserName'/>
    </label>
    <button @click="updateUserName">Update</button>
  </div>
</template>

<script>
export default {
  name: 'InputUserName',
  methods: {
    updateUserName() {
      this.$store.commit('setUserName', this.inputUserName);
    },
  },
};
</script>
