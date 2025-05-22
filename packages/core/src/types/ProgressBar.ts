export const calculateProgress = (max: number, value: number) => {
  return (value / max) * 100;
};
export interface ProgressBarBaseProps {
  max: number;
  value: number;
} 