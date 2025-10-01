import { useAuth } from "../auth/AuthContext";
import { getRoutines } from "../api/routines";
import { useEffect, useState } from "react";

import RoutineForm from "./RoutineForm";

export default function Routines() {
  const { token } = useAuth();
  const [routineList, setRoutineList] = useState([]);
  const syncRoutines = async () => {
    const routines = await getRoutines();
    setRoutineList(routines);
  };

  useEffect(() => {
    syncRoutines();
  }, []);

  return (
    <section>
      <h1>Routines</h1>
      <ul>
        {routineList.map((routine) => {
          return <li key={routine.id}>{routine.name}</li>;
        })}
      </ul>
      {!token ? (
        <p>Please Sign in to create routines</p>
      ) : (
        <RoutineForm syncRoutines={syncRoutines} />
      )}
    </section>
  );
}
