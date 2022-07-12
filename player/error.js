module.exports = (client, error, message, ...args) => {
    if (error.message === 'input stream: Cannot call write after a stream was destroyed') return;
    if (error.message === 'input stream: write EPIPE') return;
    if (error.message === 'input stream: Status code: 404') return;
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Não há música sendo reproduzida neste servidor `);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Você não está conectado em nenhum canal de voz `);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Não consigo entrar no seu canal de voz, verifique minhas permissões `);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} Não está disponível em seu país! Pulando...`);
            break;
        case 'MusicStarting':
            message.channel.send(`A música está começando... aguarde e tente novamente`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo deu errado... Erro : ${error}`);
    };
};