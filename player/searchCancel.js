module.exports = (client, message, query, tracks) => {
    message.channel.send(`Você não forneceu uma resposta válida, Por favor reescreva o comando mais uma vez`).then(msg => msg.delete({timeout: 30000}));
};