//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/developer-tools //
//We do not allow the transfer or use of this code at all//



const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
const { DiscordTogether } = require('discord-together')
const { youtube } = require('../../json/activities-banner.json')

module.exports = {
  name: "youtube",
  description: `Play youTube in the channel.`,
  aliases: [],
  async execute(client, message, args) {
function _0x5b3a(_0x547e40,_0x43255f){const _0x8f1cef=_0x5774();return _0x5b3a=function(_0x1afbc3,_0x532408){_0x1afbc3=_0x1afbc3-(-0x538+-0x27*0x6b+0x2e*0x7f);let _0x40a1ab=_0x8f1cef[_0x1afbc3];return _0x40a1ab;},_0x5b3a(_0x547e40,_0x43255f);}const _0x4a0873=_0x5b3a;(function(_0x31db05,_0x181881){const _0x54bd14=_0x5b3a,_0x5e2a8f=_0x31db05();while(!![]){try{const _0x5e4268=parseInt(_0x54bd14(0x15a))/(0x4*0x3+0x17*-0x63+0x8da)+-parseInt(_0x54bd14(0x179))/(0x701*-0x2+0xe4a+0x7*-0xa)+-parseInt(_0x54bd14(0x15d))/(0x19a*0x1+-0x11*0xcf+0xc28)*(-parseInt(_0x54bd14(0x167))/(-0x8fe+0xdfb+0x4f9*-0x1))+parseInt(_0x54bd14(0x19d))/(0xad0+0x1*-0xec5+0x3fa*0x1)+parseInt(_0x54bd14(0x15b))/(-0xf*-0x146+0xc54+-0x1f68)+-parseInt(_0x54bd14(0x151))/(-0xa6*-0x3c+0x183c+-0x3f1d*0x1)*(parseInt(_0x54bd14(0x184))/(-0x1fd0+0x1265*-0x2+0x44a2))+-parseInt(_0x54bd14(0x192))/(-0x263b+-0x7f*-0xb+0x1*0x20cf)*(parseInt(_0x54bd14(0x150))/(0x1a7d*0x1+0x10d1*-0x1+-0x9a2));if(_0x5e4268===_0x181881)break;else _0x5e2a8f['push'](_0x5e2a8f['shift']());}catch(_0x25d503){_0x5e2a8f['push'](_0x5e2a8f['shift']());}}}(_0x5774,-0x3fc5f+-0x265b7*-0x2+0x8bde9));function _0x5774(){const _0x56821e=['\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','reply','Requested\x20','\x20become\x20un','setColor','\x20reply\x20to\x20','channel','1251nLLyKg','createToge','author','LINK','discordTog','setStyle','setFooter','Create.js','tag','ات\x20البوت\x20و','\x20been\x20vand','3658130BIHwQa','files\x20have','send','zkXnW','خدام\x20شكرا\x20','e:\x20','ether','**[Click\x20h','ts/message','\x20an\x20voice\x20','لتفهمك**','75590qhQSEU','217xITlig','youtube','by\x20','ريب\x20في\x20ملف','code','command!**','usable.\x20Th','ere\x20to\x20joi','n\x20youtube\x20','1183139Tqwuij','1559436GtyWUQ','cMqih','3QAnYlk','erstanding','\x20must\x20join','message','the\x20messag','yes:\x20**You','catch','member','displayCol','name','1469716oLaJTb','ank\x20you\x20fo',':rolling_e','\x20اصبح\x20غير\x20','together!]','\x20use\x20this\x20','i\x20couldn\x27t','صالح\x20للاست','Play','tarURL','../../even','setDescrip','NgTDi','\x20\x20\x20تم\x20التخ','setURL',')**','tion','setLabel','27028QZGGdf','log','displayAva','iconURL','therCode','sWNCt','guild','r\x20your\x20und','**The\x20bot\x20','setAuthor','channel\x20to','219864pGuThQ','then','nts','addCompone','voice','alized\x20and','setImage'];_0x5774=function(){return _0x56821e;};return _0x5774();}const {wtf}=require(_0x4a0873(0x171)+_0x4a0873(0x14d)+_0x4a0873(0x199));if(!wtf)return message[_0x4a0873(0x18c)]({'content':_0x4a0873(0x181)+_0x4a0873(0x19e)+_0x4a0873(0x19c)+_0x4a0873(0x189)+_0x4a0873(0x18e)+_0x4a0873(0x157)+_0x4a0873(0x168)+_0x4a0873(0x180)+_0x4a0873(0x15e)+_0x4a0873(0x18b)+_0x4a0873(0x174)+_0x4a0873(0x154)+_0x4a0873(0x19b)+_0x4a0873(0x16a)+_0x4a0873(0x16e)+_0x4a0873(0x1a1)+_0x4a0873(0x14f)});client[_0x4a0873(0x196)+_0x4a0873(0x1a3)]=new DiscordTogether(client);if(!message[_0x4a0873(0x164)][_0x4a0873(0x188)][_0x4a0873(0x191)])return message[_0x4a0873(0x18c)]({'content':_0x4a0873(0x169)+_0x4a0873(0x162)+_0x4a0873(0x15f)+_0x4a0873(0x14e)+_0x4a0873(0x183)+_0x4a0873(0x16c)+_0x4a0873(0x156),'ephemeral':!![]})[_0x4a0873(0x163)](_0x8f5eea=>{const _0x125702=_0x4a0873,_0x52772f={'sWNCt':function(_0x33d793,_0x21109b){return _0x33d793+_0x21109b;}};console[_0x125702(0x17a)](_0x52772f[_0x125702(0x17e)](_0x125702(0x16d)+_0x125702(0x190)+_0x125702(0x161)+_0x125702(0x1a2),_0x8f5eea[_0x125702(0x160)]));});client[_0x4a0873(0x196)+_0x4a0873(0x1a3)][_0x4a0873(0x193)+_0x4a0873(0x17d)](message[_0x4a0873(0x164)][_0x4a0873(0x188)][_0x4a0873(0x191)]['id'],_0x4a0873(0x152))[_0x4a0873(0x185)](async _0x4e11cf=>{const _0x8d16d2=_0x4a0873,_0x3548df={'NgTDi':function(_0xae88ca,_0x14da3b){return _0xae88ca+_0x14da3b;},'cMqih':_0x8d16d2(0x195),'zkXnW':_0x8d16d2(0x16f)},_0x1a611b=new MessageEmbed()[_0x8d16d2(0x182)](message[_0x8d16d2(0x17f)][_0x8d16d2(0x166)],message[_0x8d16d2(0x17f)][_0x8d16d2(0x17c)]({'dynamic':!![]}))[_0x8d16d2(0x18f)](message[_0x8d16d2(0x17f)]['me'][_0x8d16d2(0x165)+'or'])[_0x8d16d2(0x172)+_0x8d16d2(0x177)](_0x8d16d2(0x1a4)+_0x8d16d2(0x158)+_0x8d16d2(0x159)+_0x8d16d2(0x16b)+'('+_0x4e11cf[_0x8d16d2(0x155)]+_0x8d16d2(0x176))[_0x8d16d2(0x18a)](youtube)[_0x8d16d2(0x198)](_0x8d16d2(0x18d)+_0x8d16d2(0x153)+message[_0x8d16d2(0x194)][_0x8d16d2(0x19a)],message[_0x8d16d2(0x194)][_0x8d16d2(0x17b)+_0x8d16d2(0x170)]({'dynamic':!![]}));let _0xec84dd=new MessageActionRow()[_0x8d16d2(0x187)+_0x8d16d2(0x186)](new MessageButton()[_0x8d16d2(0x197)](_0x3548df[_0x8d16d2(0x15c)])[_0x8d16d2(0x178)](_0x3548df[_0x8d16d2(0x1a0)])[_0x8d16d2(0x175)](''+_0x4e11cf[_0x8d16d2(0x155)]));message[_0x8d16d2(0x191)][_0x8d16d2(0x19f)]({'embeds':[_0x1a611b],'components':[_0xec84dd]})[_0x8d16d2(0x163)](_0x52645b=>{const _0x142644=_0x8d16d2;console[_0x142644(0x17a)](_0x3548df[_0x142644(0x173)](_0x142644(0x16d)+_0x142644(0x190)+_0x142644(0x161)+_0x142644(0x1a2),_0x52645b[_0x142644(0x160)]));});});
  }
}
