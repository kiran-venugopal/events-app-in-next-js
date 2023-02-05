import { Fragment } from "react";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-logistics";
import EventContent from "../../components/events/event-content";
import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventItem } from "../../api/db";

export const EventDetailPage = ({ event }) => {
  //const router = useRouter();

  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const event = await getEventItem(params.eventId);
  return {
    props: { event },
  };
}
