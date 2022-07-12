module.exports = {
    name: 'search',
    aliases: ['sr','sch'],
    category: 'Músicas',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!args[0]) return message.channel.send(`**POR FAVOR UTILIZE**\`\nsearch [name/URL]\``);

        client.player.play(message, args.join(" "));
    },
};