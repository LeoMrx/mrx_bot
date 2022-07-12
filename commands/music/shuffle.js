module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Músicas',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!client.player.getQueue(message)) return message.channel.send(`<a:erro:845742819359981580> \`NÃO ESTÁ TOCANDO NADA AGORA\``);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`\`${client.player.getQueue(message).tracks.length} Músicas embaralhadas\``);
    },
};