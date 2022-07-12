module.exports = (client, message, queue) => {
    message.channel.send(`A música encerrou por que me desconectaram da call`).then(msg => msg.delete({timeout: 30000}));
};