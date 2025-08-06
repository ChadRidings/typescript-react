/**
    This is a canvas component that will be used to draw a bar chart.
    It uses the HTML5 canvas API to draw bars based on mock data.
    The canvas is responsive and will adjust its size based on the parent container.
    * The canvas is initialized with a width of 640px and a height of 480px.
    * The bars are drawn with a width of 60px and a gap of 20px between bars.
    * The height of each bar is determined by the `height` property in the mock data.
    * The color of each bar is determined by the `color` property in the mock data.
    * The bars are drawn from the bottom of the canvas upwards.
    * The `useEffect` hook is used to draw the bars when the component mounts.

    The x calculation explained: const x = 20 + i * (barWidth + barGap);
    * For i = 0: x = 20 + 0 * 80 = 20
    * For i = 1: x = 20 + 1 * 80 = 100
    * For i = 2: x = 20 + 2 * 80 = 180
    * For i = 3: x = 20 + 3 * 80 = 260
    * For i = 4: x = 20 + 4 * 80 = 340
 */

import { useEffect, useState, useRef } from "react";
import { mockBarChartData } from "./mockDataBarChart";

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasHeight = 480;
    const canvasWidth = 640;

    const [barChartData, setBarChartData] = useState(mockBarChartData);

    useEffect(() => {
        // Declare in useEffect to assure the canvas is available before trying to use it 
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                const barWidth = 60; // Width of each bar
                const barGap = 20; // Gap between bars

                barChartData.forEach((bar, i) => {
                    ctx.fillStyle = bar.color; // Set the color for the bar
                    const x = barGap + i * (barWidth + barGap); // (For i = 0: x = 20 + 0 * 80 = 20)
                    const y = canvasHeight - bar.height; // Start from the bottom
                    ctx.fillRect(x, y, barWidth, bar.height); // Draw the bar on the canvas (x = barWidth, y = bar.height)
                });
            }
        }
    }, []);

    return (
        <div className="p-5 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <canvas
                ref={canvasRef}
                className="border border-gray-300 dark:border-gray-700 w-full h-64 mb-4"
                id="canvas"
                width={canvasWidth}
                height={canvasHeight}
            ></canvas>
        </div>
    );
}

export default Canvas;
