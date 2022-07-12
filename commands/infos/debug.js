module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`**Olá sou ${client.user.username} Estou Conectado em ${client.voice.connections.size} canais, Estou em ${client.guilds.cache.size} Servidores, Para um Total de ${client.users.cache.size} Usúarios**`);
    },
};