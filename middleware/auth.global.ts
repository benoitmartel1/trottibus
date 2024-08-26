export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useSettings();

  if (user.value !== undefined || to.fullPath == '/login') {
    return;
  }
  console.log('User not logged out, redirecting...');
  return navigateTo('/login', { redirectCode: 301 });
});
