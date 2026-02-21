import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import Button, { ButtonSizes, ButtonVariations } from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icon';
import InputError from '../InputError/InputError';
import Text from '../Text/Text';
import {
  ArrowButtonsContainer,
  BelowGrid,
  CheckboxGridWrapper,
  ColumnHeaderCell,
  ColumnHeading,
  FadeOverlay,
  Grid,
  GridWrapper,
  Legend,
  RowHeading,
  ScrollableWrapper,
  Square,
  StyledCheckbox,
} from './styles';

type SelectedType = { [x: string]: string[] };

type CheckboxGridProps = {
  columnHeadings: string[];
  rowHeadings: string[];
  highlightCells: SelectedType;
  checkboxesByColumn: { name: string; value: string; key: string }[][];
  onSelection: (selected: SelectedType) => void;
  preSelected?: SelectedType;
  legendText?: string;
  error?: string;
  name: string;
  readOnly?: boolean;
};

const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  columnHeadings,
  error,
  highlightCells,
  legendText,
  rowHeadings,
  checkboxesByColumn,
  preSelected,
  onSelection,
  name,
  readOnly,
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<SelectedType>(preSelected || {});
  const gridRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (gridRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = gridRef.current;
        const canScroll = scrollWidth > clientWidth;
        const isScrolledToEnd =
          Math.abs(scrollWidth - clientWidth - scrollLeft) < 1;
        const isScrolledToStart = scrollLeft < 1;

        setIsScrollable(canScroll);
        setCanScrollLeft(canScroll && !isScrolledToStart);
        setCanScrollRight(canScroll && !isScrolledToEnd);
        setShowFade(canScroll && !isScrolledToEnd);
      }
    };

    // Use requestAnimationFrame to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      checkScrollable();
    }, 0);

    window.addEventListener('resize', checkScrollable);
    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', checkScrollable);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScrollable);
      if (gridElement) {
        gridElement.removeEventListener('scroll', checkScrollable);
      }
    };
  }, [columnHeadings, rowHeadings, checkboxesByColumn]);

  const onSelect = ({
    key,
    state,
    value,
  }: {
    value: string;
    key: string;
    state: CheckedState;
  }) => {
    const oldValues = selected[key] || [];
    const newValues = state
      ? [...oldValues, value]
      : oldValues.filter(el => el !== value);
    const newTotalSelection = { ...selected, [key]: newValues };

    setSelected(newTotalSelection);
    onSelection(newTotalSelection);
  };

  const onColumnSelectAll = (columnIndex: number, state: CheckedState) => {
    const column = checkboxesByColumn[columnIndex];
    if (!column.length) return;
    const key = column[0].key;
    const allValues = column.map(cb => cb.value);
    const newValues = state ? allValues : [];
    const newTotalSelection = { ...selected, [key]: newValues };
    setSelected(newTotalSelection);
    onSelection(newTotalSelection);
  };

  const onRowSelectAll = (rowIndex: number, state: CheckedState) => {
    const newTotalSelection = { ...selected };
    checkboxesByColumn.forEach(column => {
      const cell = column[rowIndex];
      if (!cell) return;
      const { key, value } = cell;
      const oldValues = newTotalSelection[key] || [];
      newTotalSelection[key] = state
        ? [...new Set([...oldValues, value])]
        : oldValues.filter(el => el !== value);
    });
    setSelected(newTotalSelection);
    onSelection(newTotalSelection);
  };

  const isColumnAllSelected = (columnIndex: number): boolean => {
    const column = checkboxesByColumn[columnIndex];
    if (!column.length) return false;
    const key = column[0].key;
    const selectedValues = selected[key] || [];
    const allValues = column.map(cb => cb.value);
    return allValues.every(v => selectedValues.includes(v));
  };

  const isRowAllSelected = (rowIndex: number): boolean => {
    return checkboxesByColumn.every(column => {
      const cell = column[rowIndex];
      if (!cell) return false;
      return (selected[cell.key] || []).includes(cell.value);
    });
  };

  const getColumnWidth = (): number => {
    if (!gridRef.current) return 0;
    const grid = gridRef.current;

    // Find the first scrollable column header cell (second column, index 1)
    // ColumnHeaderCell components are children of the grid
    const columnHeaders = Array.from(grid.children).filter(
      (child): child is HTMLElement => {
        const style = window.getComputedStyle(child);
        return style.gridColumnStart === '2';
      },
    );

    if (columnHeaders.length > 0 && columnHeaders[0]) {
      return columnHeaders[0].offsetWidth;
    }

    // Fallback: calculate approximate column width
    if (columnHeadings.length > 1) {
      const scrollableColumns = columnHeadings.length - 1;
      // Get the width of the scrollable area (excluding fixed first column)
      const firstColumn = Array.from(grid.children).find(
        (child): child is HTMLElement => {
          const style = window.getComputedStyle(child);
          return style.gridColumnStart === '1' && style.position === 'sticky';
        },
      );
      const firstColumnWidth = firstColumn?.offsetWidth || 0;
      const scrollableWidth = grid.scrollWidth - firstColumnWidth;
      return scrollableWidth / scrollableColumns;
    }

    return 100; // Default fallback
  };

  const scrollLeft = () => {
    if (!gridRef.current) return;
    const columnWidth = getColumnWidth();
    gridRef.current.scrollBy({ left: -columnWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!gridRef.current) return;
    const columnWidth = getColumnWidth();
    gridRef.current.scrollBy({ left: columnWidth, behavior: 'smooth' });
  };

  return (
    <CheckboxGridWrapper>
      <GridWrapper>
        <Grid
          ref={gridRef}
          $columns={columnHeadings.length}
          $rows={rowHeadings.length}
          $hasError={!!error}
        >
          <>
            {/* on mobile, first column is fixed */}
            <ColumnHeading tag="span" bold $index={0}>
              {columnHeadings[0]}
            </ColumnHeading>
            {rowHeadings.map((row, index) => (
              <RowHeading key={row} $index={index}>
                <>
                  <Text tag="span">{row}</Text>
                  {!readOnly && (
                    <Checkbox
                      checked={isRowAllSelected(index)}
                      onCheckedChange={state =>
                        !readOnly && onRowSelectAll(index, state)
                      }
                      color={theme.color.surface.selected}
                      aria-label={`Select all in ${row}`}
                      required={false}
                    />
                  )}
                </>
              </RowHeading>
            ))}
            <ScrollableWrapper>
              {columnHeadings.slice(1).map((column, index) => (
                <ColumnHeaderCell
                  key={column}
                  $index={index + 1}
                  data-column-index={index + 1}
                >
                  <>
                    {!readOnly && (
                      <Checkbox
                        checked={isColumnAllSelected(index)}
                        onCheckedChange={state =>
                          !readOnly && onColumnSelectAll(index, state)
                        }
                        color={theme.color.surface.selected}
                        readOnly={readOnly}
                        aria-label={`Select all in ${column}`}
                        required={false}
                      />
                    )}
                    <Text tag="span" bold>
                      {column}
                    </Text>
                  </>
                </ColumnHeaderCell>
              ))}
              {checkboxesByColumn.map((column, columnIndex) =>
                column.map(({ value, key }, rowIndex) => {
                  return (
                    <StyledCheckbox
                      key={`${key}-${value}-${rowHeadings[rowIndex]}`}
                      checked={!!selected[key]?.includes(value)}
                      name={name}
                      onCheckedChange={state => onSelect({ value, key, state })}
                      value={value}
                      color={theme.color.surface.selected}
                      $row={rowIndex + 2}
                      $column={columnIndex + 2}
                      $highlight={!!highlightCells?.[key]?.includes(value)}
                      readOnly={readOnly}
                    />
                  );
                }),
              )}
            </ScrollableWrapper>
          </>
        </Grid>
        <FadeOverlay $visible={showFade} />
      </GridWrapper>
      <BelowGrid>
        <div>
          {legendText && highlightCells && (
            <Legend>
              <Square />
              <Text tag="span">=</Text>
              <Text tag="span">{legendText}</Text>
            </Legend>
          )}
          <InputError visible={Boolean(error)}>{error}</InputError>
        </div>
        {isScrollable && (
          <ArrowButtonsContainer>
            <Button
              variation={ButtonVariations.Circle}
              onClick={scrollLeft}
              size={ButtonSizes.Medium}
              aria-label="Scroll left"
              borderColor={theme.color.border.moderate}
              backgroundColor={theme.color.surface.secondary}
              disabled={!canScrollLeft}
            >
              <ChevronLeftIcon label="Scroll left" width={16} height={16} />
            </Button>
            <Button
              variation={ButtonVariations.Circle}
              onClick={scrollRight}
              size={ButtonSizes.Medium}
              borderColor={theme.color.border.moderate}
              backgroundColor={theme.color.surface.secondary}
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              <ChevronRightIcon label="Scroll right" width={16} height={16} />
            </Button>
          </ArrowButtonsContainer>
        )}
      </BelowGrid>
    </CheckboxGridWrapper>
  );
};

export default CheckboxGrid;
