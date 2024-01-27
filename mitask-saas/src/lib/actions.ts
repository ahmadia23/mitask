export const getTasks = async () => {
  try {
    const result = await fetch("http://localhost:5001/api/tasks");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTask = async (id: string) => {
  try {
    const result = await fetch(`http://localhost:5001/api/tasks/${id}`);
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjects = async () => {
  try {
    const result = await fetch("http://localhost:5001/api/projects");
    const response = await result.json();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
