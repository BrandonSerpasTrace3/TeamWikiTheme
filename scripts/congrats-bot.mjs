import { setOutput } from '@actions/core';

const { COMMIT_AUTHOR, COMMIT_ID, COMMIT_MESSAGE } = process.env;
setDiscordMessage(COMMIT_AUTHOR, COMMIT_ID, COMMIT_MESSAGE);

/**
 * @param {string} author The name of the commit author
 * @param {string} id The commit ID
 * @param {string} commitMsg A full commit message
 */
function setDiscordMessage(author, id, commitMsg) {
	const commitMessage = commitMsg.split('\n').shift().replaceAll('`', '').replaceAll('--', '-β-');

	const coAuthors = commitMsg
		.split('\n')
		.slice(2)
		.filter((line) => line.match(/Co-authored-by: (.+) <.+>/))
		.map((line) => line.match(/Co-authored-by: (.+) <.+>/)[1]);

	let coAuthorThanks = '';
	if (coAuthors.length) {
		const uniqueCoAuthors = [...new Set(coAuthors)];
		const names = makeList(uniqueCoAuthors);
		coAuthorThanks = '\n' + getCoAuthorsMessage(names);
	}

	const emoji = pick(['π', 'π', 'π§βπ', 'π₯³', 'π', 'π']);

	setOutput(
		'DISCORD_MESSAGE',
		`${emoji} **Merged!** ${author}: [\`${commitMessage}\`](<https://github.com/withastro/docs/commit/${id}>)${coAuthorThanks}`
	);
}

/**
 * Generate a list like `'foo, bar and baz'` from an array
 * like `['foo', 'bar', 'baz']`.
 * @param {string[]} list List of words to format
 */
function makeList(list) {
	if (list.length === 1) return list[0];
	return list.slice(0, -1).join(', ') + ' & ' + list.at(-1);
}

/**
 * Pick a random item from an array of items.
 * @param {string[]} items Items to pick from
 */
function pick(items) {
	return items[Math.floor(Math.random() * items.length)];
}

/**
 * Get a randomised fun thank you message for co-authors.
 * @param {string} names Names of co-authors to be thanked
 */
function getCoAuthorsMessage(names) {
	const messages = [
		'_Thanks <names> for helping!_ β¨',
		'_<names> stepped up to lend a hand β thank you!_ π',
		'_<names> with the assist!_ πͺ',
		'_Couldnβt have done this without <names>!_ π',
		'_Made even better by <names>!_ π',
		'_And the team effort award goes toβ¦ <names>!_ π',
		'_Featuring contributions by <names>!_ π',
	];
	const chosenMessage = pick(messages);
	return chosenMessage.replace('<names>', names);
}
