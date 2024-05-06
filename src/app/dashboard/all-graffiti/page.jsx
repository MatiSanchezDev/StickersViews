import Image from "next/image";

const getGraffiti = async () => {
    const data = fetch('https://bymykel.github.io/CSGO-API/api/en/graffiti.json')
        .then(res => res.json())
    
    return data
}

export default async function GraffitiPage() {
    const graffities = await getGraffiti()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 m-3">
      {
        graffities.map((graffiti) => (
          <div key={graffiti.id} className="flex flex-col justify-center items-center border-2 rounded-lg shadow-lg">
            <Image src={graffiti.image} width={200} height={200} alt={graffiti.name} priority={false}/>       
            <span className="font-bold">{graffiti.name}</span>      
          </div>
        ))
      }
    </div>
  );
}