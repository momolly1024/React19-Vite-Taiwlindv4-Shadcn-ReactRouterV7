#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Usage: node install-icon.mjs bell
// Or: node install-icon.mjs check

const iconName = process.argv[2];

if (!iconName) {
    console.error('Please provide icon name, e.g.: node install-icon.mjs bell');
    process.exit(1);
}

const iconUrl = `https://animateicons.vercel.app/icons/${iconName}.json`;
const targetDir = path.join(process.cwd(), 'src', 'components', 'icons');

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`✓ Created directory: ${targetDir}`);
}

// Download and process JSON file
function downloadIcon(url, iconName) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const iconData = JSON.parse(data);
                    resolve(iconData);
                } catch (error) {
                    reject(new Error(`Failed to parse JSON: ${error.message}`));
                }
            });
        }).on('error', (error) => {
            reject(new Error(`Download failed: ${error.message}`));
        });
    });
}

// Capitalize first letter of string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main installation logic
async function installIcon() {
    try {
        console.log(`📥 Downloading ${iconName} icon...`);
        
        const iconData = await downloadIcon(iconUrl, iconName);
        
        if (!iconData.files || iconData.files.length === 0) {
            throw new Error('No file content found in JSON');
        }
        
        // Get the first file (usually the main component file)
        const mainFile = iconData.files[0];
        const componentName = capitalizeFirstLetter(iconName) + 'Icon';
        const fileName = `${componentName}.tsx`;
        const filePath = path.join(targetDir, fileName);
        
        // Write file
        fs.writeFileSync(filePath, mainFile.content, 'utf8');
        
        console.log(`✓ Successfully installed icon: ${fileName}`);
        console.log(`📁 File location: ${filePath}`);
        console.log(`📝 Usage:`);
        console.log(`   import { ${componentName}, ${componentName}Handle } from '@/components/icons/${componentName}';`);
        console.log(`   <${componentName} size={32} className="cursor-pointer" />`);
        
        // Check if dependencies are installed
        const packageJsonPath = path.join(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (!packageJson.dependencies || !packageJson.dependencies.motion) {
            console.log(`⚠️  Please ensure motion dependency is installed:`);
            console.log(`   npm install motion --legacy-peer-deps`);
        }
        
        // Check if utils.ts exists
        const utilsPath = path.join(process.cwd(), 'src', 'lib', 'utils.ts');
        if (!fs.existsSync(utilsPath)) {
            console.log(`⚠️  Please ensure src/lib/utils.ts file exists with cn function`);
        }
        
    } catch (error) {
        console.error(`❌ Installation failed: ${error.message}`);
        process.exit(1);
    }
}

// Execute installation
installIcon();