<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <RouterView /> -->
  </NuxtLayout>
</template>
<script setup lang="ts">
// const nuxtApp = useNuxtApp();
// console.log('nuxtApp : ', nuxtApp);

// vue application instance
// app.component() : 전역 컴포넌트 등록
// app.directive() : directive 등록
// app.use() : 플러그인 설치
// nuxtApp.vueApp.component();

// provide
// nuxtApp.provide('hello', (msg: string) => `Hello ${msg}`);
// title: 'Vue & Nuxt 강의',
//       meta: [{ name: 'description', content: '짐코딩 Vue & Nuxt 강의입니다.' }],
//     },
const title = ref('Vue & Nuxt 강의');
const description = ref('짐코딩 Vue & Nuxt 강의입니다.');

// useHead({
//   title,
//   meta: [{ name: 'description', content: description }],
// });
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
});
</script>
