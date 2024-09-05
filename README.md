# Matrix-Detection Web App

This project is a web application that performs real-time object detection using your webcam, styled with a cool Matrix-inspired theme. It uses TensorFlow.js and the COCO-SSD model for object detection, and features a falling "digital rain" effect in the background.

## Features

- Real-time object detection using your webcam
- Matrix-inspired design with falling digital rain effect
- Displays bounding boxes and labels for detected objects
- Shows a list of uniquely detected objects with timestamps
- Responsive design for various screen sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- TensorFlow.js
- COCO-SSD Model

## Setup and Running

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/uditimadan/matrix-detection.git
   ```

2. Navigate to the project directory:
   ```
   cd matrix-detection
   ```

3. Open the `index.html` file in a modern web browser. You can do this by double-clicking the file or using a local server.

   Note: Some browsers may have security restrictions that prevent accessing the webcam when opening the file directly. In this case, you'll need to set up a local server. You can do this easily with Python:

   - For Python 3.x:
     ```
     python -m http.server
     ```
   - For Python 2.x:
     ```
     python -m SimpleHTTPServer
     ```

   Then open `http://localhost:8000` in your web browser.

4. Allow the application to access your webcam when prompted.

5. You should now see the Matrix-themed interface with your webcam feed. The application will start detecting objects in real-time.

## Usage

- The application will automatically start detecting objects once it loads and you've given permission to access your webcam.
- Detected objects will be outlined with green bounding boxes and labeled with their class and detection confidence.
- A list of uniquely detected objects will appear below the video feed, showing when each object was first detected.
- The falling "digital rain" effect in the background is purely aesthetic and does not affect the object detection functionality.

## Customization

Feel free to customize the application:

- Adjust the styling in `styles.css` to change the look and feel.
- Modify the Matrix rain effect or object detection parameters in `script.js`.
- Update the HTML structure in `index.html` if you want to add new elements or change the layout.

## Limitations

- The application requires an active internet connection to load the TensorFlow.js and COCO-SSD model libraries.
- Performance may vary depending on your device's capabilities and your webcam quality.
- The COCO-SSD model is trained on a specific set of object classes. It may not recognize objects outside of its training set.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/your-username/matrix-object-detection/issues) if you want to contribute.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## Acknowledgements

- TensorFlow.js team for providing the framework and COCO-SSD model
- The Matrix for inspiration
