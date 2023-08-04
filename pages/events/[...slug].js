import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  // first render is empty
  if (!filteredData) {
    return <p className='center'>Loading...</p>;
  }
  // second render has data
  const yearFiltered = filteredData[0];
  const monthFiltered = filteredData[1];
  const yearNum = +yearFiltered;
  const monthNum = +monthFiltered;
  // handle bad writen slug, not a number
  if (
    isNaN(yearNum) ||
    isNaN(monthNum) ||
    yearNum > 2030 ||
    yearNum < 2021 ||
    monthNum > 12 ||
    monthNum < 1
  ) {
    return <p>Invalid filter. Please update your values.</p>;
  }
  const eventsFiltered = getFilteredEvents({ year: yearNum, month: monthNum });
  // if empty array
  if (!eventsFiltered || eventsFiltered.length === 0) {
    return <p>No events found in the chosen filter.</p>;
  }
  return (
    <>
      <h1>Filtered Events Page</h1>
    </>
  );
}
