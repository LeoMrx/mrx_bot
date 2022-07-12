module.exports = {
    name: 'invite',
    aliases: ['i'],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute(client, message) {
        message.channel.send(`**Clique aqui para me adicionar ao seu server:** https://discord.com/oauth2/authorize?client_id=857714481098391583&scope=bot&permissions=6479510849`);
    },
};