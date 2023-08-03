import EventItem from './EventItem';
export default function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((evt) => (
        <EventItem
          key={evt.id}
          id={evt.id}
          location={evt.location}
          date={evt.date}
          image={evt.image}
        />
      ))}
    </ul>
  );
}
