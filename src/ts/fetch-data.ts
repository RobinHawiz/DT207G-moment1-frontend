import { IErrorMessage } from "./IErrorMessage";

export async function fetchData<T>(
  url: string,
  options: {
    method?: "POST" | "GET" | "DELETE";
    headers?: HeadersInit;
    body?: BodyInit;
  } = {}
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const contentType: string | null = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorBody: IErrorMessage = await response.json();
        throw errorBody;
      } else {
        const fallbackText = await response.text();
        throw new Error(`Request failed (${response.status}): ${fallbackText}`);
      }
    }
    const data: T = await response.json();
    return data;
  } catch (error: any) {
    throw error instanceof Error ? error.message : error;
  }
}
