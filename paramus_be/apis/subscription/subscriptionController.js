const { subscriptionService } = require("./subscriptionService");
const subscriptionController = async (req, res) => {
  try {
    const data = req?.body;
    console.log("qq",data);
    const response = await subscriptionService(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { subscriptionController };
