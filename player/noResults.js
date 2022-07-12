module.exports = (client, message, query) => {
    message.channel.send(`Não foi possível acessar ${query}`).then(msg => msg.delete({timeout: 30000}));
};