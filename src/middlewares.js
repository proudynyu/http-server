module.exports = {
  getHome: (req, res) => {
    const response = {
      msg: 'This is Home', 
      status: 200
    }
    res.end(JSON.stringify(response))
  }
}