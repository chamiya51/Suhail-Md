const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_42_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJYTY3VVBHUFgrNStib2pHMkp3b0w4bjIrNlRoNHFpVU8vUmFXNGQrZkJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI3NjkzNjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NzUxNzhEREI1MzlDMTM4RURFQUU4RDdDMzA1RTBFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxNTA5MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyNzY5MzY1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzE0QkNCNUQ1MkU4REIxMkQyMjkxRkM1QjE5QTk2MURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTUwOTI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1DTnZxazI5U1VtdWd1VXItNnRaeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWRjZWY4MjgtYjc5Yi00ZTVhLWI0M2QtMTU0Y2NjODFiMDk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDEyNCxcbiAgICAgIDIzLFxuICAgICAgMjA1LFxuICAgICAgMTU2LFxuICAgICAgMzQsXG4gICAgICAyMzUsXG4gICAgICAyMjYsXG4gICAgICAyNDgsXG4gICAgICAxNjcsXG4gICAgICAxMDEsXG4gICAgICAyMzYsXG4gICAgICAxNixcbiAgICAgIDEwOSxcbiAgICAgIDE4NyxcbiAgICAgIDIzMyxcbiAgICAgIDc1LFxuICAgICAgMjI2LFxuICAgICAgMjYsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxNzMsXG4gICAgICAxNjcsXG4gICAgICAxMyxcbiAgICAgIDIwMSxcbiAgICAgIDEyOSxcbiAgICAgIDY2LFxuICAgICAgMTU5LFxuICAgICAgMTYzLFxuICAgICAgMTA5LFxuICAgICAgMjE4LFxuICAgICAgMTIyLFxuICAgICAgMTQ3LFxuICAgICAgMTU4LFxuICAgICAgMTI5LFxuICAgICAgMTU2LFxuICAgICAgMTExLFxuICAgICAgMjI0LFxuICAgICAgMTEwLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmpWcm9rQkVJZlhuYlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjaWJ5aytlS1JWbXVpc29TdnlwSHlackswL0c2OEoveHdNbWl2Ni9FaGdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlrQWJRNjNLdSt5Z2Jsa0RBampxOXk4c0VteFoyUXBUNGV0eDQxVzhrVDNHc2Y3R0UvVks5NnJ0TWw1QXFxV1pVeHZ3M1g1RDZkS2V1Tk5xZEJGeURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInprNm42Vmlxbm9JSFcvbXRqWTQ5WEN5RWlUdW84Ulg2OHpHQ1ZaZm1MT29JbVZqOVpiVXlKRUVRRUFZR1pDZHZGTzVoVUZ2TU5RcUtRQ05Fbmo3N2h3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Mjc2OTM2NTY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMTE2MDI0ODE3MjYyOToxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTS1kgQk9UXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNzY5MzY1NjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNTA5MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwxOS5qc29uIjogIntcImtleURhdGFcIjpcImI1N0lvaW1jMjRTQzNSeW1QVWJQaHg3dysva2dwL01yYTJBT1FLSjVqaGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg4MDc0NDU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNDY3Mzk4NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
