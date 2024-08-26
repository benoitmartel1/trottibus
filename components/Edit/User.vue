<template>
  <div class="main">
    <USlideover v-model="open">
      <EditPanelUser :user="userToEdit" @close="onClose" />
    </USlideover>
    <UTable class="bg-white" :rows="users" :columns="columns" @select="select">
      <template #delete-data="{ row }">
        <UIcon
          @click.stop="deleteUser(row.id)"
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
        @click="addUser"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const open = computed(() => {
  return userToEdit.value !== null;
});

const supabase = useSupabaseClient();

const userToEdit = ref(null);

const columns = [
  { label: 'Prénom', key: 'firstname' },
  { label: 'Nom', key: 'lastname', sortable: true },
  { key: 'delete' },
];

const { data: users, refresh } = await useAsyncData('users', async () => {
  const { data } = await supabase
    .from('trot_user')
    .select('id, firstname, lastname, role, password, email, address, circuit');
  return data;
});

async function addUser() {
  const { data, error } = await supabase.from('trot_user').insert({}).select();
  if (data) {
    userToEdit.value = data[0];
  }
}
async function deleteUser(id) {
  const { data, error } = await supabase
    .from('trot_user')
    .delete()
    .eq('id', id);
  refresh();
}
function select(row) {
  userToEdit.value = row;
}
function onClose() {
  userToEdit.value = null;
  refresh();
}
</script>
