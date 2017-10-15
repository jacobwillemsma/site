let web3

const waitWeb3 = () => new Promise((resolve) => {
  if (typeof window.web3 !== 'undefined') {
    web3 = window.web3
    resolve(web3)
  }
  else {
    const timer = setInterval(() => {
      if (typeof window.web3 !== 'undefined') {
        clearInterval(timer)
        web3 = window.web3
        resolve(window.web3)
      }
    }, 300)
  }
})


export default () => web3

export {
  waitWeb3,
}
