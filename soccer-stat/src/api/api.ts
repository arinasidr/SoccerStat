const BASE_URL = "http://localhost:3001/api";

export async function request(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error(`Ошибка при запросе: ${res.status}`);
  }

  return res.json();
}
