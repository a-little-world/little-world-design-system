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

export enum StarRatingSizes {
  Small = 24, // px
  Medium = 32,
  Large = 48,
}
interface StarRatingProps {
  className?: string;
  color?: string;
  displayNumber?: boolean;
  displayTextRatings?: boolean;
  enableHalfRatings?: boolean;
  id?: string;
  initialRating?: number;
  ratings?: string[];
  maxRating?: number;
  name?: string;
  onChange?: (rating: number) => void;
  size?: StarRatingSizes;
}

const StarRating = ({
  className,
  color,
  displayNumber = false,
  displayTextRatings = false,
  enableHalfRatings = false,
  id = 'star-rating',
  initialRating = 0,
  name = 'rating',
  maxRating = 5,
  onChange,
  ratings = DEFAULT_RATINGS,
  size = StarRatingSizes.Small,
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [focusedStar, setFocusedStar] = useState<number | null>(null);
  const theme = useTheme();
  const ratingIncrement = enableHalfRatings ? 0.5 : 1;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const newRating =
      enableHalfRatings && percent <= 0.5 ? starIndex + 0.5 : starIndex + 1;
    setHoverRating(roundToHalf(newRating));
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const updateRating = useCallback(
    (newRating: number) => {
      const roundedRating = enableHalfRatings
        ? roundToHalf(newRating)
        : newRating;
      setRating(roundedRating);
      onChange?.(roundedRating);
    },
    [onChange],
  );

  const calculateRating = (starNumber: number) => {
    // Toggle between whole, half, and unrated for clicked star
    let newRating;

    if (rating === starNumber) {
      newRating = starNumber - ratingIncrement;
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
    setHoverRating(0);
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        // If we're at a whole number, go down by 0.5, otherwise go down by 1
        newRating =
          Math.floor(rating) === rating
            ? Math.max(0, rating - ratingIncrement)
            : Math.max(0, Math.floor(rating));
        updateRating(newRating);

        setFocusedStar(Math.max(0, newRating - 1));
        break;
      case 'ArrowRight':
        e.preventDefault();
        // If we're at a whole number, go up by 0.5, otherwise go up by 1
        newRating =
          Math.floor(rating) === rating
            ? Math.min(maxRating, rating + ratingIncrement)
            : Math.min(maxRating, Math.ceil(rating));

        updateRating(newRating);
        setFocusedStar(Math.min(maxRating - 1, newRating - 1));
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        calculateRating((focusedStar ?? starIndex) + 1);
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
          const handleClick = () => {
            // tap devices cannot use hover rating
            const crossDeviceFillAmount = hoverRating ? fillAmount : 1;
            calculateRating(index + crossDeviceFillAmount);
          };
          return (
            <StarContainer
              key={index}
              onClick={handleClick}
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
                width={size}
                height={size}
                color={theme.color.surface.disabled}
                aria-hidden="true"
              />

              {/* Filled overlay star */}
              <StarOverlay fillAmount={fillAmount}>
                <StarIcon
                  label="filled star"
                  width={size}
                  height={size}
                  color={color || theme.color.surface.selected}
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
