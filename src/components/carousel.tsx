import React, { useState } from 'react';
import styles from '../styles/carousel.module.css';

export default function Carousel({ children }: { children: React.ReactElement[] }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div className={styles.carousel}>
      <div className={styles.contentsContainer}>
        {children.map((child) => (
          <div
            key={child.key}
            className={styles.carouselContent}
            style={{
              transform: `translateX(${-carouselIndex * 48}rem)`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className={styles.carouselIndicators}>
        {children.map((child, index) => (
          <button
            type="button"
            key={child.key}
            className={styles.carouselIndicator}
            style={{
              outline: index === carouselIndex ? '2px solid #3f6cff' : '',
            }}
            onClick={() => setCarouselIndex(index)}
          >
            {index}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={styles.carouselControlPrev}
        onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : prev))}
      >
        <span className="material-symbols-outlined">
          chevron_left
        </span>
      </button>
      <button
        type="button"
        className={styles.carouselControlNext}
        onClick={() => setCarouselIndex((prev) => (prev < children.length - 1 ? prev + 1 : prev))}
      >
        <span className="material-symbols-outlined">
          chevron_right
        </span>
      </button>
    </div>
  );
}
