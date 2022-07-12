module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Músicas',
    utilisation: '{prefix}queue',
    
    async execute (client, message, args) {
    
        const queue = client.player.getQueue(message);
        if (!queue.tracks[1]) return message.channel.send('<a:erro:845742819359981580> \`NÃO HÁ NADA NA LISTA\`');
        const queueTracks = queue.tracks.map((t, c) => { return { value: `**#${c}** - [${t.title}](${t.url}) \`[${t.duration}]\``, size: c }});
        let embedArr = [];
        for (var i = 0; i < queue.tracks.length; i += 10) embedArr.push(new (require('discord.js')).MessageEmbed().setAuthor('LISTA DE MÚSICAS', client.musicImage).setColor('RANDOM').setDescription(queueTracks.filter(t => t.size > i && i + 11 > t.size).map(t => t.value).join('\n')).setFooter(`Página ${Math.floor(i/10) + 1} de ${Math.floor(queueTracks.length/10)}`, 'https://cdn.discordapp.com/attachments/838206914960818176/859881045892661258/music.gif'));
        let position = 0;
        const msg = await message.channel.send(embedArr[position]);
        if (!embedArr[1]) return;
        await msg.react('<a:setaCiano2:860928733476028417>');
        await msg.react('<a:setaCiano:860927822562590750>');
        const collector = msg.createReactionCollector((reaction, user) => ['860928733476028417', '860927822562590750'].includes(reaction.emoji.id), { time: 300000 });
        collector.on('collect', async (r, u) => {
            for (const re of msg.reactions.cache.filter(reaction => reaction.users.cache.has(u.id)).values()) await re.users.remove(u.id);
            if (u.id !== message.author.id) return;
            if (r.emoji.name === 'setaCiano' && position + 1 < embedArr.length) msg.edit(embedArr[position++ +1]);
          else if (position) msg.edit(embedArr[position-- -1]);
        });
        collector.on('end', () => msg.reactions.removeAll());
        
      }
}