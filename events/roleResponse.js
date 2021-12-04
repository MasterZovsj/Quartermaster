module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
  if (!interaction.isSelectMenu()) return;
	interaction.member.roles.add(interaction.values)
	await interaction.update({ content: `You have been given the ${interaction.guild.roles.resolve(...interaction.values)} role!`, components: [] })
	const role = interaction.guild.roles.resolve(...interaction.values)
	console.log(role.name);



	},
};
