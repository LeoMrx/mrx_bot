module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Músicas',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!client.player.getQueue(message)) return message.channel.send(`<a:erro:845742819359981580> \`NÃO ESTÁ TOCANDO NADA AGORA\``);

        if (!client.player.getQueue(message).paused) return message.channel.send(`<a:erro:845742819359981580> \`A MÚSICA JÁ ESTÁ TOCANDO\``);

        const success = client.player.resume(message);
        if (success) message.react('⏯');
    },
};