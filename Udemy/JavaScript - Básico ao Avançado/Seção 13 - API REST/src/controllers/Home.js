class Home {
  async index(req, res) {
    res.send(`API running | Port: ${process.env.PORT} | URL: ${process.env.APP_URL} 🚀`);
  }
}

export default new Home();
