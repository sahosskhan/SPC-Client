
import usePlayer from './../../Hooks/usePlayer';
import TeamCard from './TeamCard';

const Team = () => {
    const {allPlayers}=usePlayer();
    const FORWARDS= allPlayers?.filter(item => item.category === "FORWARDS");
    const MIDFIELDERS= allPlayers?.filter(item => item.category === "MIDFIELDERS");
    const DEFENDERS = allPlayers?.filter(item => item.category === "DEFENDERS");
    const GOALKEEPERS = allPlayers?.filter(item => item.category === "GOALKEEPERS");
    const COACHINGSTAFF = allPlayers?.filter(item => item.category === "COACHING STAFF");
   

    return (
        <div className='bg-sky-200  '>
<h1 className='text-4xl font-bold text-center py-6'>Spanish City First Team</h1>


<main className='p-16'> 

<section>
<h1 className='text-3xl font-bold  py-6 bg-sky-50 p-10 my-5 rounded-xl'>GOALKEEPERS</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {GOALKEEPERS?.map((items) => (
       <TeamCard key={items} items={items}/>
     ))}
           </div>
</section>

<section className='mt-28'>
<h1 className='text-3xl font-bold  py-6 bg-sky-50 p-10 my-5 rounded-xl'>DEFENDERS</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {DEFENDERS ?.map((items) => (
       <TeamCard key={items} items={items}/>
     ))}
           </div>

</section>

<section className='mt-28'>
<h1 className='text-3xl font-bold  py-6 bg-sky-50 p-10 my-5 rounded-xl'>MIDFIELDERS</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {MIDFIELDERS ?.map((items) => (
       <TeamCard key={items} items={items}/>
     ))}
           </div>

</section>


<section className='mt-28'>
<h1 className='text-3xl font-bold  py-6 bg-sky-50 p-10 my-5 rounded-xl'>FORWARDS</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {FORWARDS ?.map((items) => (
       <TeamCard key={items} items={items}/>
     ))}
           </div>

</section>


<section className='mt-28'>
<h1 className='text-3xl font-bold  py-6 bg-sky-50 p-10 my-5 rounded-xl'>COACHING STAFF </h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {COACHINGSTAFF  ?.map((items) => (
       <TeamCard key={items} items={items}/>
     ))}
           </div>

</section>
</main>



            
        </div>
    );
};

export default Team;