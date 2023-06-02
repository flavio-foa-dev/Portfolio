import { useEffect, useState } from 'react';
import styles from './Carrossel.module.css';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface ImageProps {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageProps[];
  intervalTime: number;
}

export default function Carrossel({images, intervalTime}:CarouselProps) {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);




  function nextImage(){
    setActiveIndex(activeIndex == images.length -1 ? 0 : activeIndex + 1 );
  }

  function previousImage(){
    setActiveIndex(activeIndex === 0 ? images.length -1 : activeIndex - 1 );
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_inner}>
        {images.map((_image, index) => (
          <div
            key={index}
            className={`${styles.carousel_item} ${index == activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${images[activeIndex].src})` }}
          >
            <div className={styles.carousel_caption}>
              <p>{images[activeIndex].alt}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.carousel_control_prev} onClick={previousImage}>
        <span className={styles.carousel_control_previcon}><CaretLeft size={32} color="#fff" /></span>
      </button>
      <button className={styles.carousel_control_next} onClick={nextImage}>
        <span className={styles.carousel_control_nexticon}><CaretRight size={32} color="#fff" /></span>
      </button>
    </div>
  );



}
