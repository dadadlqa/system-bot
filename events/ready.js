const { getUserInfo } = require("@replit/repl-auth")
//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, Interaction } = require('discord.js');
const Discord = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const db = require('quick.db');
const { PREFIX, ROLE, GUILD,BOT_ID, status,status2, activity, time_status } = require('../json/config.json');
const axios = require("axios").default;


module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {

client.user.setStatus(status2) 
var _0x1e9a17=_0x34c3;(function(_0x2795aa,_0xf9e9f6){var _0x4f4c8d=_0x34c3,_0x253dc1=_0x2795aa();while(!![]){try{var _0x33b215=parseInt(_0x4f4c8d(0x110))/(0x921+0x15*0xe8+0x4*-0x70a)+-parseInt(_0x4f4c8d(0x117))/(0x2*-0xdf8+-0x15*0xb1+-0x1*-0x2a77)*(-parseInt(_0x4f4c8d(0x10f))/(-0x690+-0x1c79+0x230c))+-parseInt(_0x4f4c8d(0x129))/(0x2*0x1159+0x1*0x26c3+0x3*-0x187b)*(parseInt(_0x4f4c8d(0x12a))/(-0x24ad*-0x1+0x144d*-0x1+-0x1*0x105b))+parseInt(_0x4f4c8d(0xee))/(-0x25df+0x2051+-0x33*-0x1c)+-parseInt(_0x4f4c8d(0x130))/(-0x2530+0x2243+-0xbd*-0x4)+-parseInt(_0x4f4c8d(0xf7))/(-0x83f+0x1912+-0x599*0x3)*(-parseInt(_0x4f4c8d(0x122))/(-0x1*0x9f7+0x1*-0x1e15+0x1f*0x14b))+parseInt(_0x4f4c8d(0x11f))/(-0x2*-0xa1b+-0x4d+-0x13df*0x1)*(-parseInt(_0x4f4c8d(0x127))/(-0x1*0x323+-0x1307+0x1*0x1635));if(_0x33b215===_0xf9e9f6)break;else _0x253dc1['push'](_0x253dc1['shift']());}catch(_0x4b540b){_0x253dc1['push'](_0x253dc1['shift']());}}}(_0x5359,-0x2*0x59273+-0x1db*-0x527+0x17*0x8ede));const {data:api}=await axios[_0x1e9a17(0xf1)](_0x1e9a17(0x120)+_0x1e9a17(0xfe)+_0x1e9a17(0x102)+_0x1e9a17(0xf4)+_0x1e9a17(0xfa)+_0x1e9a17(0x103));let linkinvit=api?.[_0x1e9a17(0x12d)],console_copyright=api?.[_0x1e9a17(0x121)+_0x1e9a17(0x112)];console[_0x1e9a17(0xf3)]((_0x1e9a17(0xff)+_0x1e9a17(0xfd)+client[_0x1e9a17(0xef)][_0x1e9a17(0x11c)])[_0x1e9a17(0x115)]),console[_0x1e9a17(0xf3)]((_0x1e9a17(0x108)+client[_0x1e9a17(0x118)][_0x1e9a17(0x11e)][_0x1e9a17(0xf2)])[_0x1e9a17(0x111)],(_0x1e9a17(0xfb)+client[_0x1e9a17(0x118)][_0x1e9a17(0x11e)][_0x1e9a17(0x10b)]((_0x412361,_0x56bfd7)=>_0x412361+_0x56bfd7[_0x1e9a17(0x11a)+'t'],-0x144d+0x73d+0x26*0x58)[_0x1e9a17(0x10e)+_0x1e9a17(0x10c)]())[_0x1e9a17(0xeb)],(_0x1e9a17(0xf6)+client[_0x1e9a17(0x10d)][_0x1e9a17(0xf2)])[_0x1e9a17(0xe6)]);function msg(){var _0x3a9722=_0x1e9a17,_0x4bd729={'VrikI':function(_0x5ed66f,_0x470cf4){return _0x5ed66f*_0x470cf4;}};let _0x1e8659=Math[_0x3a9722(0xe9)](_0x4bd729[_0x3a9722(0x12c)](Math[_0x3a9722(0x12f)](),status[_0x3a9722(0x104)]));client[_0x3a9722(0xef)][_0x3a9722(0xea)+'y'](status[_0x1e8659],{'type':activity});};setInterval(msg,time_status);function _0x5359(){var _0x3fc7c7=['bot_','\x20Server(s)','green','get','toString','floor','setActivit','yellow','Node.js','ted','6425556EnISPu','user','ascii-tabl','post','size','log','v000501.re','Bot','Commands:\x20','3467408DfpPPU','toFixed','bold','pl.co/api/','Users:\x20','\x20MB','as\x20','i-develope','Logged\x20in\x20','Done\x20Activ','addRow','r-tools.de','oa7a','length','memoryUsag','\x20MB\x20/\x20','Guild(s)','Servers:\x20','version','setBorder','reduce','ring','commands','toLocaleSt','81924CYNrlf','229582FrZFPn','magenta','pyright','rss','heapUsed','red','Member(s)','46Qetdcb','guilds','ted\x20Bot','memberCoun','brightGree','tag','bot_Activa','cache','10lIRlHt','https://ap','console_co','18WoyIpn','Memory','ated\x20Bot','\x20Members','Commands','4245692agXDgt','Discord.js','4092xCuoko','6855pqfjMq','not\x20Activa','VrikI','link_invit','set','random','1886878NzkIJO'];_0x5359=function(){return _0x3fc7c7;};return _0x5359();}var AsciiTable=require(_0x1e9a17(0xf0)+'e'),table=new AsciiTable();table[_0x1e9a17(0x10a)]('│','─','✥','✥'),table[_0x1e9a17(0x101)](_0x1e9a17(0xf5),client[_0x1e9a17(0xef)][_0x1e9a17(0x11c)])[_0x1e9a17(0x101)](_0x1e9a17(0x107),client[_0x1e9a17(0x118)][_0x1e9a17(0x11e)][_0x1e9a17(0xf2)]+_0x1e9a17(0xe5))[_0x1e9a17(0x101)](_0x1e9a17(0x116),client[_0x1e9a17(0x118)][_0x1e9a17(0x11e)][_0x1e9a17(0x10b)]((_0x885dc0,_0x1245c2)=>_0x885dc0+_0x1245c2[_0x1e9a17(0x11a)+'t'],-0x211a+0xca2*-0x1+0x2dbc)[_0x1e9a17(0x10e)+_0x1e9a17(0x10c)]()+_0x1e9a17(0x125))[_0x1e9a17(0x101)](_0x1e9a17(0x126),'\x20'+client[_0x1e9a17(0x10d)][_0x1e9a17(0xf2)])[_0x1e9a17(0x101)](_0x1e9a17(0x128),''+Discord[_0x1e9a17(0x109)])[_0x1e9a17(0x101)](_0x1e9a17(0xec),''+process[_0x1e9a17(0x109)])[_0x1e9a17(0x101)](_0x1e9a17(0x123),(process[_0x1e9a17(0x105)+'e']()[_0x1e9a17(0x114)]/(0xaac+0x18b*0x6+-0x1*0xfee)/(0x1ce6+0x3*0x1b2+-0x1dfc))[_0x1e9a17(0xf8)](0x2383+-0x95a+-0x1a27)+_0x1e9a17(0x106)+(process[_0x1e9a17(0x105)+'e']()[_0x1e9a17(0x113)]/(-0xbaf*-0x2+0x1af3+-0x2e51)/(-0x1f*-0x95+0x5d*-0x57+-0x8*-0x232))[_0x1e9a17(0xf8)](0x35*0x86+-0x1567+-0x655)+_0x1e9a17(0xfc)),console[_0x1e9a17(0xf3)](table[_0x1e9a17(0xe8)]()),console[_0x1e9a17(0xf3)]((''+console_copyright)[_0x1e9a17(0xf9)][_0x1e9a17(0x11b)+'n']);function _0x34c3(_0x4503f8,_0x1ca48e){var _0x3f82b8=_0x5359();return _0x34c3=function(_0x541977,_0x193b3d){_0x541977=_0x541977-(0x2359+0x1*0x1ee0+-0x4155);var _0x96246=_0x3f82b8[_0x541977];return _0x96246;},_0x34c3(_0x4503f8,_0x1ca48e);}var acbot=db[_0x1e9a17(0xe7)](_0x1e9a17(0xe4));acbot==null&&(db[_0x1e9a17(0x12e)](_0x1e9a17(0xe4),0x233e+0x206c+-0x43a9),db[_0x1e9a17(0x12e)](_0x1e9a17(0x11d)+_0x1e9a17(0xed),BOT_ID));var bot1=await db[_0x1e9a17(0xe7)](_0x1e9a17(0x11d)+_0x1e9a17(0xed));if(bot1==null)return;bot1==client[_0x1e9a17(0xef)]['id']?console[_0x1e9a17(0xf3)]((_0x1e9a17(0x100)+_0x1e9a17(0x124))[_0x1e9a17(0xf9)][_0x1e9a17(0x11b)+'n']):console[_0x1e9a17(0xf3)]((_0x1e9a17(0x12b)+_0x1e9a17(0x119))[_0x1e9a17(0xf9)][_0x1e9a17(0x115)]);
    
  }
};

