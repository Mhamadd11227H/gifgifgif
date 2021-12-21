const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/917783005592952899/922771347044716584/original.gif","https://media.discordapp.net/attachments/917783005592952899/922776677430460426/original_1.gif","https://media.discordapp.net/attachments/917783005592952899/922773455336771634/6c0d9707afeca9c358812325b65848c5.gif","https://media.discordapp.net/attachments/917783005592952899/922778257466753024/original_2.gif","https://media.discordapp.net/attachments/917783005592952899/922778556004704266/20211221_121202.gif","https://media.discordapp.net/attachments/917783005592952899/922786860680511709/b7144bd430646553c10a61d1815e208c.gif","https://media.discordapp.net/attachments/917783005592952899/922788118187368448/d5b82c2bbdd460df4ef4bf4d673204d4.gif","https://media.discordapp.net/attachments/917783005592952899/922788098365075456/c516f2e49f484887f4e1de5062354c0e.gif","https://media.discordapp.net/attachments/917783005592952899/922788061656539137/80055b5a7e8bc938e2d96eff8ef59e13.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Animal")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-animal','animal-gif','gifanimal','animalgif'],

  permLevel: 0

};

exports.help = {

  name: 'animal',

  description: 'rexuss',

  usage: 'animal'

};
