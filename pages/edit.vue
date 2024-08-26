<template>
  <div class="main edit">
    <EditUser v-if="editMode == 'user'" />
    <EditCircuit v-if="editMode == 'circuit'" />
    <EditFooter @changeEditMode="changeEditMode" />
  </div>
</template>

<script setup lang="ts">
const editMode = ref('');

function changeEditMode(val: string) {
  editMode.value = val;
}
</script>
