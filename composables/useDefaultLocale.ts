export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback);

  // Cannot read properties of undefined (reading 'language')
  // web api인 navigator가 초기 ssr랜더링시 호출되어 오류 발생
  // locale.value = navigator.language.split('-')[0];

  if (process.server) {
    const reqLocale = useRequestHeaders()
      ['accept-language'].split(';')[0]
      .split(',')[1];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (process.client) {
    locale.value = navigator.language.split('-')[0];
  }

  return locale;
};
