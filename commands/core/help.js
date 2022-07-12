module.exports = {
  name: 'help',
  aliases: 'h',
  category: 'Core',
  utilisation: '{prefix}help <nome do comando>',

  execute(client, message, args) {
    if (!args[0]) {
      const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', '); // Organiza o help, (deixa com espaço e vírgulas).
      const music = message.client.commands.filter(x => x.category == 'Músicas').map((x) => '`' + x.name + '`').join(', ');

      message.channel.send({
        embed: {
          color: 'GREY', // Cor da Lateral do Texto
          author: { name: 'Painel de Ajuda' }, // Título da Mensagem
          footer: { text: 'Encontre informações sobre o comando fornecido. Argumentos obrigatórios [], argumentos opcionais <>.'}, // Fica abaixo do texto (pode por oque quiser, exemplo: Criado por Leo †#8443)
          fields: [
            { name: 'Comandos:', value: infos }, // Fica os Comandos da Pasta infos
            { name: 'Comandos de Música:', value: music}, // Fica os Comandos da Pasta music
            { name: 'Filtros:', value: client.filters.map((x) => '`' + x + '`').join(', ') }, // Fica os Comandos da Pasta config 'bot.js'
          ],
        },
      });
    } else {
      const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase())); // Verifica Se a Mensagem Foi Escrita de Forma Minúscula, E Se Houve os Espaços Corretos, Se Sim, Mostra o Help do Comando

      if(!command) return message.channel.send(`<a:erro:845742819359981580> \`EU NÃO ENCONTREI ESTE COMANDO\``);

      // Continuação do Help, Help de Comandos Expecíficos
      message.channel.send({
        embed: {
          color: 'GREY',
          author: { name: 'Painel de Ajuda' },
          footer: { text: 'Encontre informações sobre o comando fornecido. Argumentos obrigatórios [], argumentos opcionais <>.' },
          fields: [
            { name: 'Nome do Comando:', value: command.name, inline: true }, // Mostra o Nome do Comando Fornecido
            { name: 'Categoria do Comando:', value: command.category, inline: true }, // Mostra a Categoria Onde o Comando Está, exemplo: (Músicas)
            { name: 'Abreviação do Comando:', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true }, // Mostra a 'Aliases' do Comando, exemplo: .h
            { name: 'Utilização do Comando:', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true }, // Mostra Como Usar o Comando Para Pegar, Resumindo Ensina Como Usar
          ],
        }
      });
    };
  },
};