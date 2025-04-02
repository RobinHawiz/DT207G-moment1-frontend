// Styles
import "@styles/style.scss";
// Functions
import { processFormData } from "./process-form-data";

const form: HTMLFormElement = document.querySelector("form")!;
form.addEventListener("submit", processFormData);
