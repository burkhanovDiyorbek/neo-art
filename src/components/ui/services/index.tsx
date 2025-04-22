import { NavLink } from 'react-router-dom'

interface IService {
	id: number
	title: string
	description: string
}

const data: IService[] = [
	{
		id: 1,
		title: "Beshik to’y hizmati",
		description: "Milliy urf-odatlar asosida tashkil etilgan, unutilmas beshik to‘yi marosimlari uchun to‘liq xizmatlarni taqdim etamiz. Har bir tafsilot yurtdoshlarimizning qadriyatlarini inobatga olgan holda tashkil etiladi. Oilaviy iliqlik va quvonchga boy muhit yaratamiz.",
	},
	{
		id: 2,
		title: "Kamera va video hizmati",
		description: "Milliy urf-odatlar asosida tashkil etilgan, unutilmas beshik to‘yi marosimlari uchun to‘liq xizmatlarni taqdim etamiz. Har bir tafsilot yurtdoshlarimizning qadriyatlarini inobatga olgan holda tashkil etiladi. Oilaviy iliqlik va quvonchga boy muhit yaratamiz.",
	},
	{
		id: 3,
		title: "Marry me hizmati",
		description: "Bizning tug'ilgan kun tashkilotimiz sizning maxsus kuningizni unutilmas qilish uchun barcha zarur xizmatlarni taklif etadi. Bizning tajribali jamoamiz sizga tug'ilgan kuningizni mukammal tarzda rejalashtirish va o'tkazishda yordam beradi.",
	},
	{
		id: 4,
		title: "To'y kortej hizmati",
		description: "Bizning to'y tashkilotimiz sizning orzularingizdagi to'yni amalga oshirish uchun barcha zarur xizmatlarni taklif etadi. Bizning tajribali jamoamiz sizga to'y marosimingizni mukammal tarzda rejalashtirish va o'tkazishda yordam beradi.",
	},
]
const Card = ({ title, description }: { title: string; description: string }) => {
	return (
		<div className="flex mb-8 justify-between items-center gap-8 max-[1200px]:flex-col max-[1200px]:gap-4 card">
			<div className='max-w-[500px]'>
				<h3 className="text-[#333333] text-2xl font-semibold leading-[28px] mb-4 title">{title}</h3>
				<p className="text-[#666666] text-lg font-normal leading-7 tracking-tight mb-8 ">{description}</p>

				<NavLink to={"/"} className=" text-[#879a77] text-base font-semibold leading-tight tracking-tight pb-2 border-b-2">To’liq Ma’lumot</NavLink>
			</div>

			<img src="/public/1.webp" alt="" />
		</div>
	)
}

export const HomeServices = () => {
	return <section className="bg-[#879a7737] py-20">
		<div className="container">

			<h2 className="text-[#333333] text-4xl font-semibold leading-[44px] mb-10 title">Servislarimiz</h2>

			{data.map((item) => (
				<Card key={item.id} title={item.title} description={item.description} />
			))}

			<button className='bg-[#879A77] text-white text-[18px] font-[500] hover:bg-[#333] transition-all duration-300 ease-in-out flex gap-2 items-center justify-center h-[50px] py-4 w-full mt-10'>
				<p>Barcha Servislar</p>
			<img src="/public/icons/order.svg" alt="" className="inline-block ml-2" />
			</button>
		</div>
	</section>
}