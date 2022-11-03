<template>
  <div>
    <h1>{{ propsString }}</h1>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    propsString: String,
  },
  data() {
    return {
      name: "PropsTest",
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
