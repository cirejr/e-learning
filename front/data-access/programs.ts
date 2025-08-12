export default async function getPrograms() {
  const url = `${process.env.API_URL}/courses/programs`;

  console.log(url);
  const data = await fetch(url, {
    method: 'GET',
  });

  console.log(data);

  if (!data.ok) {
    throw new Error('Failed to fetch programs');
  }

  const programs = await data.json();
  return programs.data;
}
