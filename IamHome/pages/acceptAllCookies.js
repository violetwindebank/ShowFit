const { I } = inject();

module.exports = {

  acceptAllCookies: {css: '#onetrust-accept-btn-handler'},

  sendForm(acceptAllCookies) {
    I.wait(5)
    I.click({css: '#onetrust-accept-btn-handler'})
  }
}
