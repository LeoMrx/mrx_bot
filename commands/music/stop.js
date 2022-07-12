module.exports = {
    name: 'stop',
    aliases: ['dc','leave','disconnect'],
    category: 'Músicas',
    utilisation: '{prefix}stop',

    execute(client, message, args) {
        const minhaCall = message.guild.me.voice.channel;
    const callDoAutor = message.member.voice.channel;
    
    if (!minhaCall) return message.lineReply('Por favor, Entre em uma call');
    if (!callDoAutor || callDoAutor !== minhaCall) return message.lineReply('<a:erro:845742819359981580> \`VOCÊ NÃO ESTÁ NO MESMO CANAL DE VOZ QUE EU\`');
    
    const q = client.player.getQueue(message);

    if (q) client.player.clearQueue(message);
    if (client.player.nowPlaying(message)) client.player.skip(message);
    message.react('👍');
    },
}; 