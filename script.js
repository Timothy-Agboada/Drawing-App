document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    
    const colorPicker = document.getElementById('colorPicker');
    const brushSizeInput = document.getElementById('brushSize');
    const brushSizeValue = document.getElementById('brushSizeValue');
    const clearBtn = document.getElementById('clearBtn');

    canvas.width = 800;
    canvas.height = 600;

    // State variables
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Set default context properties
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function draw(e) {
        if (!isDrawing) return; // Stop the function if not drawing

        // Set drawing properties from the toolbar
        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = brushSizeInput.value;

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(lastX, lastY); // Start from the last coordinates

        // Go to the current mouse position
        ctx.lineTo(e.offsetX, e.offsetY); 
        ctx.stroke();

        // Update last coordinates
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    // --- Event Handlers ---
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    // Handle case where mouse leaves the canvas while drawing
    canvas.addEventListener('mouseout', () => isDrawing = false);

    // Toolbar event handlers
    brushSizeInput.addEventListener('input', () => {
        brushSizeValue.textContent = brushSizeInput.value;
    });

    clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});