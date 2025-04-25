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
	{
		id: 5,
		title: "Catering hizmati",
		description: "Mehmonlaringiz uchun mazali va estetik jihatdan mukammal taomlar. Har bir menyu sizning tadbir uslubingiz va didingizga mos ravishda tayyorlanadi.​"
	},
	{
		id: 6,
		title: "Love Story hizmati",
		description: "Sizning sevgi hikoyangizni professional tarzda videoga olish. Bu videoni to‘y marosimida namoyish etib, mehmonlarga unutilmas taassurot qoldiring."
	},
	{ id: 7, title: "Karnay & Surnay hizmati", description: "An’anaviy karnay va surnay sadolari bilan to‘yingizga milliy ruh va tantanavorlik baxsh eting. Bu musiqa mehmonlarga bayram kayfiyatini ulashadi." },
	{ id: 8, title: "Bezatish hizmati", description: "Zal va joylarni sizning orzuingizdagi uslubda bezatish. Har bir detal sizning didingizni aks ettiradi va mehmonlarga estetik zavq bag‘ishlaydi." },
]
const Card = ({ id, title, description }: { title: string; description: string; id: number }) => {
	return (
		<div className="flex mb-8 min-[1200px]:mb-16 justify-between items-center gap-8 max-[1200px]:flex-col-reverse max-[1200px]:gap-4 card">
			<div className='max-w-[500px]'>
				<h3 className="text-[#333333] text-[26px] font-semibold leading-[28px] mb-4 title max-[500px]:text-[20px] max-[500px]:mb-2.5">{title}</h3>
				<p className="text-[#666666] text-lg font-normal leading-7 tracking-tight mb-8 max-[500px]:mb-4 max-[500px]:text-[14px] max-[500px]:leading-[21px]">{description}</p>

				<NavLink to={"/"} className=" text-[#879a77] text-base font-semibold leading-tight tracking-tight pb-2 border-b-2 max-[500px]:text-[12px]">To’liq Ma’lumot</NavLink>
			</div>

			<img src={`/${id}.webp`} alt="" />
		</div>
	)
}

export const HomeServices = ({ showItems = 3 }: { showItems?: number }) => {
	return	<>
		{showItems !== 3 && 		<section className='py-20 mx-20 max-[500px]:!py-10 max-[500px]:!my-10'>
			<div className="container  ">
				<h2 className="text-3xl font-bold title max-w-[650px]">Bizning Xizmatlarimiz</h2>
				<p className="mt-4 max-w-[650px] font-normal text-[18px] text-[#666]">Sizning maxsus kuningizni unutilmas qilish uchun keng ko‘lamli xizmatlarni taklif etamiz. Har bir tafsilotga e’tibor bilan yondashamiz.</p>
			</div>

		</section>}
	<section className="bg-[#879a7737] py-20	">
	
		<div className="container">

			<h2 className="text-[#333333] text-4xl font-semibold leading-[44px] mb-10 title">Servislarimiz</h2>

			{data.map((item, index) => (
				showItems >= index && <Card key={item.id} id={item.id} title={item.title} description={item.description} />
			))}

			{showItems === 3 && <NavLink to={"/services"}>
				<button className='bg-[#879A77] text-white text-[18px] font-[500] hover:bg-[#333] transition-all duration-300 ease-in-out flex gap-2 items-center justify-center h-[50px] py-4 w-full mt-10  max-[500px]:text-[12px] max-[500px]:!py-2 max-[500px]:!px-4 max-[500px]:h-[33px]'>
					<p>Barcha Servislar</p>
					<img src="/icons/order.svg" alt="" className="inline-block ml-2" />
				</button>
			</NavLink>}
		</div>
	</section>
	</>
}