import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create output directory if it doesn't exist
const outputDir = join(__dirname, 'dist');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// Create a file to stream archive data to
const output = createWriteStream(join(outputDir, 'project.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

// Listen for all archive data to be written
output.on('close', () => {
  console.log(`Archive created: ${archive.pointer()} total bytes`);
});

archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files to the archive
archive.glob('**/*', {
  ignore: [
    'node_modules/**',
    'dist/**',
    '.git/**',
    'export-project.js',
    'project.zip'
  ]
});

// Finalize the archive
archive.finalize();