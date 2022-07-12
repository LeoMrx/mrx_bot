module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Músicas',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz que eu `);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não tem nada tocando agora `);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: {
                    name: 'TOCANDO AGORA',
                    icon_url: 'https://cdn.discordapp.com/attachments/838206914960818176/859881045892661258/music.gif'
                  },
                description: `**[${track.title}](${track.url})**`,
                footer: {
                    text: `Usado por: ${message.author.tag}`,
                    icon_url: message.author.displayAvatarURL({ size: 4096, dynamic: true })
                  },
                fields: [
                    { name: 'CANAL:', value: `**[${track.author}](https://youtube.com/c/${track.author.replace(/\W+/g, '')})**`},
                    { name: 'PLAYLIST:', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },
                    { name: 'DURAÇÃO:', value: track.duration, inline: true },
                    { name: 'MODO LOOP:', value: client.player.getQueue(message).repeatMode ? 'Ativado' : 'Desativado', inline: true },
                    { name: 'PROGRESSO:', value: client.player.createProgressBar(message, { timecodes: true}).replace(/▬/g, '─').replace(/┃/g, '|').replace(/🔘/, '<a:musica:845740561453285376>') }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        }).then(msg => msg.delete({timeout: 100000}));
    },
};