import React, { KeyboardEvent, useCallback, useState } from 'react';
import { useTheme } from 'styled-components';

import { StarIcon } from '../Icon';
import {
  Rating,
  RatingContainer,
  StarContainer,
  StarOverlay,
  Stars,
  TextRating,
  VisuallyHidden,
} from './styles';

const roundToHalf = (value: number): number => {
  const rounded = Math.round(value * 2) / 2;
  return Math.max(0, Math.min(rounded, 5));
};

const DEFAULT_RATINGS = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];

interface StarRatingProps {
  className?: string;
  displayNumber?: boolean;
  displayTextRatings?: boolean;
  id?: string;
  initialRating?: number;
  ratings?: string[];
  maxRating?: number;
  name?: string;
  onChange?: (rating: number) => void;
}

const StarRating = ({
  className,
  displayNumber = false,
  displayTextRatings = false,
  id = 'star-rating',
  initialRating = 0,
  name = 'rating',
  maxRating = 5,
  onChange,
  ratings = DEFAULT_RATINGS,
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [focusedStar, setFocusedStar] = useState<number | null>(null);
  const theme = useTheme();

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const newRating = percent <= 0.5 ? starIndex + 0.5 : starIndex + 1;
    setHoverRating(roundToHalf(newRating));
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const updateRating = useCallback(
    (newRating: number) => {
      const roundedRating = roundToHalf(newRating);
      setRating(roundedRating);
      onChange?.(roundedRating);
    },
    [onChange],
  );

  const calculateRating = (starNumber: number) => {
    // Toggle between whole, half, and unrated for clicked star
    let newRating;
    if (rating === starNumber) {
      newRating = starNumber - 0.5;
    } else if (rating === starNumber - 0.5) {
      newRating = starNumber - 1;
    } else {
      newRating = starNumber;
    }

    updateRating(newRating);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    let newRating = rating;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        // If we're at a whole number, go down by 0.5, otherwise go down by 1
        newRating =
          Math.floor(rating) === rating
            ? Math.max(0, rating - 0.5)
            : Math.max(0, Math.floor(rating));
        updateRating(newRating);
        setFocusedStar(Math.max(0, starIndex - 1));
        break;
      case 'ArrowRight':
        e.preventDefault();
        // If we're at a whole number, go up by 0.5, otherwise go up by 1
        newRating =
          Math.floor(rating) === rating
            ? Math.min(maxRating, rating + 0.5)
            : Math.min(maxRating, Math.ceil(rating));
        updateRating(newRating);
        setFocusedStar(Math.min(maxRating - 1, starIndex + 1));
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        calculateRating(starIndex + 1);
        break;
      default:
        break;
    }
  };

  const currentRating = hoverRating || rating;

  return (
    <RatingContainer
      className={className}
      role="group"
      aria-label="Star rating"
    >
      <VisuallyHidden id={`${id}-label`}>
        Rating: {currentRating} out of {maxRating} stars
      </VisuallyHidden>
      <Stars>
        {[...Array(maxRating)].map((_, index) => {
          const fillAmount = Math.max(0, Math.min(1, currentRating - index));
          const starNumber = index + 1;

          return (
            <StarContainer
              key={index}
              onClick={() => calculateRating(index + fillAmount)}
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
              type="button"
            >
              {/* Background star */}
              <StarIcon
                label="background star"
                labelId="background-star"
                width={24}
                height={24}
                color={theme.color.surface.disabled}
                aria-hidden="true"
              />

              {/* Filled overlay star */}
              <StarOverlay fillAmount={fillAmount}>
                <StarIcon
                  label="filled star"
                  labelId="filled-star"
                  width={24}
                  height={24}
                  color={theme.color.surface.selected}
                  aria-hidden="true"
                />
              </StarOverlay>
            </StarContainer>
          );
        })}
        {displayNumber && (
          <Rating aria-hidden="true" tag="span">
            {currentRating || 0}
          </Rating>
        )}
      </Stars>
      {displayTextRatings && (
        <TextRating>{ratings[Math.ceil(currentRating - 1)]}</TextRating>
      )}
    </RatingContainer>
  );
};

export default StarRating;
