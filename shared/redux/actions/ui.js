import { reducers } from 'redux/core'


const showRequestLoader = () => reducers.ui.setRequestLoaderVisibility(true)
const hideRequestLoader = () => reducers.ui.setRequestLoaderVisibility(false)


export default {
  showRequestLoader,
  hideRequestLoader,
}
