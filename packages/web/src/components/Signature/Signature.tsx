import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface SignatureProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  backgroundColor?: string;
  disabled?: boolean;
  onChange?: (dataUrl: string | null) => void;
  onClear?: () => void;
  label?: string;
  clearLabel?: string;
}

const Signature: React.FC<SignatureProps> = ({
  width = 400,
  height = 200,
  strokeColor = '#111827',
  strokeWidth = 2,
  backgroundColor = '#FFFFFF',
  disabled = false,
  onChange,
  onClear,
  label = 'Sign here',
  clearLabel = 'Clear',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }, [width, height, backgroundColor]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (disabled) return;
      e.preventDefault();
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      const { x, y } = getPos(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
      setIsDrawing(true);
    },
    [disabled],
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing || disabled) return;
      e.preventDefault();
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      const { x, y } = getPos(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    [isDrawing, disabled, strokeColor, strokeWidth],
  );

  const stopDraw = useCallback(() => {
    if (!isDrawing) return;
    setIsDrawing(false);
    setIsEmpty(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    onChange?.(canvas.toDataURL('image/png'));
  }, [isDrawing, onChange]);

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    setIsEmpty(true);
    onChange?.(null);
    onClear?.();
  };

  return (
    <div>
      <p id="signature-label" style={{ margin: '0 0 4px', fontSize: 13 }}>
        {label}
      </p>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        aria-labelledby="signature-label"
        role="img"
        style={{
          display: 'block',
          border: '1px solid #D1D5DB',
          borderRadius: 6,
          cursor: disabled ? 'not-allowed' : 'crosshair',
          touchAction: 'none',
          opacity: disabled ? 0.5 : 1,
        }}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
      />
      <button
        type="button"
        onClick={clear}
        disabled={disabled || isEmpty}
        style={{ marginTop: 8, fontSize: 13 }}
      >
        {clearLabel}
      </button>
    </div>
  );
};

export default Signature;
