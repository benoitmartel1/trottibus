<template>
  <div>
    <div class="main-wrapper">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  font-family: 'Nunito';
  background-color: black;
}
.main-wrapper {
  overflow-y: hidden;
  background-color: lightcyan;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-height: 100vh;
  height: 100vh;
}
@media screen and (min-width: 800px) {
  .main-wrapper {
    max-width: 960px;
    margin: auto;
  }
}
</style>
