export default async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
