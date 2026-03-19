// Type alias
type Point = {
  x: number;
  y: number;
};

function print(p: Point): void {
  console.log(`X: ${p.x}, Y: ${p.y}`);
}

const point1: Point = { x: 10, y: 20 };
print(point1);   
