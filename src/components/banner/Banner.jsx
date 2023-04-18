import { TextMask } from '../textMask/TextMask';
import styles from './banner.module.scss';
import { PhoneOS } from '../phoneOS/PhoneOS';
export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.leftContent}>
        <PhoneOS />
        <div className={styles.wrapText}>
          <div className={styles.text}>
            CHOOSE YOUR WINTER{' '}
            <span className={styles.look}>
              LOOK
              <span className={styles.star}>
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.31 31.69L4.11 27.37L10.95 17.83L0.78 13.96L3.66 6.49L13.02 11.62L11.94 0.0999944H21.12L19.95 11.62L29.49 6.49L32.19 13.96L22.11 17.92L28.95 27.37L21.57 31.69L16.53 21.34L11.31 31.69Z"
                    fill="black"
                  />
                </svg>
              </span>
            </span>
            APPAREL
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <TextMask />
      </div>
    </div>
  );
};
