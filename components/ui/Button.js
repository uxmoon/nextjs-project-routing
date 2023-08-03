import Link from 'next/link';
import styles from '@/styles/Button.module.css';

export default function Button(props) {
  const { link, children } = props;
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}
