const fs = require('fs/promises');
const path = require('path');

async function getFileList() {
  try {
    const files = await fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const [name, ext] = file.name.split('.');
        const filePath = path.join(__dirname, 'secret-folder', file.name);
        const stats = await fs.stat(filePath);
        console.log(`${name} - ${ext} - ${(stats.size / 1024).toFixed(2)} KB`);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

getFileList();