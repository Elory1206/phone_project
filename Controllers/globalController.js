const indexController = (req, res) => {
    res.render("base");
};

const introController = (req, res) => {
    res.render("intro");
};

const productController = (req, res) => {
    res.render("product");
};

const glboalControllers = {
    indexController,
    introController,
    productController,
};

module.exports = glboalControllers;