<template>
  <div class="about">
    <h1>About 페이지 시작 부분입니다.</h1>
  </div>
  <Address />
</template>

<script>
import Address from "../components/address.vue";

export default {
  components: {
    Address,
  },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
