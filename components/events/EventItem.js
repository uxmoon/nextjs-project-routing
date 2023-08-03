import styles from '@/styles/EventItem.module.css';
import Button from '../ui/Button';
import CalendarIcon from '../icons/CalendarIcon';
import LocationIcon from '../icons/LocationIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

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
            <CalendarIcon />
            <time>{dateFormatted}</time>
          </div>
          <div className={styles.address}>
            <LocationIcon />
            <address>{addressFormatted}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={linkFomatted}>
            Explore event{' '}
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
