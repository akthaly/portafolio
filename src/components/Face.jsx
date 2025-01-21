import React, { useState, useEffect } from 'react';

const EyeFollowingMouse = () => {
    const [eyePositions, setEyePositions] = useState({
        leftPupilX: 0,
        leftPupilY: 0,
        rightPupilX: 0,
        rightPupilY: 0,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Calculate the position for the left and right pupils
            const leftEye = document.getElementById('left-eye');
            const rightEye = document.getElementById('right-eye');

            const leftEyeRect = leftEye.getBoundingClientRect();
            const rightEyeRect = rightEye.getBoundingClientRect();

            const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
            const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

            const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
            const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

            // Calculate angles for pupils to follow the mouse
            const angleLeft = Math.atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
            const angleRight = Math.atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);

            // Max distance the pupils can move
            const distance = 10;

            setEyePositions({
                leftPupilX: Math.cos(angleLeft) * distance,
                leftPupilY: Math.sin(angleLeft) * distance,
                rightPupilX: Math.cos(angleRight) * distance,
                rightPupilY: Math.sin(angleRight) * distance,
            });
        };

        // Attach event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="relative w-48 h-48 rounded-full bg-amber-300 flex justify-center items-center">
                {/* Left Eye */}
                <div
                    id="left-eye"
                    className="absolute w-16 h-16 bg-white rounded-full top-1/3 left-1/4 flex justify-center items-center"
                >
                    <div
                        className="w-4 h-4 bg-black rounded-full"
                        style={{
                            transform: `translate(-50%, -50%) translate(${eyePositions.leftPupilX}px, ${eyePositions.leftPupilY}px)`,
                        }}
                    />
                </div>

                {/* Right Eye */}
                <div
                    id="right-eye"
                    className="absolute w-16 h-16 bg-white rounded-full top-1/3 right-1/4 flex justify-center items-center"
                >
                    <div
                        className="w-4 h-4 bg-black rounded-full"
                        style={{
                            transform: `translate(-50%, -50%) translate(${eyePositions.rightPupilX}px, ${eyePositions.rightPupilY}px)`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EyeFollowingMouse;
