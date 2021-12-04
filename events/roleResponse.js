module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
  if (!interaction.isSelectMenu()) return;
	interaction.member.roles.add(interaction.values)
	//interaction.member.addRoles(interaction.values)



	},
};
