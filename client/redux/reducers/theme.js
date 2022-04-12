const CHANGE_THEME = 'CHANGE_THEME'

const initialState = {
  theme: 'lime'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, theme: action.theme }
    }
    default:
      return state
  }
}

export function changeTheme(theme) {
  return { type: CHANGE_THEME, theme }
}
