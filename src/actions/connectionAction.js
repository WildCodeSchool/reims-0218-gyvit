export const IS_USER = "IS_USER"

export const isUserAction = (user, token) => ({ type: IS_USER, user, token })
