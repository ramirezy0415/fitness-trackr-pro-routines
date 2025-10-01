export default function ActivityDetails({ selectedActivity }) {
  return (
    <section>
      <h2>{selectedActivity.name}</h2>
      <p>{selectedActivity.description}</p>
      <p>Created By: {selectedActivity.creatorName}</p>
    </section>
  );
}
