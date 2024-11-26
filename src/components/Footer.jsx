import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-1 flex flex-col justify-start mr-10">
				<img
					src={logo}
					alt="hoobank"
					className="w-[266px] h-[72px] object-contain"
				/>
				<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
					A new way to male the payments easy, reliable and secure.
				</p>
			</div>
			<div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap md:mt-0 mt-10">
				{footerLinks.map((e) => (
					<div key={e.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
						<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
							{e.title}
						</h4>
						<ul>
							{e.links.map((links, index) => (
								<li
									key={links.key}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
										index !== e.links.length - 1 ? "mb-4" : "mb-0"
									}`}>
									{links.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
		<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
			<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
				{" "}
				2024 HooBank. All Rights Reserved
			</p>
			<div className="flex flex-row md:mt-0 mt-6">
				{socialMedia.map((e, index) => (
					<img
						key={e.id}
						src={e.icon}
						alt={e.id}
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							index !== e.length - 1 ? "mr-6" : "mr-0"
						} `}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
