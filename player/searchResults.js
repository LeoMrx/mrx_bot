module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Envie um número entre <1/10>` },
            footer: { text: 'Criado por: Leo †#8443' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - [${t.title}](${t.url}) \`[${t.duration}]\``).join('\n')}`,
        },
    }).then(msg => msg.delete({timeout: 30000}));
};