import Image from 'next/image'
import {IoMdAdd} from 'react-icons/io'
import {MdNotificationsActive} from 'react-icons/md'


const data = [
  {
    "name": "Vishwakarma Institude of Technology",
    "image" : "/vit.jpeg"
  },
  {
    "name": "Pheonix Mall, Pune",
    "image": "https://www.phoenixunited.in/images/Floor/floor1.jpg"
  },
  {
    "name": "Maharashtra National Parks",
    "image": "https://www.indiaprofile.com/new-images/maharashtra-big.gif"
  },
  {
    "name": "Andrapradesh National Parks",
    "image": "https://www.researchgate.net/publication/297943543/figure/fig1/AS:339014797283329@1457838835012/Location-map-of-Andhra-Pradesh-in-India.png"
  },
  {
    "name": "Karnataka National Parks",
    "image": "https://www.mapsofindia.com/maps/karnataka/karnataka-forest-map.jpg"
  },
  {
    "name": "Tamil Nadu National Parks",
    "image": "https://www.mapsofindia.com/maps/wildlife/tamilnadu-wildlife-map.gif"
  },
  
]


export default function Home() {
  return (
    <div className='px-4 mt-4'>
    <div className='flex justify-between'>
      <div>
      <h1 className=" text-2xl font-bold  text-gray-900 :text-black md:text-4xl mt-3"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-600">Blaze Beacon</span> Forest Fire Bot.</h1>
      <p className="text-lg text-gray-700 :text-gray-700">Detect forest fires in real-time, and monitor updates of fire with Mapping Tools.</p>
      </div>
      <div>
      <a type="submit" className="inline-flex items-center h-fit mt-6 py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-purple rounded-lg border hover:border-purple-700 bg-purple-800  cursor-not-allowed">
       <MdNotificationsActive className="text-xl" />
       Notifications
    </a>
    <a type="submit" href='/addmap' className="inline-flex items-center h-fit mt-6 py-2.5 px-3 ml-2 text-sm font-medium text-white bg-emerald-700 rounded-lg border border-emerald-700 hover:bg-emerald-800 ">
        <IoMdAdd className='text-xl' />
        Add New Map
    </a>
    </div>
    </div>
    
<form className="flex items-center max-w-5xl mt-4">   
    <label for="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder:text-gray-600" placeholder="Search Forests, National Parks..." required/>
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 :text-gray-400 hover:text-gray-900 :hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
</form>

<div className='grid grid-cols-4 gap-4 py-8'>

{/* https://www.researchgate.net/publication/297943543/figure/fig1/AS:339014797283329@1457838835012/Location-map-of-Andhra-Pradesh-in-India.png --> Andrapradesh National Parks */}
{/* https://www.indiaprofile.com/new-images/maharashtra-big.gif --> Maharashtra National Parks */} 

{
  data.map((area) => {
    return(
      
<div key={area.name} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <img className="rounded-t-lg w-full h-64 object-cover" src={area.image} alt="" />
    
    <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{area.name}</h5>
        
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Monitor Data
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
    )
  })
}


</div>
    
    </div>
  )
}
