const app = new Vue({
  data() {
    return {
      sqSize: 200,
      percentage: 5,
      strokeWidth: 10,
    };
  },
  computed: {
    viewBox() {
      return "0 0 " + this.sqSize + " " + this.sqSize;
    },
    radius() {
      return (this.sqSize - this.strokeWidth) / 2;
    },
    dashOffset() {
      return this.dashArray - (this.dashArray * (this.percentage / 2)) / 100;
    },
    dashArray() {
      return this.radius * Math.PI * 2;
    },
    rotate() {
      return "rotate(-180 " + this.sqSize / 2 + " " + this.sqSize / 2 + ")";
    },
    strokeWidthpx() {
      return this.strokeWidth + "px";
    },
    strokeDashArray() {
      return (
        "stroke-dasharray: " +
        this.dashArray +
        "; strokeDashoffset: " +
        this.dashOffset
      );
    },
  },
}).$mount("#app");
