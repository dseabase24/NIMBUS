import { PlusIcon } from '@heroicons/react/24/outline';

function Devices(){
  return(
   <div className="space-y-4 sm:space-y-6">
    <div>
      <h1 className="text-lg sm:text-3xl font-bold text-black">Devices</h1>
    </div>

    <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm flex-shrink-0">
      <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
      <span className="hidden sm:inline">Add Device</span>
      <span className="sm:hidden">Add</span>
    </button>
   </div>
  ); 
}

export default Devices;