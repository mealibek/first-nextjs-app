export default async function getPosts(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
