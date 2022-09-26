export function sum(n1) {
  return function sum(n2) {
    return n1 + n2;
  };
}

// let sum = (n1) => (sum = (n2) => n1 + n2);

export const colors = [
  "magenta",
  "cyan",
  "firebrick",
  "springgreen",
  "skyblue",
];
export const getColor = function () {
  let i = 0;
  return function () {
    console.log(colors[i]);
    this.style.color = colors[i];
    i++;
    if (i === colors.length) {
      i = 0;
    }
  };
};
