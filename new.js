const modelViewer = document.querySelector('model-viewer');

// Function to handle hotspot clicks
function rotateToHotspot(position) {
    modelViewer.cameraOrbit = `${position.x}deg ${position.y}deg ${position.z}m`;
}

// Add click event listeners to hotspots
const hotspots = document.querySelectorAll('.Hotspot');
hotspots.forEach((hotspot, index) => {
    hotspot.addEventListener('click', () => {
        const dataPosition = hotspot.getAttribute('data-position').split(' ');
        const position = {
            x: parseFloat(dataPosition[0]),
            y: parseFloat(dataPosition[1]),
            z: parseFloat(dataPosition[2])
        };
        rotateToHotspot(position);
    });
});
