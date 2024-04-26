<template>
  <div id="room-member-list">
    <button @click='activation'>activation</button>
    <button @click='inActivation'>inActivation</button>
    <nav>
      <tr>
        <th>User NAME</th>
        <th>User ID</th>
      </tr>
      <tr
        v-for='(user, idx) of memberList'
        :key='idx'
      >
        <td>{{user.name}}</td>
        <td>{{user.id}}</td>
      </tr>
    </nav>
  </div>
</template>

<script>
// import Rooms from '../apis/rooms';
import Users from '../apis/users';

export default {
  name: 'RoomMemberList',
  data() {
    return {
      updateAgent: null,
      members: [],
    };
  },
  methods: {
    update() {
      console.log('update', this.$store.getters.getRoomId);
      return Users.get({ room: this.$store.getters.getRoomId });
    },
    activation() {
      if (this.updateAgent) return;
      this.updateAgent = setInterval(async () => {
        this.members = await this.update();
        console.log('this.members', this.members);
      }, 1000);
    },
    inActivation() {
      clearInterval(this.updateAgent);
      this.updateAgent = null;
    },
  },
  computed: {
    memberList() {
      return this.members.map((m) => {
        const n = m;
        if (!('name' in m)) n.name = 'anonymous'; // UserName 未設定のユーザー対応
        return n;
      });
    },
  },
};
</script>
