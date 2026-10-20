"use strict";

// 1. LESSON DATA
// Each lesson has one goal, an example, and a practice task.
// Original classroom notes are preserved in original-examples.js.
const lessons = [
  {
    title: "Your first JavaScript message",
    goal: "Display a message using console.log().",
    explanation: "JavaScript adds behavior to web pages. console.log() prints values in the browser developer console. This page also shows each example's result in the output panel.",
    code: 'console.log("Hello, world!");\nconsole.log("I am learning JavaScript.");',
    run: () => ["Hello, world!", "I am learning JavaScript."],
    practice: "Print your name and one thing you want to build with JavaScript.",
    hint: 'Text belongs inside quotation marks: console.log("Your name");'
  },
  {
    title: "Variables & data types",
    goal: "Recognize strings, numbers, booleans, arrays, and objects.",
    explanation: "Use const when you will not reassign a binding, and let when you will. Strings hold text, numbers hold numeric values, and booleans are true or false. Arrays store lists; objects group named properties. Array positions begin at zero. typeof reports arrays as objects; use Array.isArray() to identify arrays.",
    code: 'const name = "Cheems";\nlet age = 6;\nconst isSleeping = true;\nconst hobbies = ["Barking", "Eating"];\nconst pet = { name: name, age: age };\n\nconsole.log(name);\nconsole.log(typeof age);\nconsole.log(isSleeping);\nconsole.log(hobbies[0]);\nconsole.log(pet.age);',
    run: () => {
      const name = "Cheems";
      let age = 6;
      const isSleeping = true;
      const hobbies = ["Barking", "Eating"];
      const pet = { name: name, age: age };
      return [name, typeof age, isSleeping, hobbies[0], pet.age];
    },
    practice: "Create a student object with name and age properties. Create an array of three subjects and print the first subject.",
    hint: "Use student.name to access a property and subjects[0] to access the first subject."
  },
  {
    title: "Arithmetic operators",
    goal: "Calculate values with +, -, *, /, and %.",
    explanation: "Arithmetic operators calculate values. % gives the remainder after division. score += 1 adds one to score. With strings, + joins text instead of adding numbers.",
    code: 'const a = 9;\nconst b = 10;\nlet score = 0;\nscore += 1;\n\nconsole.log(a + b);\nconsole.log(b - a);\nconsole.log(a * b);\nconsole.log(b / 2);\nconsole.log(b % 3);\nconsole.log(score);',
    run: () => {
      const a = 9;
      const b = 10;
      let score = 0;
      score += 1;
      return [a + b, b - a, a * b, b / 2, b % 3, score];
    },
    practice: "Store the prices of two books. Calculate their total and the change from 1000.",
    hint: "Add the two prices, then subtract that total from 1000."
  },
  {
    title: "Comparisons & logic",
    goal: "Combine conditions using &&, ||, and !.",
    explanation: "For boolean values, && means both conditions must be true, || means at least one must be true, and ! reverses the value. Use === to compare values without type conversion. Use parentheses to make groups of conditions clear.",
    code: 'const age = 18;\nconst hasStudentCard = true;\n\nconsole.log(age >= 18);\nconsole.log(age >= 18 && hasStudentCard);\nconsole.log(age < 18 || hasStudentCard);\nconsole.log(!hasStudentCard);\nconsole.log(age === 18);',
    run: () => {
      const age = 18;
      const hasStudentCard = true;
      return [age >= 18, age >= 18 && hasStudentCard, age < 18 || hasStudentCard, !hasStudentCard, age === 18];
    },
    practice: "Create hasUsername and hasPassword booleans. Check whether both are true before a user can sign in.",
    hint: "Combine the two booleans with &&."
  },
  {
    title: "Decisions with if / else",
    goal: "Select a branch using if, else if, and else.",
    explanation: "JavaScript checks conditions from top to bottom and runs the first matching branch. else runs when no earlier condition is true. The mark thresholds here are only a teaching example.",
    code: 'const mark = 72;\n\nif (mark >= 75) {\n  console.log("Distinction");\n} else if (mark >= 50) {\n  console.log("Pass");\n} else {\n  console.log("Keep practicing");\n}',
    run: () => {
      const mark = 72;
      if (mark >= 75) return ["Distinction"];
      else if (mark >= 50) return ["Pass"];
      else return ["Keep practicing"];
    },
    practice: "In your own file, change mark to 85, 50, and 30. Predict each result before running the code.",
    hint: "Check the highest threshold first. Exactly 50 satisfies mark >= 50."
  },
  {
    title: "Reusable functions",
    goal: "Pass inputs into a function and return a result.",
    explanation: "Parameters are input names in the function definition. Arguments are values passed when calling it. return sends a result back to the caller. Zero is a valid number, so if (a && b) is not a reliable way to validate numeric inputs.",
    code: 'function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(9, 10));\nconsole.log(add(0, 5));\n\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("Student"));',
    run: () => {
      function add(a, b) { return a + b; }
      function greet(name) { return `Hello, ${name}!`; }
      return [add(9, 10), add(0, 5), greet("Student")];
    },
    practice: "Write multiply(a, b) and return the product. Call it with 4 and 5, then with 0 and 5.",
    hint: "Use return a * b; inside your function."
  },
  {
    title: "Fetching API data",
    goal: "Fetch data using async / await and handle failures.",
    explanation: "An API (Application Programming Interface) lets programs communicate. fetch() returns a promise; await waits for it inside an async function. Check response.ok because HTTP errors do not automatically make fetch reject. This example needs an internet connection.",
    code: 'async function fetchProduct() {\n  try {\n    const response = await fetch("https://dummyjson.com/products/1");\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    const product = await response.json();\n    console.log(product.title);\n  } catch (error) {\n    console.log(`Could not load product: ${error.message}`);\n  }\n}\n\nfetchProduct();',
    run: async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/1");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const product = await response.json();
        return [product.title];
      } catch (error) {
        return [`Could not load product: ${error.message}`];
      }
    },
    practice: "In your own file, display the product price too. Then request a nonexistent product and observe the error handling.",
    hint: "Use product.price after parsing the response. A missing product should trigger the response.ok check."
  }
];

// 2. PAGE STATE AND LESSON NAVIGATION
const element = (id) => document.getElementById(id);
let currentLesson = 0;
let viewVersion = 0;

lessons.forEach((lesson, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = `${String(index + 1).padStart(2, "0")}  ${lesson.title}`;
  button.addEventListener("click", () => showLesson(index));
  element("navigation").append(button);
});

function showLesson(index) {
  currentLesson = index;
  viewVersion += 1;
  const lesson = lessons[index];
  for (const field of ["title", "goal", "explanation", "code", "practice", "hint"]) {
    element(field).textContent = lesson[field];
  }
  element("number").textContent = `LESSON ${String(index + 1).padStart(2, "0")} / ${lessons.length}`;
  element("progress").textContent = `${index + 1} of ${lessons.length}`;
  element("output").textContent = "Run the example to see the result.";
  element("run").disabled = false;
  element("run").textContent = "Run example ?";
  element("previous").disabled = index === 0;
  element("next").disabled = index === lessons.length - 1;
  document.querySelector("details").open = false;
  Array.from(element("navigation").children).forEach((button, position) => {
    if (position === index) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
}

// 3. RUN THE SELECTED EXAMPLE
// The version check prevents a slow API response replacing another lesson's output.
element("run").addEventListener("click", async () => {
  const version = viewVersion;
  element("run").disabled = true;
  element("output").textContent = "Running example…";
  try {
    const output = await lessons[currentLesson].run();
    if (version === viewVersion) element("output").textContent = output.map(String).join("\n");
  } catch (error) {
    if (version === viewVersion) element("output").textContent = `Error: ${error.message}`;
  } finally {
    if (version === viewVersion) {
      element("run").disabled = false;
      element("run").textContent = "Run again ?";
    }
  }
});
element("previous").addEventListener("click", () => showLesson(currentLesson - 1));
element("next").addEventListener("click", () => showLesson(currentLesson + 1));
showLesson(0);
