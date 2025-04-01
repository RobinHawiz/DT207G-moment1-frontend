// Styles
import "@styles/style.scss";
// Interfaces
import { ICourseInfo } from "@ts/ICourseInfo";
// Classes
import { DataList } from "@ts/DataList";
// Functions
import { fetchData } from "@ts/fetch-data";
import { displayDataList } from "@ts/display-data";
import { initFormValidation } from "@ts/validate-form";
import { processFormData } from "./process-form-data";

async function main(): Promise<void> {
  const data: DataList<ICourseInfo> = new DataList<ICourseInfo>(
    await fetchData<Array<ICourseInfo>>("http://localhost:4000/courses/", {
      method: "GET",
    })
  );
  displayDataList(data.getDataList());
  initFormValidation(processFormData);
}

main();
