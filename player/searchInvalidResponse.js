module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`A pesquisa foi cancelada`);
    } else message.channel.send(`Por favor, Envie um número válido entre \`1 e ${tracks.length}\``).then(msg => msg.delete({timeout: 30000}));
};