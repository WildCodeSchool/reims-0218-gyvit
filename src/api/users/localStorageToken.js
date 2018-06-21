/**
 *
 * @param {*} token
 *
 */
export const storeToken = token => localStorage.setItem("token", token)

/**
 * @param nothing
 * @returns string for token
 */

export const getToken = () => localStorage.getItem("token")

/**
 * @returns string for token
 */

export const removeToken = () => localStorage.removeItem("token")
