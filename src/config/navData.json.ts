export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [

	{
		text: "главная",
		// link: "/portfolio/",
		link: "/",
	},
	{
		text: "Портфолио",
		// link: "/portfolio/",
		link: "/portfolio",
	},
	{
		text: "Ремешки",
		// link: "/#pricing",
		link: "/strap",
	},
	{
		text: "Instagram",
		link: "https://www.instagram.com/strap.kz/"
	},
];

export default navConfig;
