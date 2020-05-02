export const logout = () => {
  localStorage.removeItem('wukong')
  window.location.href = '/'
}
