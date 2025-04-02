import { CoursePayload } from "@ts/ICourseInfo";
import { fetchData } from "./fetch-data";

export async function processFormData(e: Event): Promise<void> {
  e.preventDefault();
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

  try {
    const response: { message: string } = await fetchData<{ message: string }>(
      "https://dt207g-moment1-backend.azurewebsites.net/courses/insert",
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
  } catch (error: any) {
    if (error.errors !== undefined) {
      // We reverse the order of the error array because we want a correct error order to be shown when a user types an invalid input value.
      error.errors
        .slice()
        .reverse()
        .forEach((error: any) => {
          switch (error.path) {
            case "courseCode":
              validateField(courseCodeInput, error.msg);
              break;
            case "courseName":
              validateField(courseNameInput, error.msg);
              break;
            case "progression":
              validateField(progressionInput, error.msg);
              break;
            case "syllabus":
              validateField(syllabusInput, error.msg);
              break;
            default:
              break;
          }
        });
    } else {
      console.log(error);
    }
  }
  // Reset validation state as the user types
  courseCodeInput.addEventListener("input", () => {
    validateField(courseCodeInput, "");
  });

  courseNameInput.addEventListener("input", () => {
    validateField(courseNameInput, "");
  });

  progressionInput.addEventListener("input", () => {
    validateField(progressionInput, "");
  });

  syllabusInput.addEventListener("input", () => {
    validateField(syllabusInput, "");
  });
}

function validateField(input: HTMLInputElement, message: string): void {
  input.setCustomValidity(message); // Set the custom validity message for the field
  input.reportValidity(); // Display the validation message to the user
}
