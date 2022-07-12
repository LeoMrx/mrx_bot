module.exports = (client, message, queue) => {
    message.channel.send('A música encerrou por que não há membros na call').then(msg => msg.delete({timeout: 30000}));
};