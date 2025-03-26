# Advanced To-Do App with Weather Integration

## 📋 Project Overview
This is an advanced **To-Do App** built with React and Redux, featuring:
- **Task Management**: Add, delete, and mark tasks as complete/incomplete.
- **Priority-Based Sorting**: Assign priorities (High, Medium, Low) to tasks and visually differentiate them.
- **Weather Integration**: Fetch and display real-time weather data for any city.
- **User Authentication**: Login/logout functionality to protect the To-Do list.
- **Persistent Storage**: Tasks and user authentication state are saved to `localStorage` for persistence across page reloads.

--- 

## 🚀 Features
### **1. Core To-Do Functionality**
- Add tasks via input and button click or by pressing `Enter`.
- Delete tasks with a single click.
- Mark tasks as complete/incomplete.
- Assign priorities (High, Medium, Low) to tasks.
- Tasks are visually differentiated by priority using colored borders.

### **2. Weather Integration**
- Fetch and display real-time weather data for any city.
- Users can manually input a city name to get weather details.
- Weather details include:
  - Temperature (in Celsius).
  - Weather condition (e.g., Sunny, Cloudy).
  - Weather icon for better visualization.

### **3. User Authentication**
- Simulated login/logout functionality using Redux.
- Protects the To-Do list so only logged-in users can access it.

### **4. Persistent Storage**
- Tasks and user authentication state are saved to `localStorage`.
- Data persists across page reloads.

### **5. Responsive Design**
### **Known Limitations**
- The app is fully responsive for devices with a minimum width of 300px. Smaller devices may require additional adjustments for optimal usability.

---

## 🛠️ Technologies Used
- **Frontend**: React, Redux, Redux Thunk
- **Styling**: Tailwind CSS
- **API Integration**: WeatherAPI (for fetching weather data)
- **State Management**: Redux Toolkit
- **Persistence**: `localStorage`