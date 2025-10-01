import { useAuth } from "../auth/AuthContext";
import { getRoutines } from "../api/routines";
import { useEffect, useState } from "react";
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
      {token ? <p>Display Form</p> : <p>Do not display form</p>}
    </section>
  );
}
