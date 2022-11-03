<template>
  <div id="app">
    <!-- #1 : Button trigger modal -->
    <button @click="handle_toggle" type="button">모달창 띄우기</button>

    <!-- #2 : Modal Window -->
    <div v-show="is_show">
      <h5>뷰하!</h5>
      <p>v-if와 v-show로 모달창을 띄워봅시다.</p>

      <button @click="handle_toggle" type="button">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      is_show: false,
    };
  },
  methods: {
    // this와 바인딩 되지 않는다.
    arrow_function: () => {
      console.log(this.is_show); // undefined
    },

    // bind로 묶어도 마찬가지다.
    bind_function: (() => {
      console.log(this.is_show); // undefined
    }).bind(this),

    // 정상적으로 동작한다.
    it_is_work: function () {
      this.is_show = !this.is_show;
    },
  },
};
</script>
