// plugin에서 provide하면 type 추론됨
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}`,
    },
  };
});
