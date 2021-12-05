module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
  if (!interaction.isSelectMenu()) return;
	if (interaction.customId == 'addRole'){
		interaction.member.roles.add(interaction.values)
		await interaction.update({ content: `You have been given the ${interaction.guild.roles.resolve(...interaction.values)} role!`, components: [] })
		const role = interaction.guild.roles.resolve(...interaction.values)
		console.log(`Added ${role.name} to ${interaction.member.displayName}`);

	} else if (interaction.customId == 'removeRole') {
		interaction.member.roles.remove(interaction.values)
		await interaction.update({ content: `${interaction.guild.roles.resolve(...interaction.values)} has been removed.`, components: [] })
		const role = interaction.guild.roles.resolve(...interaction.values)
		console.log(`Removed ${role.name} to ${interaction.member.displayName}`);
	}



	},
};
