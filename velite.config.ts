import { defineCollection, defineConfig, s } from "velite";

const attributes = defineCollection({
	name: "Attribute",
	pattern: "attributes/**/*.json",
	schema: s.object({
		id: s.unique(),
		name: s.string(),
		icon: s.image(),
	}),
});

const characters = defineCollection({
	name: "Character",
	pattern: "characters/**/*.json",
	schema: s.object({
		id: s.unique(),
		name: s.string(),
		portrait: s.image(),
		fullbody: s.image(),
		gender: s.string(),
		rarity: s.number().min(4).max(5),
		attribute: s.string(),
	}),
});

export default defineConfig({
	root: "./src/contents",
	collections: { attributes, characters },
});
