<template>
  <div class="footer">
    <div class="wrapper">
      <div class="btn user" @click="$emit('changeEditMode', 'user')">
        <UIcon name="i-heroicons-user-solid" />Usagers
      </div>
      <div class="btn circuit" @click="$emit('changeEditMode', 'circuit')">
        <UIcon name="i-heroicons-map" />Circuits
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  color: white;
  .wrapper {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: auto;
  }

  width: 100%;
  height: 80px;
  background-color: #333;
}
</style>
