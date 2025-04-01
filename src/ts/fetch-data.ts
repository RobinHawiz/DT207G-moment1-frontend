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
      throw new Error(`Network error: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}
