<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <!-- <div class="text-h4">All Courses</div> -->
      <!-- <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요.</p> -->
      <PageTitle title="All Courses" />
      <PageDescription description="웹 개발 입문부터 실전까지 학습해보세요." />
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ title, courseSlug, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <NuxtLink v-slot="{ navigate }" custom :to="path">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
            @click="navigate"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = await useCourses();
</script>

<style scoped></style>
