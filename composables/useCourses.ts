import type { CourseWithPath } from '~/types/course';

interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = async (): Promise<CoursesReturn> => {
  // const courses = coursesData.map((item) => ({
  //   ...item,
  //   rating: item.rating.toFixed(1),
  //   reviewsCount: item.reviewsCount.toLocaleString(),
  //   studentCount: item.studentCount.toLocaleString(),
  //   path: `/course/${item.courseSlug}`,
  // }));
  // return { courses };
  const { data, error } = await useFetch('/api/courses');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return { courses: data.value as CourseWithPath[] };
};
