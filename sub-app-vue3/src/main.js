import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app = null

function render(props = {}) {
    const { container } = props
    app = createApp(App)
    app.mount(container ? container.querySelector('#app') : '#app')
}

renderWithQiankun({
    mount(props) {
        render(props)
    },
    bootstrap() {
        console.log('sub-app bootstraped')
    },
    unmount() {
        app?.unmount()
    },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
}
