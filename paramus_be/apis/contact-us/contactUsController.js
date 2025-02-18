const { contactUsService }=require('./contactUsService')
const contactUsController = async (req, res) => {
    try {
        const data = req?.body;
        console.log(data)
        const response = await contactUsService(data);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { contactUsController };