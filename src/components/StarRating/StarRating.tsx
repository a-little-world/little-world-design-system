import React, { KeyboardEvent, useCallback, useState } from 'react';

import { StarIcon } from '../Icon';
import {
  Rating,
  RatingContainer,
  StarContainer,
  StarOverlay,
  VisuallyHidden,
} from './styles';

interface StarRatingProps {
  maxRating?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
  name?: string;
  id?: string;
}

const StarRating = ({
  maxRating = 5,
  initialRating = 0,
  onChange,
  name = 'rating',
  id = 'star-rating',
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [focusedStar, setFocusedStar] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const newRating = percent <= 0.5 ? starIndex + 0.5 : starIndex + 1;
    setHoverRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const updateRating = useCallback(
    (newRating: number) => {
      setRating(newRating);
      onChange?.(newRating);
    },
    [onChange],
  );

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    let newRating = rating;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newRating = Math.max(0, starIndex);
        updateRating(newRating);
        setFocusedStar(Math.max(0, starIndex - 1));
        break;
      case 'ArrowRight':
        e.preventDefault();
        newRating = Math.min(maxRating, starIndex + 2);
        updateRating(newRating);
        setFocusedStar(Math.min(maxRating - 1, starIndex + 1));
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        newRating = starIndex + 1;
        updateRating(newRating);
        break;
      default:
        break;
    }
  };

  const currentRating = hoverRating || rating;

  return (
    <RatingContainer role="group" aria-label="Star rating">
      <VisuallyHidden id={`${id}-label`}>
        Rating: {currentRating} out of {maxRating} stars
      </VisuallyHidden>

      {[...Array(maxRating)].map((_, index) => {
        const fillAmount = Math.max(0, Math.min(1, currentRating - index));
        const starNumber = index + 1;

        return (
          <StarContainer
            key={index}
            onClick={() => updateRating(starNumber)}
            onMouseMove={e => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            onKeyDown={e => handleKeyDown(e, index)}
            onFocus={() => setFocusedStar(index)}
            onBlur={() => setFocusedStar(null)}
            tabIndex={0}
            role="radio"
            aria-checked={rating >= starNumber}
            aria-label={`${starNumber} star${starNumber === 1 ? '' : 's'}`}
            aria-describedby={`${id}-label`}
            name={name}
          >
            {/* Background star */}
            <StarIcon
              width={24}
              height={24}
              color="#d1d5db"
              fill="#d1d5db"
              aria-hidden="true"
            />

            {/* Filled overlay star */}
            <StarOverlay fillAmount={fillAmount}>
              <StarIcon
                width={24}
                height={24}
                color="#facc15"
                fill="#facc15"
                aria-hidden="true"
              />
            </StarOverlay>
          </StarContainer>
        );
      })}
      <Rating aria-hidden="true">{currentRating || 0}</Rating>
    </RatingContainer>
  );
};

export default StarRating;
