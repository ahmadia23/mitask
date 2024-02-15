export async function GET_PROJECT(id: string) {
  try {
    const result = await fetch(`http://localhost:5001/api/projects/${id}`, {
      next: { revalidate: 60 },
    });

    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
