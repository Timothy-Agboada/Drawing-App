## 🚀 30-Day Coding Challenge: Day 7

This project is the seventh entry in my 30-day coding challenge. The goal was to explore a different type of web interactivity by building a drawing application from scratch using the HTML `<canvas>` element. This project focuses on handling user mouse input to create a fun and creative user experience.

### 📖 Project Overview

This is a clean, modern, and simple drawing application that provides a digital canvas for users to express their creativity. The interface includes a toolbar that allows the user to select a drawing color, adjust the brush size with a slider, and clear the canvas to start over.

The core of the application is built with vanilla JavaScript, capturing mouse movements to draw smooth lines directly onto the HTML canvas.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface.
<img width="1077" alt="Screenshot 2025-06-13 at 20 16 34" src="https://github.com/user-attachments/assets/5c0d9800-9464-4690-bd41-e31d63053246" />


### 🌟 Key Features

* **Freeform Drawing:** Smooth, responsive drawing that follows the user's cursor.
* **Customizable Brush:** Users can easily change the brush color and size using the intuitive toolbar controls.
* **State Management:** JavaScript is used to track the drawing state (e.g., if the mouse button is currently pressed down), the current color, and brush size.
* **Canvas API:** Directly utilizes the HTML5 Canvas 2D rendering context to draw paths and clear the workspace.
* **Clean & Intuitive UI:** A minimalist design keeps the focus on the creative process, with all tools easily accessible.

### 💻 Technologies Used

This project was built entirely with vanilla front-end technologies to demonstrate a strong command of core web features.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **Google Fonts:** For the 'Montserrat' font family.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/drawing-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd drawing-app
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required.

### 🎯 Learning Objectives

This project provided a hands-on opportunity to learn and master several important concepts:

* **HTML Canvas API:** Gained practical experience with the `getContext('2d')` API to perform drawing operations like `beginPath`, `moveTo`, `lineTo`, and `stroke`.
* **Advanced Mouse Event Handling:** Managing a sequence of mouse events (`mousedown`, `mousemove`, `mouseup`, `mouseout`) to create a continuous action like drawing.
* **Coordinate Systems:** Understanding and using event properties like `offsetX` and `offsetY` to get accurate mouse coordinates relative to a specific element.
* **UI for Creative Tools:** Designing and implementing an effective toolbar to control the parameters of a creative application.
