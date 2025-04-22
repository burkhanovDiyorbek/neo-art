export const Button = ({text,icon, className}:{text:string;icon:string; className?:string}) => {
	return (
		<button className={`bg-[#879A77] text-white text-[18px] font-[500] hover:bg-[#333] transition-all duration-300 ease-in-out flex gap-2 items-center justify-center h-[50px] py-4 ${className} `} style={{padding: "15px 28px"}} >
			<p className="py-2">{text}</p>
			<img src={icon} alt="" className="inline-block ml-2" />
		</button>
	)
}