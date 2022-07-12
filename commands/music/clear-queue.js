module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Músicas',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!client.player.getQueue(message)) return message.channel.send(`<a:erro:845742819359981580> \`NÃO TEM NADA TOCANDO AGORA\``);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`Não é possível limpar a fila por que só há uma música tocando`);

        client.player.clearQueue(message);
        const success = client.player.clearQueue(message);
        if (success) message.channel.send(`Fila limpa`)
    },
};