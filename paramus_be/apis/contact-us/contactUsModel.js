const { ContactUs } = require('../../models');

const { response } = require("express");
const contactUs = (data) => {

    return new Promise((resolve, reject) => {
        ContactUs.create({ ...data })
            .then(() => {
                resolve({
                    isError: false,
                    message: "Message Sent Successfully",
                    data: data
                });
            })
            .catch((error) => {
                reject({
                    isError: true,
                    message: "Error While Sending message"
                    
                });
            });
    });
};

module.exports = { contactUs };


