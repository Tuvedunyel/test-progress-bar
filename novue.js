const svgContainer = document.getElementById("progress-wrap");
const sqSize = 200;
let percentage = 0;
const strokeWidth = 15;

svgContainer.innerHTML = `<svg width="${sqSize}px" height="${sqSize}px" viewBox=${viewBox}>
    <circle class="circle-background" cx="${
      sqSize / 2
    }" cy="0" r="${radius}" transform="${rotate}" stroke-width="${strokeWidthpx}" />
    <circle class="circle-progress" cx="${
      sqSize / 2
    }" cy="0" r="${radius}" stroke-width="${strokeWidthpx}" transform="${rotate}" style="${strokeDashArray}" />

</svg>`;
