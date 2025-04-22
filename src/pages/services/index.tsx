import { useParams } from 'react-router-dom'
import { Card } from '../../components/ui/artists-slide'

interface IData {
	artists: {
		id: number
		title: string
		description: string
	}
	starter: {
		id: number
		title: string
		description: string
	}
	groups: {
		id: number
		title: string
		description: string
	}
}


const data: IData = {
	artists: {
		id: 1,
		title: "O’zbek San’atkorlari",
		description: "Mashhur o‘zbek san’atkorlari bilan to‘yingizni unutilmas musiqiy kechaga aylantiring. Har bir chiqish mehmonlaringizga yorqin taassurot qoldiradi. Narxlar faqat tadbir formatida.",
	},
	starter: {
		id: 2,
		title: "O’zbek To’y Boshlovchilar",
		description: "Tajribali boshlovchilar marosimingizni yuqori darajada olib boradi, har bir lahzani quvonch va iliqlik bilan to‘ldiradi. Narxlar faqat tadbir formatida..",
	},
	groups: {
		id: 3,
		title: "O’zbek To’y Guruhlari",
		description: "Professional to‘y guruhlari bilan marosimingizni jonli musiqa va raqslar bilan bezang, mehmonlaringizga unutilmas taassurot qoldiring.​ Narxlar faqat tadbir formatida..",
	},
}
export const Services = () => {
	const { id } = useParams<{ id: string }>()

	console.log(id)

	return <main>
		<section className='py-20'>
			<div className="container  ">
				<h2 className="text-3xl font-bold title max-w-[650px]">{data[id as keyof IData]?.title}</h2>
				<p className="mt-4 max-w-[650px] font-normal text-[18px] text-[#666]">{data[id as keyof IData]?.description}</p>
			</div>

		</section>
		<section className="bg-[#879a7737] py-20">
			<div className="container">
				<div className='flex items-center justify-between gap-8 max-[1200px]:flex-col max-[1200px]:gap-4 card flex-wrap'>
				{Array(16).fill(0).map((_, index) => <Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp' key={index} />
				)}
					
				</div>
			</div>
		</section>
	</main>
}