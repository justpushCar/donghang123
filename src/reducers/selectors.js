export const getLoginUsername = state => state.all.get('register').get('password')
export const getLoginPassword = state => state.all.get('login').get('password')

export const getAdminUsername = state => state.all.get('admin').get('username')
export const getAdminNickname = state => state.all.get('admin').get('nickname')
export const getAdminMobile = state => state.all.get('admin').get('mobie')

export const getState = state => state
export const getSendtoSelectValue = state => state.all.get('sendtoSelectValue')
export const getSendtoContent = state => state.all.get('sendtoContent')
export const getSendFilenameFilename = state => state.all.getIn(['sendFilename', 'filename'])
export const getSendFilenameUploadedFilename = state => state.all.getIn(['sendFilename', 'uploadedFilename'])



export const registerIphone = state => state.all.get('register').get('iphone')
export const registerPassword = state => state.all.get('register').get('password')
export const registerImgode = state => state.all.get('register').get('imgcode')
export const registerCode = state => state.all.get('register').get('code')