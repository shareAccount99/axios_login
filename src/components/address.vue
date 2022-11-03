<template>
  <div>
    <h4>주소록</h4>

    <input type="text" @input="searchGroup($event)" />

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">직책/직급</th>
          <th scope="col">부서</th>
          <th scope="col">이메일</th>
          <th scope="col">전화번호</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="address.id" v-for="address in addressBook" class="group-item">
          <!--   <div v-if="address.user_name.includes(searchName)"> -->
          <td>{{ address.user_name }}</td>
          <td>{{ address.user_duty }}</td>
          <td>{{ address.user_department }}</td>
          <td>{{ address.user_email }}</td>
          <td>{{ address.user_phone_number }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container" id="notFound">
      <h2 v-show="errorshow">검색된 결과가 없습니다.</h2>
    </div>
  </div>
</template>

<script>
import apiAddress from "../api/apiAddress";

export default {
  components: {},
  data() {
    name: "Address";

    return {
      addressBook: [], //주소록
      errorshow: false,
    };
  },
  setup() {},
  created() {},
  mounted() {
    apiAddress
      .getData("address")
      .then((response) => {
        this.addressBook = response.data;
      })
      .catch(function (e) {
        console.log(e);
        console.log("Adress를 호출하는 중 오류");
      });
  },
  unmounted() {},
  methods: {
    searchGroup(event) {
      const len = this.addressBook.length;

      for (let i = 0; i < len; i++) {
        if (
          this.addressBook[i].user_name.includes(event.target.value) === false &&
          this.addressBook[i].user_duty.includes(event.target.value) === false &&
          this.addressBook[i].user_department.includes(event.target.value) === false &&
          this.addressBook[i].user_email.includes(event.target.value) === false &&
          this.addressBook[i].user_phone_number.includes(event.target.value) === false
        ) {
          document.querySelectorAll(".group-item")[i].style.display = "none";
          this.errorshow = true;
        } else {
          document.querySelectorAll(".group-item")[i].style.display = "";
          this.errorshow = false;
        }
      }
    },
  },
};
</script>

<style scoped>
#notFound {
  display: "none";
}
</style>
