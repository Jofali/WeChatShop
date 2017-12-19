const UPDATE_LOADING = 'UPDATE_LOADING'

export default {
  [UPDATE_LOADING] (state, data) {
    state.loading = data.isLoading
  }
}
