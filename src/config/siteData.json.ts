export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Strap.kz",
	// Your website's title and description (meta fields)
	title: "Strap.kz - мастерская ремешков для часов.",
	description:
		"Единственная в Казахстане мастерская по созданию ремешков для часов из крокодильей и другой кожи с нуля.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Alexey Pak",
		email: "meronpak@gmail.com",
		twitter: "Alexey Pak X",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Ремешки ручная работа",
	},
};

export default siteData;
