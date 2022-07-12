module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Músicas',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ EM UM CANAL DE VOZ\``);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!client.player.getQueue(message)) return message.channel.send(`<a:erro:845742819359981580> \`NÃO TEM NADA TOCANDO AGORA\``);

        if (!args[0]) return message.channel.send(`<a:erro:845742819359981580> \`ESPECIFIQUE UM FILTRO VÁLIDO \nPARA ATIVAR OU DESATIVAR\``);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`<a:erro:845742819359981580> \`ESTE FILTRO NÃO EXISTE \nTENTE POR EXEMPLO (8D, vibrato, pulsator)\``);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`<a:certo:857822810507837471> \`FILTRO ATIVADO\``);
        else message.channel.send(`<a:erro:845742819359981580> \`FILTRO DESATIVADO\``);
    },
};