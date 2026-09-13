# 🚀 DevStack

### 📌 About the Project

**DevStack** is a project where you can explore important information about a lot of different technologies. It allows users to learn about technologies and build their own technology stack.

### 🛠️ Technologies Used

* React.js
* TypeScript
* Vite
* Tailwind CSS
* Netlify
* React Toastify (NPM Package)
* JSON for data fetching

### ✨ Features

* 📚 Explore information about different technologies.
* 🧩 Add technologies to your own stack.
* 🔔 Get notifications using React Toastify.

---

# ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

### 2. What is the difference between props and state?

Props are data that is passed to a component, while state is data that can change over time and React tracks that data.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook that is used to store an initial value, and we can update it using a setter function. I used it to store the technology data and the user's stack in this project.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook that is used to perform side effects in a React component after the component is created.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

`.map()` needs a React `key` prop so React can see the changes between components when they have a unique ID, which makes React more efficient.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying HTML elements depending on a condition.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We use props to send data from parent to child. But React is one-way, which means we can't directly send data from child to parent. So, we pass a function from the parent to the child as a prop, and the child can call that function to send data back to the parent.
