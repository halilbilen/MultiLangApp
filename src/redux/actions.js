export const LANGUAGE = "language"
import TR from '../languageTR.json'
import EN from '../languageEN.json'

export function setLanguage(lang) {
    const language={
        tr:TR,
        en:EN
    }
    return function (dispatch) {
        dispatch({
            type: LANGUAGE,
            payload: language[lang]
        })
    }
}