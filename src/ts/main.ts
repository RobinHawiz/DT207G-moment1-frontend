// Styles
import "@styles/style.scss";
// Interfaces
import { ICourseInfo } from "@ts/ICourseInfo";
// Functions
import { fetchData } from "@ts/fetch-data";
import { displayDataList } from "@ts/display-data";
// Env variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function main(): Promise<void> {
  const data: Array<ICourseInfo> = await fetchData<Array<ICourseInfo>>(
    `${API_BASE_URL}/courses`,
    {
      method: "GET",
    }
  );
  displayDataList(data);
}

main();
