import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.scss'

import { store } from './config/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('App')
const rootNotNull = rootElement!
const root = createRoot(rootNotNull)

const render = (Component) =>
    root.render(
        <div>
            <Provider store={store}>
                <Component />
            </Provider>
        </div>
    )

render(App)
