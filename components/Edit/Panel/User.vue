<template>
  <div>
    <div class="p-4 flex-1">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="$emit('close')"
      />
      <UForm
        v-if="user !== null"
        :state="user"
        class="space-y-4"
        @submit="onSubmit(this)"
      >
        <UFormGroup label="Prénom" name="firstname">
          <UInput v-model="user.firstname" />
        </UFormGroup>
        <UFormGroup label="Nom" name="lastname">
          <UInput v-model="user.lastname" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
          <UInput v-model="user.email" />
        </UFormGroup>
        <UFormGroup label="Adresse" name="address">
          <UInput v-model="user.address" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="user.password" />
        </UFormGroup>
        <UFormGroup label="Rôle" name="role">
          <UInput v-model="user.role" />
        </UFormGroup>
        <USelectMenu
          v-model="user.circuit"
          value-attribute="id"
          option-attribute="name"
          :options="circuits"
        >
          <template #option="{ option: circuit }">{{
            circuit.number + ' - ' + circuit.name
          }}</template></USelectMenu
        >
        <UButton type="submit">Enregistrer</UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup>
const { notify } = useUtils();
const supabase = useSupabaseClient();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const { user } = props;

const { data: circuits } = await supabase
  .from('trot_circuit')
  .select('id, name, number');

if (circuits) {
  circuits.push({ id: null, name: 'Aucun', number: '' });
}

const onSubmit = async (ctx) => {
  const { data, error } = await supabase
    .from('trot_user')
    .upsert(user)
    .select();

  if (data) {
    notify('success', user.firstname + ' a été modifié avec succès!');
    ctx.$emit('close');
  }
};
</script>

<style lang="scss" scoped></style>
