<template>
  <div class="wrapper">
    <h1 class="under_rubrik1">Private customer</h1>
    <img class="img" src="../assets/contactmail.jpg" />

    <h4 class="mail">Mail: b_y@*******.com</h4>

    <h4>
      If you have any questions about Benyamin & Younes products please contact our costumer care team
      <br />
    </h4>

    <img class="img" src="../assets/contactphone.jpg" />

    <h4 class="phone">Telefon 031*****10</h4>

    <h4>
      We endeavour to answer the calls during Monday - Friday
      <br />13: 00-16: 00.
      <br />If none of the above apply to your query, please call our customer service 031 - ***** 50.
    </h4>
    <img class="img" src="../assets/contactcompany.jpg" />

    <h1 class="under_rubrik">Corporate customer</h1>

    <h4>
      Are you a corporate customer or do you want to apply to become a customer?
      <br />Visit Benyamin & Younes's customer portal or contact the
      B&Y Customer Center by phone 070-*** ** 50.
    </h4>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>
<style scoped>
.img {
  height: auto;
  width: 10%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.wrapper {
  display: grid;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  line-height: 2;
  padding-bottom: 10%;
}
.wrapper h4 {
  font-size: 25px;
  width: 75%;
  justify-self: center;
  text-align: center;
}
.under_rubrik,
.under_rubrik1 {
  font-size: 35px;
  padding-bottom: 0%;
}
</style>
