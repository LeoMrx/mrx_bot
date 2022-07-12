module.exports = {
    name: 'volume',
    aliases: ['vol'],
    category: 'Músicas',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`Por favor, Entre em uma call`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\``);

        if (!client.player.getQueue(message)) return message.channel.send(`<a:erro:845742819359981580> \`NÃO ESTÁ TOCANDO NADA AGORA\``);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`<a:erro:845742819359981580> \`POR FAVOR INSIRA UM NÚMERO VÁLIDO\``);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`<a:erro:845742819359981580> \`POR FAVOR INSIRA UM NÚMERO VÁLIDO (entre 1 e 100)\``);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.react('<a:loud_sound: >');
    },
};