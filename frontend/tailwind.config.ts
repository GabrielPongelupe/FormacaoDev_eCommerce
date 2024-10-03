import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'violet-dark': {
                    DEFAULT: '#0E001D',
                    foreground: '#FFF',
                },
            },
            scale: {
                '103': '1.03', // Adiciona a escala 101
            },
        },
    },
    plugins: [],
}
export default config
