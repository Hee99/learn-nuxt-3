export default defineEventHandler((event) => {
  // const userJsonString = getCookie(event, '__user');
  // if (!userJsonString) {
  //   return { user: null };
  // }

  // const user = JSON.parse(userJsonString);

  // const user = getUserFromEvent(event);

  const user = event.context.user;

  if (!user) {
    return { user: null };
  }

  return {
    user,
  };
});
