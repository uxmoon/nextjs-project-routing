import { useRouter } from 'next/router';
import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
