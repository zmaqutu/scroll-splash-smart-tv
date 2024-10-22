<h1 align="center">Scroll Splash: A Smart TV application</h1>

<div align="center" >
  <img src="https://img.shields.io/badge/made%20by-Zongo%20Maqutu-blue?style=for-the-badge&labelColor=20232a" />
  <img src="https://img.shields.io/badge/TypeScript-20232a?style=for-the-badge&logo=typescript&labelColor=2e2f38" />
  <img src="https://img.shields.io/badge/Tailwind CSS-20232a?style=for-the-badge&logo=tailwindcss&labelColor=162e16" />
  <img src="https://img.shields.io/badge/React JS-20232a?style=for-the-badge&logo=react&labelColor=2e2f38" />
  <img src="https://img.shields.io/badge/Vite-20232a?style=for-the-badge&logo=vite&labelColor=2e2f38" />
</div>

**Overview**

This application is a Smart TV app built using React and TypeScript. It allows users to browse through a set of photos from various topics (such as wallpapers, nature, etc.) using the Unsplash API. Users can select topics from a vertical menu, and the related photos are displayed in a horizontally scrolling grid. The app is optimized to run at a screen resolution of 1920x1080, and is compatible with the latest versions of Safari, Firefox, and Chrome.

## Live Demo
You can check out a live demo of the Scroll Splash application [here](https://zmaqutu.github.io/scroll-splash-smart-tv/)

This demo allows you to interact with the app just as you would on a Smart TV. You can navigate through the topics and browse photos using your keyboard's arrow keys to simulate the TV remote control experience.



## Key Features

- Topic Navigation: A menu on the left allows users to select from a list of topics.

- Horizontally Scrolling Grid: Photos of the selected topic are displayed in a grid, where the columns shift left or right one column at a time.

- Skeleton Loading: While the photos are being retrieved from the API, skeleton loaders provide visual feedback to improve user experience.

- Arrow Key Navigation: Users can navigate through the menu and photo grid using the up, down, left, and right arrow keys, making it easy to interact with the app via a remote control.

- Responsive Design: The app adapts to different screen sizes and maintains layout integrity, especially on Smart TV screens with a resolution of 1920x1080.

- API Integration: Retrieves data from Unsplash API for topics and related photos.

## Tech Stack

- React: Used to build the cashier dashboard where users are registered, and loan terms are set.

- Tailwind CSS: Provides a modern and responsive user interface for the dashboard.

- TypeScript: Provides strong typing for better code structure, readability, and maintainability.

- Vite: Used as the fast and efficient build tool for bundling the application.

- Unsplash API: The data source for retrieving photos and topics dynamically.

- ESLint: Enforces consistent coding styles and best practices, ensuring clean and maintainable code.


## Project Setup and Installation

Before running the application, make sure you have Node.js installed on your machine.

### Installation

```bash
git clone https://github.com/zmaqutu/scroll-splash-smart-tv.git
```

### Install the dependencies

To do this you can navigate to the root directory of the project and run

```bash
npm run install
```

## Running the Application locally

Once the dependencies are installed, you can start the development server for the different apps using the following command from the root directory:

```bash
npm run dev
```

This will start all the necessary servers locally on different ports
## Usage

### 1. State: Menu is active grid is inactive

1. Navigate to the home page(http://localhost:5173/scroll-splash-smart-tv/).
2. The in the initial state the menu is active and the grid is inactive
3. Click through the menu options to view images from different topics


![image](https://github.com/user-attachments/assets/4fc6afbd-ef5a-4111-ba70-3722a2209507)

Click on the Switch to switch to the following state

### 2. State: Menu is inactive Grid is active
1. When the menu becomes inactive it is hidden and the user can scroll through the images
    - both left/right and up/down   
3. Users can scroll with their mouse or use the arrow keys to navigate the grid


![image](https://github.com/user-attachments/assets/4417e2c9-3455-4b65-ac22-cf530104cd1a)

## Future Scope

- Welcome animation when opening the app for the first time
- Lazy Loading: Implement lazy loading for images to improve performance.
- Infinite Scrolling: Extend the grid to support infinite scrolling, allowing users to browse through more photos without needing to load new pages.
- User Favorites: Enable users to mark their favorite photos and save them for quick access later.
- Search Functionality: Add a search feature that allows users to search for specific topics or photos within the app.
- Voice Command Support: Implement voice control for navigating the app, allowing users to interact with it using voice commands on their Smart TV.
- Theme Customization: Provide users with the option to switch between different color themes (e.g., dark mode, light mode) for a more personalized experience.

<p align="center">Made with ❤️ in React and TypeScript</p>
