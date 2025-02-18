const { contactUs } = require('./contactUsModel')

const contactUsService = async (data) => {
    const res = await contactUs(data);
    return res;
};

module.exports = {contactUsService};