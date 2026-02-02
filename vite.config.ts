import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/pixel-crowns/', // Set this to your repo name
    server: {
        host: true // Expose to network for mobile verification if needed
    }
})
