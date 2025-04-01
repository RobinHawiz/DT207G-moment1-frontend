import { CoursePayload } from "@ts/ICourseInfo";
import { fetchData } from "./fetch-data";

export async function processFormData(e: Event): Promise<void> {
  // Typecasting because typescript is acting up.
  const form: HTMLFormElement = <HTMLFormElement>e.target;

  const courseCodeInput: HTMLInputElement = form.querySelector("#course-code")!;
  const courseNameInput: HTMLInputElement = form.querySelector("#course-name")!;
  const progressionInput: HTMLInputElement =
    form.querySelector("#progression")!;
  const syllabusInput: HTMLInputElement = form.querySelector("#syllabus")!;

  const courseCode: string = courseCodeInput.value;
  const courseName: string = courseNameInput.value;
  const progression: string = progressionInput.value;
  const syllabus: string = syllabusInput.value;

  // Create a new course object using the form data.
  const coursePayload: CoursePayload = {
    courseCode,
    courseName,
    progression,
    syllabus,
  };

  const response: { message: string } = await fetchData<{ message: string }>(
    "http://localhost:4000/courses/insert",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coursePayload),
    }
  );

  alert(response.message);
}
