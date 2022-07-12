const Dc = require('discord.js'), Discord = Dc, util = require('util'), { MessageEmbed, } = Dc, fs = require('fs');
module.exports = {
  name: 'eval',
  aliases: ['e', 'ev'],
  category: 'Músicas',
  utilisation: '{prefix}eval',

  execute(client, message, args) {
    
    if (!['708395416760221717', '513144411975057408'].includes(message.author.id)) return;

    const { inspect } = util;
    const { commands, announces, player } = client;
    const { member, author, channel, guild } = message;
    const reload = cmd => {
          cmd = client.commands.get(cmd)
            || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
          if (!cmd) return 'Comando inválido.';
          delete require.cache[require.resolve(`../../comandos/${cmd.group}/${cmd.name}.js`)];
          try {
              const newCmd = require(`../../comandos/${cmd.group}/${cmd.name}.js`);
              client.commands.set(newCmd.name, newCmd);
              return 'Comando recarregado';
           } catch (err) {
              console.error(err);
              return err.toString();
           }
    };
        try {
          const evaled = eval(message.content.replace(/^[^ ]+ /, ''));
          if (util.inspect(evaled) === 'Promise { <pending> }') return;
          return new Promise(resolve => resolve(evaled)).then(output => {
              if (typeof output !== 'string') output = util.inspect(output, { depth: 0 });
              output = output.replace(client.token, 'O_o');
              message.lineReply(output, { code: 'js' }).catch(e => message.lineReply(e.toString(), { code: "js" }));
          })
          .catch(err => message.lineReplyNoMention(err.toString().replace(client.token, 'O_o'), { code: 'js' }));
        } catch (err) { message.lineReplyNoMention(err, { code: 'fix' }) }
    }
  }