const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KAVI-EXE=4BA1SabY#WCF6LTi2MJmNg78h-YzyYgL0GF0NZPZ0SmZfznyFYXY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/4wFM1rbZ/temp-image.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "🤖𝗛𝗘𝗬 𝗜 AM Queen senu 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧 🤖𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 jester  🧑‍💻",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
 AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
MODE: process.env.MODE || "private"

};
