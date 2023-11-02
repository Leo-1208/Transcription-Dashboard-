// Getting the modal, transcribe button, and close button
var modal = document.querySelector(".modal");
var transcribeBtn = document.querySelector(".transcribe-btn");
var closeBtn = document.querySelector(".close-btn");

// Show the modal when Transcribe button is clicked
transcribeBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Hide the modal when close button is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Hide the modal if anywhere outside the modal content is clicked
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function triggerFileUpload() {
    document.getElementById('fileInput').click();
}

function validateFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        // Hide the upload prompt and show the selected file name
        document.getElementById('uploadPrompt').style.display = 'none';
        const selectedFileName = document.getElementById('selectedFileName');
        selectedFileName.textContent = `Selected File: ${file.name}`;
        selectedFileName.style.display = 'block';

        // Check for audio size
        if (file.type.includes('audio') && file.size > 1e9) {  // 1GB in bytes
            alert('Audio file size exceeds the 1GB limit.');
            fileInput.value = '';  // Clear the file input
            return;
        }

        // Check for video size
        if (file.type.includes('video') && file.size > 10e9) {  // 10GB in bytes
            alert('Video file size exceeds the 10GB limit.');
            fileInput.value = '';  // Clear the file input
            return;
        }

        // Here you can proceed with the transcribe functionality if file is valid
    }
}

let selectedFile = null;

// Event listener for when a file is selected
document.getElementById('fileInput').addEventListener('change', function(event) {
    selectedFile = event.target.files[0];
});

// Event listener for when the "Transcribe" button is clicked
document.getElementById('transcribeButton').addEventListener('click', function() {
    if (selectedFile) {
        const tableBody = document.getElementById('recentFilesTableBody');
        
        const fileNameParts = selectedFile.name.split('.');
        const fileExtension = fileNameParts.pop();
        const fileName = fileNameParts.join('.');
        const uploadDate = new Date().toLocaleString();
        
        // Need algo or API to get duration, placeholder for now.
        const videoDuration = "00:00:00"; 

        const newRow = `
            <tr>
                <td>${fileName}</td>
                <td>${fileExtension}</td>
                <td>${videoDuration}</td>
                <td>${uploadDate}</td>
                <td class="warning">Pending</td>
                <td class="primary">Details</td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', newRow);
        
        //Reset the file input for the next file
        document.getElementById('fileInput').value = '';

        closePopup();
    }
});

function closePopup() {
    const popup = document.getElementById('filePopup');
    popup.style.display = 'none';
}