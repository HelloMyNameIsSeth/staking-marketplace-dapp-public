
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    console.warn('Warning: .env file not found.');
}

const REQUIRED_VARS = ['VITE_WALLET_CONNECT_PROJECT_ID'];
const OPTIONAL_VARS = [
    'VITE_API_URL_PROD',
    'VITE_API_URL_DEV',
    'VITE_API_KEY',
    'VITE_GOOGLE_CLIENT_ID',
    'VITE_APP_ENV',
    'VITE_PORT'
];

let missingRequired = [];
let missingOptional = [];

// Check required variables
REQUIRED_VARS.forEach((key) => {
    if (!process.env[key]) {
        missingRequired.push(key);
    }
});

// Check optional variables
OPTIONAL_VARS.forEach((key) => {
    if (!process.env[key]) {
        missingOptional.push(key);
    }
});

if (missingRequired.length > 0) {
    console.error('Error: The following required environment variables are missing:');
    missingRequired.forEach((key) => console.error(`  - ${key}`));
    console.error('\nPlease add them to your .env file.');
    process.exit(1);
}

if (missingOptional.length > 0) {
    console.warn('Warning: The following optional environment variables are missing:');
    missingOptional.forEach((key) => console.warn(`  - ${key}`));
    console.warn('The app will run, but some features may not work correctly.\n');
} else {
    console.log('Environment variables check passed.');
}
