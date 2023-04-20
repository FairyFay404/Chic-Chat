/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/**.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
                Rubik: ['Rubik', "sans-serif"],
                Prompt : ['Prompt', 'sans-serif']
            },
            width: {
                "10" : "10px",
            },
            
        },
        borderRadius: {
            "20" : "20px",    
        },
    },
plugins: [
    require('tailwind-scrollbar'),
],

}

