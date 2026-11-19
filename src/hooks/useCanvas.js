import { useRef, useState, useEffect, useCallback } from 'react';

export function useCanvas() {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('pencil'); // 'pencil', 'brush', 'eraser', 'stamp'
  const [activeStamp, setActiveStamp] = useState('cat'); // 'cat', 'snake', 'bow', 'flower', 'heart', 'star'
  const [color, setColor] = useState('#453B3A');
  const [brushSize, setBrushSize] = useState(4);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Cached stamp images
  const catImgRef = useRef(null);
  const snakeImgRef = useRef(null);

  useEffect(() => {
    const cat = new Image();
    cat.src = '/images/cute-cat.png';
    cat.onload = () => { catImgRef.current = cat; };

    const snake = new Image();
    snake.src = '/images/cute-snake.png';
    snake.onload = () => { snakeImgRef.current = snake; };
  }, []);

  // Save state for undo
  const saveState = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => [...prev.slice(-15), imageData]); // keep last 15 states
    setHasDrawn(true);
  }, []);

  // Initialize canvas with warm paper background and high-DPI support
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Save existing drawing if available
    let existingContent = null;
    if (canvas.width > 0 && canvas.height > 0) {
      try {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(canvas, 0, 0);
        existingContent = tempCanvas;
      } catch {
        // ignore
      }
    }

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    if (existingContent) {
      ctx.drawImage(existingContent, 0, 0, rect.width, rect.height);
    } else {
      // Warm sketchbook paper fill
      ctx.fillStyle = '#FFFDF9';
      ctx.fillRect(0, 0, rect.width, rect.height);
    }
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      // Don't re-init immediately on small resizes to protect art
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  // Coordinate helper
  const getPos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // Draw custom SVG/geometric stamps on canvas
  const drawStamp = (ctx, stampType, x, y, size = 36) => {
    ctx.save();
    ctx.translate(x, y);

    if (stampType === 'cat' && catImgRef.current) {
      // Draw cat photo stamp in a cute rounded badge
      const s = size * 1.5;
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(catImgRef.current, -s / 2, -s / 2, s, s);
      ctx.restore();
      // Scalloped / dashed border
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.strokeStyle = '#D99EAF';
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (stampType === 'snake' && snakeImgRef.current) {
      const s = size * 1.5;
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(snakeImgRef.current, -s / 2, -s / 2, s, s);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.strokeStyle = '#C6D6BA';
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (stampType === 'heart') {
      ctx.fillStyle = color || '#D99EAF';
      ctx.beginPath();
      const s = size * 0.7;
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.2, 0, s);
      ctx.bezierCurveTo(s, s * 0.2, s * 0.5, -s * 0.3, 0, s * 0.3);
      ctx.fill();
    } else if (stampType === 'star') {
      ctx.fillStyle = color || '#F8EAC2';
      const spikes = 5;
      const outerRadius = size * 0.6;
      const innerRadius = size * 0.28;
      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(0, -outerRadius);
      for (let i = 0; i < spikes; i++) {
        let px = Math.cos(rot) * outerRadius;
        let py = Math.sin(rot) * outerRadius;
        ctx.lineTo(px, py);
        rot += step;
        px = Math.cos(rot) * innerRadius;
        py = Math.sin(rot) * innerRadius;
        ctx.lineTo(px, py);
        rot += step;
      }
      ctx.lineTo(0, -outerRadius);
      ctx.closePath();
      ctx.fill();
    } else if (stampType === 'bow') {
      ctx.fillStyle = color || '#D99EAF';
      const s = size * 0.6;
      // Left loop
      ctx.beginPath();
      ctx.ellipse(-s * 0.5, 0, s * 0.45, s * 0.3, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();
      // Right loop
      ctx.beginPath();
      ctx.ellipse(s * 0.5, 0, s * 0.45, s * 0.3, Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();
      // Knot
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Tails
      ctx.beginPath();
      ctx.moveTo(-s * 0.1, s * 0.1);
      ctx.lineTo(-s * 0.4, s * 0.7);
      ctx.lineTo(-s * 0.15, s * 0.5);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(s * 0.1, s * 0.1);
      ctx.lineTo(s * 0.4, s * 0.7);
      ctx.lineTo(s * 0.15, s * 0.5);
      ctx.fill();
    } else if (stampType === 'flower') {
      // 5 soft petals + center
      const s = size * 0.4;
      ctx.fillStyle = color || '#F5DDE3';
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5;
        const px = Math.cos(angle) * s * 0.8;
        const py = Math.sin(angle) * s * 0.8;
        ctx.beginPath();
        ctx.arc(px, py, s * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      // Center
      ctx.fillStyle = '#F8EAC2';
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.35, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getPos(e);

    saveState();

    if (tool === 'stamp') {
      drawStamp(ctx, activeStamp, x, y, brushSize * 4 + 20);
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);

    if (tool === 'eraser') {
      ctx.strokeStyle = '#FFFDF9';
      ctx.lineWidth = brushSize * 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 0;
    } else if (tool === 'brush') {
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize * 1.8;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = color;
      ctx.shadowBlur = brushSize * 0.8;
    } else {
      // Pencil
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 0;
    }

    ctx.lineTo(x + 0.1, y + 0.1);
    ctx.stroke();
  };

  const draw = (e) => {
    if (!isDrawing || tool === 'stamp') return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getPos(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
  };

  const undo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const previousState = history[history.length - 1];
    ctx.putImageData(previousState, 0, 0);
    setHistory(prev => prev.slice(0, -1));
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    saveState();
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#FFFDF9';
    ctx.fillRect(0, 0, rect.width, rect.height);
  };

  const downloadArt = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create an export canvas with an elegant scrapbook border & Lumine signature
    const exportCanvas = document.createElement('canvas');
    const borderPadding = 36;
    exportCanvas.width = canvas.width + borderPadding * 2;
    exportCanvas.height = canvas.height + borderPadding * 2 + 50;

    const ctx = exportCanvas.getContext('2d');

    // Outer warm border
    ctx.fillStyle = '#FFF9F2';
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Inner dashed border
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#D99EAF';
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(borderPadding - 8, borderPadding - 8, canvas.width + 16, canvas.height + 16);
    ctx.setLineDash([]);

    // Actual artwork
    ctx.drawImage(canvas, borderPadding, borderPadding);

    // Handwritten caption at the bottom
    ctx.fillStyle = '#79645F';
    ctx.font = '24px "Caveat", cursive';
    ctx.textAlign = 'center';
    ctx.fillText("Lumine's Little Masterpiece ♡ with love", exportCanvas.width / 2, exportCanvas.height - 24);

    const link = document.createElement('a');
    link.download = 'lumines-little-masterpiece.png';
    link.href = exportCanvas.toDataURL('image/png');
    link.click();

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return {
    canvasRef,
    tool,
    setTool,
    activeStamp,
    setActiveStamp,
    color,
    setColor,
    brushSize,
    setBrushSize,
    startDrawing,
    draw,
    stopDrawing,
    undo,
    clearCanvas,
    downloadArt,
    hasHistory: history.length > 0,
    hasDrawn,
    downloadSuccess,
  };
}
