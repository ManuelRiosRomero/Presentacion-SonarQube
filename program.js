// Noncompliant - code smell: Variable names should use camelCase in JavaScript
const PI = 3.14159265359;

// Noncompliant - code smell: Function names should use camelCase in JavaScript
function area_circle(radius) {
  return PI * radius * radius;
}

// Noncompliant - code smell: Function names should use camelCase in JavaScript
function area_rectangle(length, width) {
  return length * width;
}

// Noncompliant - code smell: Function names should use camelCase in JavaScript
function area_triangle(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Noncompliant - bug: The variable 'unusedVariable' is declared but never used
const unusedVariable = 42;

console.log("Circle area: " + area_circle(5));
console.log("Rectangle area: " + area_rectangle(4, 6));
console.log("Triangle area: " + area_triangle(3, 4, 5));
