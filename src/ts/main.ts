// Styles
import "@styles/style.scss";
// Interfaces
import { ICourseInfo } from "@ts/ICourseInfo";
// Functions
import { fetchData } from "@ts/fetch-data";
import { displayDataList } from "@ts/display-data";
async function main(): Promise<void> {
  const data: Array<ICourseInfo> = await fetchData<Array<ICourseInfo>>(
    "http://localhost:4000/courses/",
    {
      method: "GET",
    }
  );
  displayDataList(data);
}

main();
