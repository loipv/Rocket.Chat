import { Meteor } from 'meteor/meteor';
import { RocketChat } from 'meteor/rocketchat:lib';

Meteor.startup(function() {
	return RocketChat.TabBar.addButton({
		groups: ['channel', 'group'],
		id: 'mentions',
		i18nTitle: 'Mentions',
		icon: 'at',
		template: 'mentionsFlexTab',
		order: 3,
	});
});
