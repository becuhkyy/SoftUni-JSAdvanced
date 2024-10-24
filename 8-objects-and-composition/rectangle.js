function rectangle(width, height, color) {
  return {
    width,
    height,
    color: color.charAt(0).toUpperCase() + color.slice(1).toLowerCase(),
    calcArea: () => width * height,
  };
}

const rect = rectangle(4, 5, "red");
console.log(rect.color);

console.log(rect.calculateArea());
