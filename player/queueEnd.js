module.exports = (client, message, queue) => {
    message.channel.send('Fim da música').then(msg => msg.delete({timeout: 30000}));
};  