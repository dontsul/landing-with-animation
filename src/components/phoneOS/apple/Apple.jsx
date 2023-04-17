import React from 'react';
import styles from './apple.module.scss';

export const Apple = ({ setOs }) => {
  return (
    <div
      onMouseEnter={() => setOs('IOS')}
      onMouseLeave={() => setOs('')}
      className={styles.apple}
    >
      <svg
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5225 0.499996C14.9911 0.603355 13.3521 1.51461 12.3375 2.74437C11.4494 3.82648 10.7048 5.41484 10.9875 7.06437C10.7344 6.98632 10.5044 6.97789 10.2281 6.87875C9.47506 6.61086 8.61444 6.32187 7.54499 6.32187C5.42085 6.32187 3.24608 7.58539 1.87499 9.69687C-0.120483 12.7639 0.280298 18.1618 3.30936 22.775C3.84303 23.585 4.4653 24.4688 5.23311 25.1712C6.00092 25.8737 6.92905 26.4095 8.01749 26.42C8.94772 26.4305 9.5953 26.1205 10.1775 25.8631C10.7597 25.6058 11.3018 25.378 12.3206 25.3737C12.3269 25.3737 12.3312 25.3737 12.3375 25.3737C13.3521 25.3653 13.8773 25.5889 14.4469 25.8462C15.0164 26.1036 15.6576 26.4284 16.59 26.42C17.6995 26.4116 18.6424 25.8041 19.425 25.0531C20.2076 24.3022 20.8509 23.3804 21.3825 22.5725C22.144 21.4123 22.4498 20.7795 23.0362 19.4844C23.0974 19.3494 23.0995 19.1933 23.0405 19.0562C22.9835 18.9191 22.8717 18.8115 22.7325 18.7587C20.813 18.0331 19.7182 16.3351 19.56 14.54C19.4018 12.7449 20.1612 10.8971 22.0744 9.84875C22.2157 9.77281 22.3148 9.63992 22.3486 9.48382C22.3802 9.32773 22.3423 9.1632 22.2431 9.03875C20.8699 7.33226 18.9377 6.32187 17.0456 6.32187C15.839 6.32187 14.9531 6.60664 14.2275 6.87875C14.1073 6.92515 14.0187 6.92093 13.9069 6.96312C14.643 6.575 15.2927 6.03711 15.78 5.41062C16.6659 4.27367 17.3494 2.65578 17.0962 0.955621C17.054 0.677183 16.803 0.478902 16.5225 0.499996ZM15.9487 1.7825C15.9129 2.87304 15.5395 3.94039 14.9194 4.73562C14.2697 5.57093 13.177 6.1489 12.1181 6.32187C12.1371 5.27351 12.5505 4.18718 13.1812 3.41937C13.8436 2.61781 14.9405 2.03984 15.9487 1.7825ZM7.54499 7.40187C8.41616 7.40187 9.11436 7.62757 9.85686 7.89125C10.5994 8.15492 11.3819 8.465 12.3037 8.465C13.2044 8.465 13.9174 8.15281 14.6156 7.89125C15.3138 7.62968 16.0099 7.40187 17.0456 7.40187C18.3977 7.40187 19.8595 8.10429 21.0112 9.32562C19.1676 10.6271 18.3049 12.6563 18.48 14.6244C18.6551 16.6135 19.8532 18.5014 21.8212 19.4844C21.3951 20.4125 21.1146 21.0263 20.4881 21.9819C19.9713 22.7687 19.3575 23.6293 18.6825 24.2769C18.0075 24.9244 17.2924 25.3337 16.5731 25.34C15.8791 25.3463 15.4847 25.1396 14.8856 24.8675C14.2865 24.5954 13.5124 24.2832 12.3206 24.2937C11.1309 24.3001 10.3462 24.5996 9.73874 24.8675C9.13124 25.1354 8.73256 25.3463 8.03436 25.34C7.29608 25.3337 6.61053 24.9751 5.95874 24.3781C5.30694 23.7812 4.71842 22.9669 4.20374 22.1844C1.36874 17.8644 1.14092 12.7892 2.76936 10.2875C3.96327 8.45023 5.8596 7.40187 7.54499 7.40187Z"
          fill="#E1E3E9"
        />
      </svg>
    </div>
  );
};
