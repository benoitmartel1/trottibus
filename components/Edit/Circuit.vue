<template>
  <div class="main">
    <USlideover v-model="open">
      <EditPanelCircuit :user="circuitToEdit" @close="onClose" />
    </USlideover>
    <UTable
      class="bg-white"
      :rows="circuits"
      :columns="columns"
      @select="select"
    >
      <template #delete-data="{ row }">
        <UIcon
          @click.stop="deleteCircuit(row.id)"
          name="i-heroicons-trash"
        /> </template
    ></UTable>
    <div class="spacer flex-1"></div>
    <div class="text-center mb-10">
      <UButton
        icon="i-heroicons-user-plus-solid"
        size="xl"
        :ui="{ rounded: 'rounded-full' }"
        color="primary"
        label="Nouveau"
        :trailing="false"
        @click="addCircuit"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const supabase = useSupabaseClient();
const { circuits } = useSettings();
const circuitToEdit = ref(null);

const open = computed(() => {
  return circuitToEdit.value !== null;
});

const columns = [
  { label: 'Nom', key: 'name' },
  { label: '#', key: 'number' },
  { key: 'delete' },
];

async function addCircuit() {
  const { data, error } = await supabase
    .from('trot_circuit')
    .insert({})
    .select();
  if (data) {
    circuitToEdit.value = data[0];
  }
}
async function deleteCircuit(id) {
  const { data, error } = await supabase
    .from('trot_circuit')
    .delete()
    .eq('id', id);
  refresh();
}
function select(row) {
  circuitToEdit.value = row;
}
function onClose() {
  circuitToEdit.value = null;
  refresh();
}
</script>
