// Styles
import "@styles/style.scss";
// Interfaces
import { ICourseInfo } from "@ts/ICourseInfo";
// Functions
import { fetchData } from "@ts/fetch-data";
import { displayDataList } from "@ts/display-data";
export async function main(): Promise<void> {
  const data: Array<ICourseInfo> = await fetchData<Array<ICourseInfo>>(
    "https://dt207g-moment1-backend.azurewebsites.net/courses/",
    {
      method: "GET",
    }
  );
  displayDataList(data);
}

main();
