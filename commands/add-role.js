const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const data = new SlashCommandBuilder()
	.setName('role')
	.setDescription('Allows users to set their roles.')
	.addStringOption(option =>
	option.setName('operation')
		.setDescription('Choose to either add or remove a role')
		.setRequired(true)
		.addChoice('Add', 'add')
		.addChoice('Remove', 'remove'));
module.exports = {
	data: data,
	async execute(interaction) {
		//console.log(interaction.guild.roles.cache.find(r => r.id == "864211282298535977"));
		if (interaction.options.getString('operation') == 'add'){
	    bad_roles = new Set(['864211282298535977', '916403179527229480', '871846313220800584', '882341304338636821', '916389656784941107', '916428291672518657', '864158487181524992', '916596182518743041'])
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
						.setCustomId('addRole')
						.setPlaceholder('Nothing selected')
						.addOptions(options),
				);
				await interaction.reply({ content: 'Select the role you would like below.', ephemeral: true, components: [row] });
			} else if (interaction.options.getString('operation') == 'remove') {
				const userRoles = new Set(interaction.member._roles)
				const options = []
				userRoles.forEach((role, i) => {
					thisRole = interaction.guild.roles.cache.find(r => r.id == role)
					options.push({
						label: thisRole.name,
						description: `Click here to add the role of ${thisRole.name}`,
						value: role
					});
				});
				const row = new MessageActionRow()
					.addComponents(
						new MessageSelectMenu()
							.setCustomId('removeRole')
							.setPlaceholder('Nothing selected')
							.addOptions(options),
					);
					await interaction.reply({ content: 'Select the role you would like to remove.', ephemeral: true, components: [row] });

			} else {
				console.log(`How did you even send ${interaction.options.getString('operation')}??`);
			}

	},
};
