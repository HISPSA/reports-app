import { actionTypes } from '../actions/standardReport'
import {
    ADD_NEW_REPORT_ACTION,
    CONTEXT_MENU_ACTION,
} from '../../pages/standard-report/standard.report.conf'

export const defaultState = {
    reports: [],
    selectedReport: {},
    selectedAction: '',
    search: '',
    open: false,
    reportData: '',
    loading: false,
    loadingError: '',
    requestDelete: false,
    loadingDetails: false,
    loadingSendReport: false,
}

// eslint-disable-next-line complexity
export const standardReport = (state = defaultState, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.LOADING_STANDARD_REPORTS_START:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.LOADING_STANDARD_REPORTS_SUCCESS:
            return {
                ...state,
                reports: payload,
                loading: false,
            }

        case actionTypes.LOADING_STANDARD_REPORTS_ERROR:
            return {
                ...state,
                loading: false,
            }

        case actionTypes.SET_SEARCH:
            return {
                ...state,
                search: payload,
            }

        case actionTypes.ADD_REPORT_FORM_SHOW:
            return {
                ...state,
                open: true,
                selectedReport: payload,
                selectedAction: ADD_NEW_REPORT_ACTION,
            }

        case actionTypes.EDIT_REPORT_FORM_SHOW:
            return {
                ...state,
                selectedReport: payload,
                selectedAction: CONTEXT_MENU_ACTION.EDIT,
            }

        case actionTypes.CREATE_REPORT_SHOW:
            return {
                ...state,
                open: true,
                selectedReport: payload,
                selectedAction: CONTEXT_MENU_ACTION.CREATE,
            }

        case actionTypes.SHARING_SETTINGS_SHOW:
            return {
                ...state,
                open: true,
                selectedReport: payload,
                selectedAction: CONTEXT_MENU_ACTION.SHARING_SETTINGS,
            }

        case actionTypes.ADD_REPORT_FORM_HIDE:
        case actionTypes.EDIT_REPORT_FORM_HIDE:
        case actionTypes.CREATE_REPORT_HIDE:
        case actionTypes.SHARIING_SETTINGS_HIDE:
        case actionTypes.CLOSE_CONTEXT_MENU:
            return {
                ...state,
                open: false,
                selectedReport: {},
                selectedAction: '',
            }

        case actionTypes.REQUEST_DELETE_STANDARD_REPORT:
            return {
                ...state,
                requestDelete: true,
                selectedReport: payload,
                selectedAction: CONTEXT_MENU_ACTION.DELETE,
            }

        case actionTypes.DELETE_STANDARD_REPORT_START:
            return {
                ...state,
                requestDelete: false,
                loading: true,
            }

        case actionTypes.DELETE_STANDARD_REPORT_SUCCESS:
            return {
                ...state,
                selectedReport: {},
                selectedAction: '',
                loading: false,
            }

        case actionTypes.DELETE_STANDARD_REPORT_ERROR:
            return {
                ...state,
                loading: false,
            }

        case actionTypes.LOADING_STANDARD_REPORTS_DETAILS_START:
            return {
                ...state,
                loadingDetails: true,
            }

        case actionTypes.LOADING_STANDARD_REPORTS_DETAILS_SUCCESS:
            return {
                ...state,
                open: true,
                loadingDetails: false,
                selectedReport: payload,
            }

        case actionTypes.LOADING_STANDARD_REPORTS_DETAILS_ERROR:
            return {
                ...state,
                loadingDetails: false,
            }

        case actionTypes.STANDARD_REPORT_SEND_START:
            return {
                ...state,
                loadingSendReport: true,
            }

        case actionTypes.STANDARD_REPORT_SEND_SUCCESS:
        case actionTypes.STANDARD_REPORT_SEND_ERROR:
            return {
                ...state,
                loadingSendReport: false,
            }

        default:
            return state
    }
}
