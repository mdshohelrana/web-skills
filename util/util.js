
export function pathify (name) {
	return name.replace(` `, `-`).replace(`/`, `-`).toLowerCase();
}

export function constructImagePathPrefix (collection, area, skill) {
	const paths = [
		"assets",
		collection.name,
		area.name,
		skill.name
	].filter(name => name != null).map(pathify);
	return `/${paths.join("/")}.png`;
}