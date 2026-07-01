import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  SignatureWrapper,
  SignatureLabel,
  SignatureCanvas,
  ClearButton,
} from './styles';

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
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const labelId = useId();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }, [width, height, backgroundColor]);

  useEffect(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const getPos = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      if ('touches' in e && e.touches.length > 0) {
        return {
          x: (e.touches[0].clientX - rect.left) * scaleX,
          y: (e.touches[0].clientY - rect.top) * scaleY,
        };
      }
      if ('clientX' in e) {
        return {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY,
        };
      }
      return { x: 0, y: 0 };
    },
    [width, height],
  );

  const startDraw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (disabled) return;
      e.preventDefault();
      const ctx = ctxRef.current;
      if (!ctx) return;
      const { x, y } = getPos(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
      setIsDrawing(true);
    },
    [disabled, getPos],
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing || disabled) return;
      e.preventDefault();
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      const { x, y } = getPos(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    [isDrawing, disabled, strokeColor, strokeWidth, getPos],
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
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    setIsEmpty(true);
    onChange?.(null);
    onClear?.();
  };

  return (
    <SignatureWrapper>
      <SignatureLabel id={labelId}>{label}</SignatureLabel>
      <SignatureCanvas
        ref={canvasRef}
        width={width}
        height={height}
        aria-labelledby={labelId}
        role="img"
        $disabled={disabled}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
      />
      <ClearButton type="button" onClick={clear} disabled={disabled || isEmpty}>
        {clearLabel}
      </ClearButton>
    </SignatureWrapper>
  );
};

export default Signature;
