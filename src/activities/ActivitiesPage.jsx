import { useState, useEffect } from "react";
import { getActivities, getActivity } from "../api/activities";

import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";
import { Outlet, useParams } from "react-router";
import ActivityDetails from "./ActivityDetails";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  const { activityId } = useParams();
  const syncSelectedActivity = async () => {
    if (!activityId) {
      setSelectedActivity(null);
      return;
    }
    const data = await getActivity(activityId);
    setSelectedActivity(data);
  };

  useEffect(() => {
    syncActivities();
  }, []);

  useEffect(() => {
    syncSelectedActivity();
  }, [activityId]);

  return (
    <>
      <h1>Activities</h1>
      <ActivityList activities={activities} syncActivities={syncActivities}>
        <Outlet />
      </ActivityList>
      <ActivityForm syncActivities={syncActivities} />

      {!selectedActivity ? (
        <p>Please Select an Activity to view</p>
      ) : (
        <ActivityDetails
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
          syncActivities={syncActivities}
        />
      )}
    </>
  );
}
