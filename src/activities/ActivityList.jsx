import { Link } from "react-router";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  return (
    <>
      <section>
        <li>
          <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
        </li>
      </section>
    </>
  );
}
