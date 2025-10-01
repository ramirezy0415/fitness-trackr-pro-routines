import { useAuth } from "../auth/AuthContext";
import { getRoutines, createRoutine } from "../api/routines";

export default function RoutineForm({ syncRoutines }) {
  const { token } = useAuth();

  const handleFormSubmit = async (formData) => {
    const name = formData.get("name");
    const goal = formData.get("goal");
    try {
      await createRoutine(token, {
        name,
        goal,
      });
      syncRoutines();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form action={handleFormSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Routine Goal
        <input type="text" name="goal" />
      </label>
      <button>Submit</button>
    </form>
  );
}
