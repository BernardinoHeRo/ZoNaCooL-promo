/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Definir colores personalizados aquí
                'zc-first': '#021024',
                'zc-first-comp': '#79602f',
                'zc-second': '#052759',
                'zc-third': '#5482b3',
                'zc-fourth': '#7DA0CA',
                'zc-fifth': '#C2E8FF',
                // Colores neutros compatibles
                'zc-neutral-100': '#FFFFFF', // Blanco
                'zc-neutral-200': '#F5F5F5', // Gris claro
                'zc-neutral-300': '#CCCCCC', // Gris medio
                'zc-neutral-400': '#999999', // Gris oscuro
                'zc-neutral-500': '#000000', // Negro
            },
            screens: {
                // Agregar resoluciones personalizadas
                'custom-1024': {'raw': '(min-width: 1024px)'}, // Resolución personalizada 1024px
                'custom-1280': {'raw': '(min-width: 1280px)'}, // Resolución personalizada 1280px
                // Puedes agregar más resoluciones personalizadas aquí según sea necesario
            },
        },
    },
    plugins: [],
}
