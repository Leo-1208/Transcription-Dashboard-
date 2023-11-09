# Transcription Dashboard 

Welcome to the **Transcription Interface** repository. This dashboard has been specifically designed for ABC firm that excels in developing Speech-to-Text software solutions. The user-friendly interface ensures a hassle-free experience for converting your video and audio files into text format.

## Live Demo

Experience the functionality of our Transcription Interface through the following live demos:
- [Vercel App Demo](https://transcription-interface.vercel.app/)
- [GitHub Pages Demo](https://leo-1208.github.io/Transcription-Interface/)

## Key Features

### Navbar

- **Search Bar**: An intuitive search bar equipped with an 'X' button that clears the text once something is typed.

### Sidebar

- **Menu Bar**: A responsive set of menu options that change upon hovering with the pointer.

### Transcription Section

- **File Input**: Allows users to input video/audio files for transcription.
- **Transcribe Button**: Clicking this button triggers a pop-up box with a transparent background that can be closed by clicking outside the main area.

#### File Upload Details

Upon clicking the upload area:

- Accepts `.mp4`, `.mp3`, `.wav`, `.m4a` file extensions.
- Checks for the file size to be less than 1GB; otherwise, an error is thrown upon attempting transcription.
- Adds a row to track the file information:
  - **Name**: The name of the file.
  - **Type**: The file extension.
  - **Duration**: The length of the video/audio file (currently hard-coded to 0.0).
  - **Date Created**: The time when the file was uploaded.
  - **Last Updated**: Currently hard-coded to "Pending".
  - **Action**: Hard-coded to "Details" - a link or button for more information on the transcription.

### History Table

- Dynamically updates to display the details of the file selected for transcription.
- The **Action** column contains the transcribed file. The transcription process can be handled using Node.js and appropriate APIs.

## How to Use

1. **Clone the repository**

   ```sh
   git clone https://github.com/leo-1208/Transcription-Interface.git
