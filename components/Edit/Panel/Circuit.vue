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
      <UForm :state="user" class="space-y-4" @submit="onSubmit(this)">
        <UFormGroup label="Numéro" name="number">
          <UInput v-model="user.number" />
        </UFormGroup>
        <UFormGroup label="Nom" name="name">
          <UInput v-model="user.name" />
        </UFormGroup>
        <UButton type="submit">Enregistrer</UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup>
const toast = useToast();
const supabase = useSupabaseClient();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const { user } = props;

const onSubmit = async (ctx) => {
  const { data, error } = await supabase
    .from('trot_circuit')
    .upsert(user)
    .select();
  if (data) {
    toast.add({
      id: 'update_downloaded',
      title: 'Update downloaded.',
      description: 'Usager modifié avec succès!',
      icon: 'i-heroicon-success-24',
      timeout: 2000,
    });
    ctx.$emit('close');
  }
};
</script>

<style lang="scss" scoped></style>
