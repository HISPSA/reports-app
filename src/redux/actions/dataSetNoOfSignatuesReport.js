import { getDataSetReport } from '../../utils/api'
import {
    loadingReportDataStart,
    loadingReportDataSuccessWithFeedback,
    loadingReportDataErrorWithFeedback,
} from './reportData'

export const actionTypes = {
    SELECT_NO_OF_SIGNATURES: 'SELECT_NO_OF_SIGNATURES',
    LOADING_NUMBER_OF_SIGNATURES: 'LOADING_NUMBER_OF_SIGNATURES',
    LOADING_NUMBER_OF_SIGNATURES_SUCCESS:
        'LOADING_NUMBER_OF_SIGNATURES_SUCCESS',
}

export const selectNoOfSignatures = noOfSignatureId => ({
    type: actionTypes.SELECT_NO_OF_SIGNATURES,
    payload: noOfSignatureId,
})

export const loadingNoOfSignaturesStart = () => ({
    type: actionTypes.LOADING_NUMBER_OF_SIGNATURES,
})

export const NoOfSignaturesSuccess = noOfSignatures => ({
    type: actionTypes.LOADING_NUMBER_OF_SIGNATURES_SUCCESS,
    payload: noOfSignatures,
})

export const loadNoOfSignatures = () => (dispatch, getState) => {
    dispatch(loadingNoOfSignaturesStart())

    const { dataSetNoOfSignatuesReport } = getState()

    const formattedNoOfSignatures = [
        {
            id: 0,
            displayName: '0',
        },
        {
            id: 1,
            displayName: '1',
        },
        {
            id: 2,
            displayName: '2',
        },
        {
            id: 3,
            displayName: '3',
        },
    ]

    if (dataSetNoOfSignatuesReport.noOfSignatures.length === 0) {
        dispatch(NoOfSignaturesSuccess(formattedNoOfSignatures))
    }
}
