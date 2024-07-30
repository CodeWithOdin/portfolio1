import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/Chensokhenhttps://github.com/CodeWithOdin",
			text: "@MdFahimuddinAnsari",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/md-fahimuddin-ansari-929b7b294/",
			text: "@Fresher",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/131606856?s=400&u=cd2952ca6c8f5060529df7064db0e6f499afc1cd&v=4"
					alt="MdFahimddinAnsari"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Md Fahimuddin Ansari</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 23 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software developer. Passionate with web
				development and like to learn new thing related to coding and sharing it
				to the internet through my youtube.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
