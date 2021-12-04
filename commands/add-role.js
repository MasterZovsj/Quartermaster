const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('add-role')
		.setDescription('Allows users to set their roles.'),
	async execute(interaction) {
    bad_roles = new Set(['864211282298535977', '916403179527229480', '871846313220800584', '882341304338636821', '916389656784941107', '916428291672518657', '864158487181524992'])
    const roles = await interaction.guild.roles.fetch()
    const options = []
    roles.forEach((value, key) => {
      if (!bad_roles.has(key)) {
        options.push({
          label: value.name,
          description: `Click here to add the role of ${value.name}`,
          value: key
        });
      };
    });
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(options),
			);

		await interaction.reply({ content: 'Select the role you would like below.', ephemeral: true, components: [row] });
	},
};
