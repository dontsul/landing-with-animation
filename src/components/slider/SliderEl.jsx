import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from '../../assets/im.jpg';
import second from '../../assets/im2.jpg';
import third from '../../assets/im3.jpg';
import four from '../../assets/im4.jpg';
import five from '../../assets/im5.jpg';
import six from '../../assets/im6.jpg';
import styles from './sliderEl.module.scss';

export const SliderEl = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: true,
    infinite: true,
    swipe: true,
    touchMove: true,
    wheel: true,

    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    swipeToSlide: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <h2 className={styles.title}>CHOOSE LOOKS</h2>
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img src={first} alt="first" />
        </div>
        <div>
          <img src={second} alt="second" />
        </div>
        <div>
          <img src={third} alt="third" />
        </div>
        <div>
          <img src={four} alt="four" />
        </div>
        <div>
          <img src={five} alt="five" />
        </div>
        <div>
          <img src={six} alt="six" />
        </div>
        <div>
          <img src={third} alt="third" />
        </div>
        <div>
          <img src={four} alt="four" />
        </div>
      </Slider>
      <div className={styles.wrapBtn}>
        {' '}
        <button className={styles.btn} onClick={prevSlide}>
          <svg
            width="17"
            height="29"
            viewBox="0 0 17 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.944 0.423853C15.3569 -0.141284 14.4064 -0.141284 13.8208 0.423853L1.40455 12.4055C0.231848 13.5372 0.231848 15.3731 1.40455 16.5048L13.9109 28.5757C14.492 29.135 15.4305 29.1426 16.0191 28.5905C16.6212 28.0269 16.6272 27.0976 16.0356 26.5253L4.58935 15.4803C4.00225 14.9138 4.00225 13.9965 4.58935 13.43L15.944 2.47283C16.5311 1.90769 16.5311 0.990426 15.944 0.423853Z"
              fill="#888888"
            />
          </svg>
        </button>
        <button className={styles.btn} onClick={nextSlide}>
          <svg
            width="17"
            height="29"
            viewBox="0 0 17 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.05597 0.423853C1.64308 -0.141284 2.59355 -0.141284 3.17916 0.423853L15.5954 12.4055C16.7682 13.5372 16.7682 15.3731 15.5954 16.5048L3.08906 28.5757C2.50797 29.135 1.56953 29.1426 0.980926 28.5905C0.378805 28.0269 0.37281 27.0976 0.964419 26.5253L12.4106 15.4803C12.9978 14.9138 12.9978 13.9965 12.4106 13.43L1.05597 2.47283C0.46887 1.90769 0.46887 0.990426 1.05597 0.423853Z"
              fill="#888888"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
