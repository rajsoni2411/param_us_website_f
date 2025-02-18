const { subscribe } = require("./subscriptionModel");

const subscriptionService = async (data) => {
    console.log(data)
  const res = await subscribe(data);
  return res;
};

module.exports = { subscriptionService };
