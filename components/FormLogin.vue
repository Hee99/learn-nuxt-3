<template>
  <q-form class="q-gutter-lg" @submit.prevent="handleLoginSubmit">
    <q-input v-model="form.email" filled label="email" />

    <q-input v-model="form.password" filled type="password" label="password" />

    <div v-if="error" class="text-red text-center">{{ error.message }}</div>

    <div class="q-mt-lg">
      <q-btn
        class="full-width"
        label="Login"
        type="submit"
        size="lg"
        color="primary"
        no-caps
        :loading="loading"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
// import { useAuth } from '~/composables/auth/useAuth';

// const { signIn } = useAuth();
const { signIn } = useAuthStore();
const emit = defineEmits<{
  success: [];
}>();
// const emit = defineEmits(['success']);

const form = ref({
  email: '',
  password: '',
});
const error = ref<Error | null>(null);
const loading = ref(false);

const handleLoginSubmit = async () => {
  try {
    error.value = null;
    loading.value = true;

    // login business logic
    await signIn(form.value.email, form.value.password);

    emit('success');
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
    } else {
      throw Error;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
