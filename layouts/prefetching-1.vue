<template>
  <q-page padding>
    <div class="text-center q-py-xl">
      <div class="text-h4">
        {{ $route.path }}
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
console.log('prefetching-1');
</script>

<!-- component setup hook에서 컴파일됨 -->
<script setup lang="ts"></script>

<style scoped></style>
