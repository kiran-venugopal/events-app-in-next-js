import EventList from "../components/events/event-list";
import DUMMY_EVENTS from "../data/dummy-data";

export const HomePage = () => {
  return (
    <div>
      <EventList items={DUMMY_EVENTS} />
    </div>
  );
};

export default HomePage;
