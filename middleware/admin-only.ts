export default defineNuxtRouteMiddleware(() => {
  // const { isAdmin, isAuthenticated } = useAuthUser();
  // const isAuthenticated = useAuthenticated();
  // const isAdmin = useAdmin();
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
  if (!isAdmin.value) {
    return navigateTo('/');
  }
});
