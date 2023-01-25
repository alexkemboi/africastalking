const AfricasTalking = require("africastalking");

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: "02e1c5aebb29df94272e79d091d46b3193460eafb3e885aa96315f3c2cf82bdd",
  username: "sandbox",
});

module.exports = async function sms() {
  // TODO: Send message
  //   sendSMS();
  try {
    const result = await africastalking.SMS.send({
      to: "+254726837210",
      message: "Hey AT Ninja! Wassup...",
      from: "16674",
    });
    console.log(result);
  } catch (ex) {
    console.error(ex);
  }
};
