module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Músicas',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!client.player.getQueue(message)) return message.channel.send(`<a:erro:845742819359981580> \`NÃO ESTÁ TOCANDO NADA AGORA\``);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`🔂\`LOOP DESATIVADO DA FILA\``);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`🔂\`LOOP ATIVADO A FILA\``);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`🔂\`LOOP DESATIVADO\``);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`🔂\`LOOP ATIVADO\``);
            };
        };
    },
};