module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Músicas',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!args[0]) return message.channel.send(`**POR FAVOR UTILIZE**\`\nplay [name/URL]\``);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};