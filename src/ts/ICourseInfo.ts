export interface ICourseInfo {
  Id: number;
  CourseCode: string;
  CourseName: string;
  Progression: string;
  Syllabus: string;
}

export type CoursePayload = Omit<ICourseInfo, "Id">;
