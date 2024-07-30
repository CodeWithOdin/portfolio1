import ProgressBar from "../ProgressBar";
import {
	SiHtml5,
	SiJavascript,
	SiReact,
	SiCsswizardry,
	SiExpress,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiHtml5,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "HTML",
		},
		{
			Icon: SiCsswizardry,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "CSS",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "jAVASCRIPT",
		},
		{
			Icon: SiExpress,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Express.js",
		},
		{
			Icon: SiReact,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "REACT",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
