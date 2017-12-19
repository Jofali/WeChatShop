const UPDATE_LOADING = 'UPDATE_LOADING'
const UPDATE_TEXT = 'UPDATE_TEXT'
const UPDATE_SEEN = 'UPDATE_SEEN'

export default {
  [UPDATE_LOADING] (state, data) {
    state.loading = data.isLoading
  },
  [UPDATE_TEXT] (state, data) {
    state.text = data
  },
  [UPDATE_SEEN] (state, data) {
    state.seen = data
  }
}
