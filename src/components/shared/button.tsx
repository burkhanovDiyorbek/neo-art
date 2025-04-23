export const Button = ({text,icon, className}:{text:string;icon:string; className?:string}) => {
	return (
		<button className={`bg-[#6F845F] text-white text-[18px] font-[500] hover:bg-[#879A77] transition-all duration-300 ease-in-out flex gap-2 items-center justify-center h-[50px] py-4  px-6 ${className} max-[500px]:text-[16px] max-[500px]:py-2 max-[500px]:px-4 `}  >
			<p className="py-2">{text}</p>
			<img src={icon} alt="" className="inline-block ml-2" />
		</button>
	)
}