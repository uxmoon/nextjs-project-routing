import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}
