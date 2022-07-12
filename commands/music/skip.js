module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Músicas',
    utilisation: '{prefix}skip',

    execute: (client, message, args) => {

        if (!client.player.getQueue(message)) return message.channel.send('<a:erro:845742819359981580> \`NÃO HÁ MAIS NENHUMA MÚSICA NA FILA\`');
    
        const success = client.player.skip(message);
        if (success) message.react('⏩');
    },
};