export interface ICourseInfo {
  id: number;
  courseCode: string;
  courseName: string;
  progression: string;
  syllabus: string;
}

export type CoursePayload = Omit<ICourseInfo, "id">;
