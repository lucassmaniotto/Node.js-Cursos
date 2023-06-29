class Home {
  async index(req, res) {
    res.send(`API running on port ${process.env.PORT} 🚀`);
  }
}

export default new Home();
