import 'react-toastify/dist/ReactToastify.css'
import './app.scss'
import '../app/config/dayjs.ts'

import { Card } from 'reactstrap'
import { BrowserRouter } from 'react-router-dom'

import Header from '../app/shared/layout/header/header'
import Footer from '../app/shared/layout/footer/footer'

import AppRoutes from '../app/routes'

export const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header />

                <div
                    className="container-fluid view-container"
                    id="app-view-container"
                >
                    <Card className="jh-card card">
                        <br />
                        <br />
                        <br />
                        <br />
                        <AppRoutes />
                    </Card>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}
