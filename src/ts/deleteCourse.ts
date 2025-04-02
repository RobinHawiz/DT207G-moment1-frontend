import { fetchData } from "./fetch-data";

export async function deleteCourse(id: number): Promise<{ message: string }> {
  try {
    const response: { message: string } = await fetchData<{
      message: string;
    }>("https://dt207g-moment1-backend.azurewebsites.net/courses/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return response;
  } catch (error) {
    throw error;
  }
}
