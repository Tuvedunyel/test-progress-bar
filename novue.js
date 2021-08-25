const svgContainer = document.getElementById("progress-wrap");

svgContainer.innerHTML = `<svg width="${sqSize}px" height="${sqSize}px" viewBox=${viewBox}>
    <circle class="circle-background" cx="${
      sqSize / 2
    }" cy="0" r="${radius}" transform="${rotate}" stroke-width="${strokeWidthpx}" />
    <circle class="circle-progress" cx="${
      sqSize / 2
    }" cy="0" r="${radius}" stroke-width="${strokeWidthpx}" transform="${rotate}" style="${strokeDashArray}" />

</svg>`;

/* <svg
              v-bind:width="sqSize + 'px'"
              v-bind:height="sqSize + 'px'"
              v-bind:viewBox="viewBox"
            >
              <circle
                class="circle-background"
                v-bind:cx="sqSize / 2"
                v-bind:cy="0"
                v-bind:r="radius"
                v-bind:transform="rotate"
                v-bind:stroke-width="strokeWidthpx"
              />
              <circle
                class="circle-progress"
                v-bind:cx="sqSize / 2"
                v-bind:cy="0"
                v-bind:r="radius"
                v-bind:stroke-width="strokeWidthpx"
                v-bind:transform="rotate"
                v-bind:style="strokeDashArray"
              />
            </svg> */
