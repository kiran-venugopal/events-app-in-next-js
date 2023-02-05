import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../data/dummy-data";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { firestoreObj } from "../../api/firebase";
import { getEvents } from "../../api/db";

const EventsPage = ({ events }) => {
  //const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getEvents();
  console.log({ events });
  return {
    props: {
      events,
      revalidate: 60 * 60, // 1 hour
    },
  };
}

export default EventsPage;
