import Button from '../ui/Button';
import styles from '@/styles/ResultsTitle.module.css';

export default function ResultsTitle(props) {
  const { date } = props;
  const dateReadable = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <section className={styles.title}>
      <h1>Events in {dateReadable}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}
