import { ReducersMapObject } from '@reduxjs/toolkit'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import applicationProfile from './application-profile'

const rootReducer: ReducersMapObject = {
    applicationProfile,
    loadingBar,
}

export default rootReducer
