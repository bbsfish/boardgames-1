<template>
  <div>
    <label for='input-room-id'>
      Input ROOM ID
      <input name='input-room-id' v-model='inputRoomId'/>
    </label>
    <button @click="enterRoom">Enter</button>
  </div>
</template>

<script>
import { ulid as ULID } from 'ulid';
import Rooms from '../apis/rooms';
import Users from '../apis/users';

export default {
  name: 'InputRoomId',
  methods: {
    async enterRoom() {
      const nextRoomId = this.inputRoomId;
      if ((await Rooms.getById(nextRoomId)).length !== 0) {
        // Enter Room
        if (!window.confirm('指定された ROOM が存在します. 入りますか？')) return; // eslint-disable-line
      } else {
        // Create Room
        if (!window.confirm('ROOM を作成します. よろしいですか？')) return; // eslint-disable-line
        Rooms.post({ id: nextRoomId });
      }

      let userId = this.$store.getters.getUserId;
      console.log('user id', userId);
      if (!userId) {
        userId = ULID();
        Users.post({ id: userId, room: nextRoomId });
        console.log('new user id', userId);
      }

      this.$store.commit('setUserId', userId);
      this.$store.commit('setRoomId', nextRoomId);
    },
  },
};
</script>
