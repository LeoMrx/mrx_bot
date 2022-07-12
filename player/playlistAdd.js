module.exports = (client, message, queue, playlist) => {
    message.channel.send({
      embed: {
        color: 'RED',
            author: { name: 'ADICIONADO Á FILA', icon_url: 'https://cdn.discordapp.com/attachments/838206914960818176/859881045892661258/music.gif' },
            title: `Nome da Playlist: **\`${playlist.title}\`**`,
            description: `Total de Músicas: **\`${playlist.tracks.length}\`**`,
            footer: {
                text: `Usado por: ${message.author.tag}`,
                icon_url: message.author.displayAvatarURL({ size: 4096, dynamic: true })
              },
            timestamp: new Date(),
      },
    }).then(msg => msg.delete({timeout: 30000}));
}