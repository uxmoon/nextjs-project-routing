import EventItem from './EventItem';
import styles from '@/styles/EventList.module.css';

export default function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
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
