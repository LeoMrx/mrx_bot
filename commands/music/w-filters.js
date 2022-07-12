module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Músicas',
    utilisation: '{prefix}w-filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz `);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz que eu `);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não esta tocando nada agora `);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: 'Mrx Bot' },
                fields: [
                    { name: 'Filtros', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Lista de todos os filtros \`Ativados\` ou \`Desativados\`.\nUse \`${client.config.discord.prefix}filter\` Para adicionar um filtro a uma música.`,
            },
        });
    },
};