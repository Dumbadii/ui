class CarouselImage {
  constructor(container, [...images], view_count) {
    this.container = container;
    this.images = images;
    this.VIEW_COUNT = view_count;
    this.IMAGE_COUNT = images.length;
    this.inViewIndexes = Array(this.VIEW_COUNT)
      .fill()
      .map((_, i, arr) => (arr[i] = i));

    this.initContainer();
    this.refresh();

    this.handleArrowClick();
    this.handleDotClick();
  }
  initContainer() {
    const template = `
      <div class="carousel-main">
        <div class="carousel-left"><<</div>
        <div class="carousel-boxes">
        </div>
        <div class="carousel-right">>></div>
      </div>
      <ul class="carousel-dots">
      </ul>
    `;
    this.container.innerHTML = template;
    this.moveLeft = this.container.querySelector(".carousel-left");
    this.moveRight = this.container.querySelector(".carousel-right");
    this.dotContainer = this.container.querySelector(".carousel-dots");
    this.boxContainer = this.container.querySelector(".carousel-boxes");
    this.boxContainer.innerHTML = this.images
      .map((v, i) => `<div class="carousel-box"></div>`)
      .join("");
    this.dotContainer.innerHTML = this.images
      .map((v, i) => `<li class="carousel-dot" data-index=${i}>0</li>`)
      .join("");
    this.dots = this.container.querySelectorAll(".carousel-dot");
    this.boxes = this.container.querySelectorAll(".carousel-box");
    this.boxes.forEach((box, i) => {
      const image = document.createElement("img");
      image.src = this.images[i];
      box.appendChild(image);
    });
  }
  refresh() {
    this.boxes.forEach((box, index) => {
      box.style.display = this.inViewIndexes.includes(index) ? "" : "none";
    });
    this.dots.forEach((v) => v.classList.remove("li-inview"));
    this.dots.forEach((v, i) => {
      if (this.inViewIndexes.includes(i)) v.classList.add("li-inview");
    });
  }
  handleArrowClick() {
    this.moveRight.addEventListener("click", () => {
      if (this.inViewIndexes[0] > 0)
        this.inViewIndexes.forEach(
          (value, index, array) => (array[index] = value - 1)
        );
      this.refresh();
    });
    this.moveLeft.addEventListener("click", () => {
      if (this.inViewIndexes[this.VIEW_COUNT - 1] < this.IMAGE_COUNT - 1)
        this.inViewIndexes.forEach(
          (value, index, array) => (array[index] = value + 1)
        );
      this.refresh();
    });
  }
  handleDotClick() {
    this.dotContainer.addEventListener("click", (event) => {
      const target = event.target;
      if (!target.classList.contains("carousel-dot")) return;
      const index = target.dataset.index;
      if (this.inViewIndexes.includes(index)) return;
      this.inViewIndexes.forEach((v, i, a) => {
        if (i > 0) {
          a[i] = a[i - 1] + 1;
        } else {
          a[i] = Number(index);
        }
      });

      this.refresh();
    });
  }
}

export { CarouselImage };
