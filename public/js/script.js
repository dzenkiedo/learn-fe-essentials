

/**
 * 1. Dom Elements
 * 2. Objects
 * 3. Closures
 * 4. new operator
 * 5. libraries ( jQuery, lodash etc)
 */


/**
 * 06.12.2022
 * canvas animations
 * 
 */


const canvasWrapper = document.getElementById("Canvas");

const ctx = canvasWrapper.getContext("2d");
ctx.fillStyle = "orange";
ctx.fillRect(0,0, 700, 700);

ctx.moveTo(0,0);
ctx.strokeStyle = "#ffffff";
ctx.lineTo(700, 0);



