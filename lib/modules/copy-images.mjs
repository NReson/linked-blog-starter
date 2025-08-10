import fs from 'fs-extra';
import path from 'path';

// Папка с постами (где у тебя .md файлы)
const POSTS_DIR = path.join(process.cwd(), 'content'); // меняй на свой путь
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

function copyImagesFromPosts() {
  fs.ensureDirSync(PUBLIC_IMAGES_DIR);

  // рекурсивно ищем картинки
  function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else {
        if (/\.(png|jpg|jpeg|gif|svg)$/i.test(file)) {
          const relativeDir = path.relative(POSTS_DIR, dir);
          const destDir = path.join(PUBLIC_IMAGES_DIR, relativeDir);
          fs.ensureDirSync(destDir);
          fs.copyFileSync(fullPath, path.join(destDir, file));
        }
      }
    });
  }

  walk(POSTS_DIR);
}

copyImagesFromPosts();
