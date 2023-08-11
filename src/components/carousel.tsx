import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export default function Carousel({ children }: { children: React.ReactElement[] }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselLength = children.length;
  const containerWidth = `w-[${80 * children.length}rem]`;

  useInterval(() => {
    const nextCarouselIndex = carouselIndex + 1;
    if (nextCarouselIndex >= carouselLength) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(nextCarouselIndex);
    }
  }, 3000);

  const handleCarouselIndex = (nextIndex: number) => {
    if (nextIndex < 0) {
      setCarouselIndex(carouselLength - 1);
    } else if (nextIndex >= carouselLength) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(nextIndex);
    }
  };

  return (
    <div className="relative h-[16rem] w-[80rem] overflow-hidden">
      <ul className={`flex ${containerWidth}`}>
        {children.map((child) => (
          <li
            key={child.key}
            className="h-[16rem] w-[80rem] transition duration-500 ease-in-out"
            style={{ transform: `translateX(${-80 * carouselIndex}rem)` }}
          >
            {child}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="absolute left-0 top-0 flex h-full items-center px-6"
        onClick={() => handleCarouselIndex(carouselIndex - 1)}
      >
        <FontAwesomeIcon
          icon={icon({ name: 'chevron-left', style: 'solid' })}
          size="lg"
        />
      </button>
      <button
        type="button"
        className="absolute right-0 top-0 flex h-full items-center px-6"
        onClick={() => handleCarouselIndex(carouselIndex + 1)}
      >
        <FontAwesomeIcon
          icon={icon({ name: 'chevron-right', style: 'solid' })}
          size="lg"
        />
      </button>
    </div>
  );
}
