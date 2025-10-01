const API = import.meta.env.VITE_API;

/** Fetches an array of routines from the API. */
export async function getRoutines() {
  try {
    const response = await fetch(`${API}/routines`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}
/** Fetches an array of routines from the API. */
export async function createRoutine(token, routine) {
  try {
    if (!token) {
      throw Error("You must be signed in to create a new routine.");
    }

    const response = await fetch(`${API}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(routine),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}
