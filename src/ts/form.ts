// Styles
import "@styles/style.scss";
// Functions
import { initFormValidation } from "@ts/validate-form";
import { processFormData } from "./process-form-data";

initFormValidation(processFormData);
