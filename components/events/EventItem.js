import Link from 'next/link';

export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  const dateFormatted = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressFormatted = location.replace(', ', '\n');
  const linkFomatted = `/events/${id}`;
  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{dateFormatted}</time>
          </div>
          <div>
            <address>{addressFormatted}</address>
          </div>
        </div>
        <div>
          <Link href={linkFomatted}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}
