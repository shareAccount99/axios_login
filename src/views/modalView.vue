<template>
  <div>
    <Discount />
    <div class="black-bg" v-if="openModal">
      <div class="white-bg">
        <img :src="roomData[roomNumber].image" alt="x" />
        <h4>{{ roomData[roomNumber].title }}</h4>
        <p>{{ roomData[roomNumber].title }}</p>
        <button @click="modalControl">모달 닫기</button>
      </div>
    </div>
  </div>

  <div :key="room.id" v-for="(room, i) in roomData">
    <img :src="room.image" alt="x" />
    <h4>{{ room.title }}</h4>
    <p>{{ room.content }}</p>
    <p>{{ room.price }}</p>
    <button @click="modalControl(), getRoomNumber(i)">가격, 설명 보기</button>
  </div>
</template>

<script>
import apiAddress from "../api/apiAddress";
import Discount from "../components/Discount.vue";

export default {
  components: {
    Discount: Discount,
  },
  data() {
    return {
      roomNumber: 0,
      roomData: [],
      openModal: false,
    };
  },
  setup() {},
  created() {},
  mounted() {
    //mounted 시 데이터 불러오기
    apiAddress
      .getData("roomData")
      .then((response) => {
        this.roomData = response.data;
      })
      .catch(function (e) {
        console.log(e);
        console.log("roomData 호출하는 중 오류");
      });
  },
  unmounted() {},
  methods: {
    modalControl() {
      //모달창 컨트롤
      this.openModal = !this.openModal;
    },
    getRoomNumber(i) {
      //모달창을 위한 i
      this.roomNumber = i;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
img {
  width: 50%;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
