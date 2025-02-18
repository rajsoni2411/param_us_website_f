const fs = require("fs");
const path = require("path");
const logsDir = path.join(__dirname, "../logs");

//----------------------------------Create logs directory if it doesn't exist yet-------------------------------------
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}
const logMessage = (level, message) => {
  // ----------------------------------Create log file with current date-------------------------------------
  const now = new Date();

  //---------------------------------------Format the date and time--------------------------------------
  const formattedDate = now.toISOString().split("T")[0];
  //---------------------------------------Format the time--------------------------------------
  const formattedTime = now.toLocaleTimeString("en-US", { hour12: false });

  //--------------------------------Create the log file name with current date-------------------------------
  const logFile = path.join(logsDir, `${formattedDate}.log`);

  //----------------------------------Append the log entry to the log file-------------------------------------
  const logEntry = `[${formattedDate} ${formattedTime}]  [${level}] ${message}\n`;
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

//---------------------Export the logMessage function for other modules to use--------------------------

logMessage.info = (message) => logMessage("info", message);

logMessage.warn = (message) => logMessage("warn", message);
logMessage.error = (message) => logMessage("error", message);
logMessage.success = (message) => logMessage("success", message);

module.exports = logMessage;
