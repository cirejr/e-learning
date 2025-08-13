export default async function getPrograms() {
  const url = `${process.env.API_URL}/courses/programs`;

  const data = await fetch(url, {
    method: 'GET',
  });

  if (!data.ok) {
    throw new Error('Failed to fetch programs');
  }

  const programs = await data.json();
  return programs.data;
}
