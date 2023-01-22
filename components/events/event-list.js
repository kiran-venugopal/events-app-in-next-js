import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map(({ title, address, id, location, image, date }) => (
        <EventItem
          key={id}
          title={title}
          address={address}
          id={id}
          location={location}
          image={image}
          date={date}
        />
      ))}
    </ul>
  );
};

export default EventList;
