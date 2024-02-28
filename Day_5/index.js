const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
  const actualExtension = path.extname(filePath);

  if (actualExtension === expectedExtension) {
    console.log(`File has the expected extension: ${expectedExtension}`);
  } else {
    console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
  }
}

// Test Cases
checkFileExtension('text-File/file.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png
