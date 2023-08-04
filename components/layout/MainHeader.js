import Link from 'next/link';
import styles from '@/styles/MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>Next Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
