const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const distDir = path.join(__dirname, "..", "dist");

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });

    fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}

if (fs.existsSync(publicDir)) {
    copyDir(publicDir, distDir);
}
