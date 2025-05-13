// utils/gradientParser.ts
type GradientInfo = {
  colors: string[];
  start: { x: number; y: number };
  end: { x: number; y: number };
};

export const parseGradientString = (gradientString: string): GradientInfo => {
  // Example implementation - you'll need to customize based on your gradient format
  const colors = gradientString.match(/#[a-fA-F0-9]{6}/g) || [];

  // Extract angle if present (this is simplified, adjust for your format)
  const angleMatch = gradientString.match(/(\d+\.?\d*)deg/);
  const angle = angleMatch ? parseFloat(angleMatch[1]) : 0;

  // Convert angle to start/end coordinates
  const radians = (angle - 90) * (Math.PI / 180);
  const start = {
    x: 0.5 - Math.cos(radians) / 2,
    y: 0.5 - Math.sin(radians) / 2,
  };
  const end = {
    x: 0.5 + Math.cos(radians) / 2,
    y: 0.5 + Math.sin(radians) / 2,
  };

  return { colors, start, end };
};
