const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'c?'; 

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


client.on('message', message => {
    if (message.content.startsWith(prefix + 'botinfo')) {

      const embed = new Discord.RichEmbed()
           .setTitle("Bot Information")
           .setColor("#15f153")
           .setThumbnail(bicon)
           .addField("Bot name", bot.user.username)
           .addField("Bot created on", bot.user.createdAt)
           .addField("Owner of the bot is", bot.owner);

      message.channel.send({embed});
    }
});
client.on('message', message => {
    if (message.content.split(' ')[0] == prefix + "kick") {
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        if(message.member.hasPermission('KICK_MEMBERS')){
           member.kick().then((member) => {
            
                message.channel.send(":wave: " + member.displayName + " has been successfully kicked :pizza: . You hava da pizza");
            }).catch(() => {
             
                message.channel.send("You Have kicked the person :pizza:");
            });
        }
        else{
            message.channel.send("You need to permission to kick members :pizza:");
        }
    }
  
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {
        var word = message.content.substr(6);
        
        if(word.includes("@everyone") | word.includes("@here")){
           message.delete(1000);
           message.channel.send("No ping plz :pizza:");
           
        }  
    
        else{
            message.delete(1000);
            message.channel.send(word);
        }
    }
  
});

client.on('message', message => {
    if (message.content.split(' ')[0] == prefix + "ban") {
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        if(message.member.hasPermission('BAN_MEMBERS')){
           member.ban().then((member) => {
            
                message.channel.send(":wave: " + member.displayName + " has been successfully Banned :pizza: . ");
            }).catch(() => {
             
                message.channel.send("You Have Banned the person :pizza:.");
            });
        }
        else{
            message.channel.send("You need to permission to ban members :pizza:");
        }
    }
});
client.on('message', message => {
    if (message.content === prefix + 'autopurge') {
    	message.reply('I agree!');
      message.delete(10);
  	}
});
client.on('message', message => {
    if (message.content === prefix + 'load') {
    	message.channel.send("Loading Bot! Please wait....");
  	}
});    

client.login(process.env.BOT_TOKEN);
