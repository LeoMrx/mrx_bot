module.exports = async (client) => {
    console.log(`Logado como ${client.user.username}. Pronto em ${client.guilds.cache.size} servidores, para um total de ${client.users.cache.size} Usúarios`);

    client.user.setActivity(client.config.discord.activity);
};