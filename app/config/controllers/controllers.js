exports.create = (req, res) => {
    res.send({ message: "create handler"});
};

exports.findALL = (req, res) => {
    res.send({ mesage: "findALL handler"});
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler"});
};

exports.update = (req, res) => {
    res.send({ mesage: "update handler"});
};

exports.delete = (req, res) => {
    res.send({ message: "delete handler"});
};

exports.deleteALL = (req, res) => {
    res.send({ mesage: "deleteALL handler"});
};

exports.findALLFavorite = (req, res) => {
    res.send({ mesage: "findALLFavorite handler"});
};
