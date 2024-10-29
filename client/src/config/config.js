// src/config/config.js
// let base_url = '';

// if (typeof window === 'undefined') {
//     // This is server-side code
//     const mode = process.env.MODE || 'development'; // Read mode dynamically from .env
//     if (mode === 'production') {
//         base_url = ""; // Add your production URL here
//     } else {
//         base_url = 'http://localhost:5000'; // Development URL
//     }
// } else {
//     // This is client-side code
//     const mode = import.meta.env.VITE_MODE || 'development'; // Use VITE_MODE for client-side
//     if (mode === 'production') {
//         base_url = ""; // Add your production URL here
//     } else {
//         base_url = 'http://localhost:5000'; // Development URL
//     }
// }

// export { base_url };

let base_url = '';

if (typeof window === 'undefined') {
    const mode = process.env.MODE || 'development';
    base_url = mode === 'production' ? '' : 'http://localhost:5000';
} else {
    const mode = import.meta.env.VITE_MODE || 'development';
    base_url = mode === 'production' ? '' : 'http://localhost:5000';
}

export { base_url };




// const production = 'production'
// const development = 'development'

// const mode = development
// let base_url = ''

// if (mode === production) {
//     base_url = ""
// } else {
//     base_url = 'http://localhost:5000'
// }

// export { base_url }