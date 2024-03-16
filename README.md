# 3D Product Configurator

This project is a 3D product configurator that allows users to customize the colors and textures of various parts of a 3D model. It utilizes HTML, CSS, Bootstrap, and JavaScript to create an interactive user interface.


## Features

### Customizer
- USer can navigate between views
- All posssible Proper annotations/ hotspots included in the glb viewer.
- View navigator provided 

### Beta
- Ability to change color of all possible views
- Feature to upload any file texture
- Feature to update file texture for all possible views
- User friendly model rotater, for enhance 360 degree view support.
- User friendly title defining the feature of app

## Techstack
 - HTML,CSS,JS,Bootstrap,Model-view lib.

## Overview

The project consists of an HTML file (`index.html`) that contains the structure of the web page, including the layout, color pickers, and file input elements for uploading textures. It also includes JavaScript code (`script` tag within `index.html`) to handle user interactions, such as selecting colors and uploading textures, and updating the 3D model accordingly.

The 3D model is displayed using the `<model-viewer>` element, which is a web component for rendering interactive 3D models in the browser. The model is loaded from an external source (`https://cdn.charpstar.net/Assets/WorkTest-Table.glb`).

## Instructions for Running Locally

To run the project locally, follow these steps:

1. Clone the repository to your local machine:
To run the project locally, follow these steps:

Clone the repository to your local machine:
bash
Copy code
git clone [<repository-url>](https://github.com/mrniamster/Charpstar.git)
Navigate to the project directory:
bash
Copy code
cd <project-directory>
Open the index.html file in a web browser.
Project Structure
index.html: Contains the structure of the web page, including layout and user interface elements.
style tag in index.html: Contains CSS styles for styling the page elements.
script tag in index.html: Contains JavaScript code for handling user interactions and updating the 3D model.
bootstrap.min.css: Bootstrap stylesheet for styling the page using Bootstrap CSS classes.
model-viewer.min.js: JavaScript library for rendering 3D models in the browser using the <model-viewer> element.
