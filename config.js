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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923233459378";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923233459378";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_23_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6dTlpTS9VbHFOL3F1S2lRd2s2TXM5c0tHMU5oQ3V1UGxOK05VVzN5MzhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzMzQ1OTM3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQxMkJGOTVGMzNEQzAyRTA3OUVDRjE4MTMyNEJBRkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU2MDQ1Mzk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjMzNDU5Mzc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMTExRjNDNEUzMDBCNUI1OTk5OTc3OTkwOTYyQTM1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTYwNDUzOThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUWY5RVlHTjNUaU9ZSDhuWWVITF91Z1wiLFxuICBcInBob25lSWRcIjogXCI1ZmQ1OGU1Zi0wNzYwLTQ3ZjgtOTBkMi1iZDM5ZmQ3YmEzYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDI1NCxcbiAgICAgIDE1MixcbiAgICAgIDk4LFxuICAgICAgNzYsXG4gICAgICA3MCxcbiAgICAgIDUzLFxuICAgICAgMTc5LFxuICAgICAgMTk4LFxuICAgICAgMTQzLFxuICAgICAgMTc3LFxuICAgICAgMTcyLFxuICAgICAgMzIsXG4gICAgICAxOTksXG4gICAgICAxODgsXG4gICAgICAxLFxuICAgICAgODQsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDEwMCxcbiAgICAgIDYwLFxuICAgICAgODYsXG4gICAgICAwLFxuICAgICAgMjA0LFxuICAgICAgMzMsXG4gICAgICAyNDQsXG4gICAgICA4OSxcbiAgICAgIDE2OSxcbiAgICAgIDE4NCxcbiAgICAgIDgyLFxuICAgICAgNDksXG4gICAgICA2OSxcbiAgICAgIDg2LFxuICAgICAgMTQ5LFxuICAgICAgMTg4LFxuICAgICAgMjEzLFxuICAgICAgMjA5LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzdRa1o0REVNL0FyTVVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTZzVJci9iRDEvRGZJbGhPUHYyU3ZwV29GNE5jVTJEOFpKUGQ5VEVJb1NvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdhekdFbWh4MlFrbjloWkczNm1RMGhGVkRZS3ZlZm1tSHl0bkNoRVlDTnFzTHhNQnpIODdUd2dESkhTYlNnZHpiZHlJZkFRd0NqY2FGbFhmTW5nNEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIno0UjhoLzJpSTBRWVE2aElWUHdSM2d3MDJmNEdOdFB5SmF4dlIvM0p4eUJVSEZSUFRxV05MSWV5ZmdWSVk2ZmJBOEhScWxjK282VGxXM0hwRUVVQkFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjMzNDU5Mzc4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxNDk3MzEyMjAyOTQyOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QhMmi4bSPyapz4bSbyarhtIQg8J2QheG0j+G0ismqyapcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzMzQ1OTM3ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU2MDQ1Mzk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVo0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWjQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZbWhYUE5CQ2l6bzQ5RXpqQ1c5ekF2TnBEZzNROWJGMVBwVXNDRm15eWU4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2ODUwOTgwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU2MDQ1Mzk2ODU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
