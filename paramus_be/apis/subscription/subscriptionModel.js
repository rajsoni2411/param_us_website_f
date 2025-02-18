const { Subscription } = require("../../models");

const { response } = require("express");
const subscribe = (data) => {
    console.log("data", data);
    return new Promise((resolve, reject) => {
      
    Subscription.create(data)
      .then(() => {
        resolve({
          isError: false,
          message: "subscribe Successful",
        });
      })
      .catch((error) => {
        console.error("Error while subscribing:", error);
        reject({
          isError: true,
          message: "Error While subscribe",
        });
      });
  });
};

module.exports = { subscribe };
