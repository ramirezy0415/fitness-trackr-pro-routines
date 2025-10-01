import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
export default function ActivityDetails({
  selectedActivity,
  setSelectedActivity,
  syncActivities,
}) {
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, selectedActivity.id);
      syncActivities();
      setSelectedActivity(null);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section>
      <h2>{selectedActivity.name}</h2>
      <p>{selectedActivity.description}</p>
      <p>Created By: {selectedActivity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
