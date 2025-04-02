import { fetchData } from "./fetch-data";

export async function deleteCourse(id: number): Promise<{ message: string }> {
  try {
    const response: { message: string } = await fetchData<{
      message: string;
    }>("http://localhost:4000/courses/delete", {
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
