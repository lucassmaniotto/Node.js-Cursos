class ImageController {
  async create(req, res) {
    return res.json(req.file);
  }
}

export default new ImageController();
