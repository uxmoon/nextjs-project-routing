import Link from 'next/link';
import styles from '@/styles/EventItem.module.css';

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
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{dateFormatted}</time>
          </div>
          <div className={styles.address}>
            <address>{addressFormatted}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={linkFomatted}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}
