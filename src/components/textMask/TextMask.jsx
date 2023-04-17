import styles from './textMask.module.scss';

export const TextMask = () => {
  const letters = ['C', 'r', 'e', 'a', 't', 'e'];

  return (
    <div className={styles.wrapMask}>
      <p className={styles.bg}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`${styles.letter} ${styles[`letter${index}`]}`}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};
