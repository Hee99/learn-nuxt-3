import type { UserWithoutPassword } from '~/types/user';

export const useAuthUser = () =>
  useState<Maybe<UserWithoutPassword>>('user', () => null);

// const authUser = ref<Maybe<UserWithoutPassword>>(null);

// export const useAuthUser = () => {
//   const isAuthenticated = computed(() => !!authUser.value);
//   const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));

//   return {
//     authUser,
//     isAuthenticated,
//     isAdmin,
//   };
// };
