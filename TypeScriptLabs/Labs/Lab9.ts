//Literal types
function move(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Moving ${direction}`);
}

move("up");
move("left");
//Type Narrowing
function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());   // string case
  } else {
    console.log(Math.round(value));     // number case
  }
}

formatValue("hello"); 
formatValue(4.7);     
