import { fetchData } from "./fetch-data";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function deleteCourse(id: number): Promise<{ message: string }> {
  try {
    const response: { message: string } = await fetchData<{
      message: string;
    }>(`${API_BASE_URL}/courses/delete`, {
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
