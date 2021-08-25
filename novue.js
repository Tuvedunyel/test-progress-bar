const svgContainer = document.getElementById("progress-wrap");
const sqSize = 200;
let percentage = 50;
const strokeWidth = 15;

const viewBox = () => {
  return `0 0 ${sqSize} ${sqSize}`;
};

const radius = () => {
  return (sqSize - strokeWidth) / 2;
};

const dashArray = () => {
  return radius() * Math.PI * 2;
};

const dashOffset = () => {
  return dashArray() - (dashArray() * (percentage / 2)) / 100;
};

const rotate = () => {
  return "rotate(-180 " + sqSize / 2 + " " + sqSize / 2 + ")";
};

const strokeWidthpx = () => {
  return strokeWidth + "px";
};

const strokeDashArray = () => {
  return `stroke-dasharray: ${dashArray()}; strokeDashoffset: ${dashOffset()}`;
};

svgContainer.innerHTML = `<svg width="${sqSize}px" height="${sqSize}px" viewBox="${viewBox()}">
    <circle class="circle-background" cx="${
      sqSize / 2
    }" cy="0" r="${radius()}" transform="${rotate()}" stroke-width="${strokeWidthpx()}" />
    <circle class="circle-progress" cx="${
      sqSize / 2
    }" cy="0" r="${radius()}" stroke-width="${strokeWidthpx()}" transform="${rotate()}" style="${strokeDashArray()}" />

</svg>
<span class="circle-text">${percentage}%</span>`;
