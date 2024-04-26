<template>
  <main>
    <InputRoomId />
    <InputUserName />
    <RoomMemberList />
    <GameStartButton />
  </main>
</template>

<script>
import InputRoomId from '../components/InputRoomId.vue';
import InputUserName from '../components/InputUserName.vue';
import RoomMemberList from '../components/RoomMemberList.vue';
import GameStartButton from '../components/GameStartButton.vue';

export default {
  name: 'HomeView',
  components: {
    InputRoomId,
    InputUserName,
    RoomMemberList,
    GameStartButton,
  },
};
</script>
