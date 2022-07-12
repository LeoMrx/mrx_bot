module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: 'Tocando', icon_url: 'https://cdn.discordapp.com/attachments/838206914960818176/859881045892661258/music.gif' },
            title: track.title,
      url: track.url,
            footer: {
                text: `Usado por: ${message.author.tag}`,
                icon_url: message.author.displayAvatarURL({ size: 4096, dynamic: true })
              },
            fields: [
                { name: 'Canal:', value: `**[${track.author}](https://youtube.com/c/${track.author.replace(/\W+/g, '')})**`},
                { name: 'Volume atual:', value: client.player.getQueue(message).volume, inline: true },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    }).then(msg => msg.delete({timeout: 30000}));
}