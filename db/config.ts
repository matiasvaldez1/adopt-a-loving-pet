import { NOW, column, defineDb, defineTable } from 'astro:db';

export const Poster = defineTable({
	columns: {
		id: column.number({ primaryKey: true, }),
		name: column.text(),
		presentation: column.text(),
		profilePicture: column.text(),
	},
});

export const PetType = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		value: column.text({ unique: true }),
	},
});

export const PetPosting = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		posterId: column.number({ references: () => Poster.columns.id }),
		description: column.text(),
		type: column.number({ references: () => PetType.columns.id }),
		location: column.text(),
		posted: column.date({ default: NOW }),
		richText: column.text({ optional: true }),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Poster,
		PetPosting,
		PetType,
	},
});
