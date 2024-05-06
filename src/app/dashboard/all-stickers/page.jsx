import Image from "next/image";

const getSticker = async () => {
    const data = fetch('https://bymykel.github.io/CSGO-API/api/en/stickers.json?offset=1?limit=50')
        .then(res => res.json())
    
    return data
}

export default async function StickerPage() {
  const stickers = await getSticker()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 m-3">
      {
        stickers.map((sticker) => (
          <div key={sticker.id} className="flex flex-col justify-center items-center border-2 rounded-lg shadow-lg">
            <Image src={sticker.image} width={200} height={200} alt={sticker.name} priority={false}/>       
            <span className="font-bold">{sticker.name}</span>      
          </div>
        ))
      }
    </div>
  );
}