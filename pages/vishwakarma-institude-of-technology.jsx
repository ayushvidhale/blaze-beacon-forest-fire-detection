export default function VIT(){
    return (
    <>
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 :bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="\" class="flex items-center p-2 text-gray-900 rounded-lg :text-white bg-sky-500 bg-gradient-to-r to-emerald-500 from-sky-500">
            <svg aria-hidden="true" class="transform rotate-180 flex-shrink-0 w-6 h-6 text-gray-800 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">Go Back </span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Warnings </span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full :bg-gray-700 :text-gray-300">None</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Active Devices</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full :bg-blue-900 :text-blue-300">4</span>
            </a>
         </li>
         <li>
            <a href="#" class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-green-200 hover:bg-green-400 :hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">D1 - Temp(35`C) & Humidity(40)</span>
            </a>
         </li>
         <li>
            <a href="#" class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-gray-200 hover:bg-gray-300 :hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">D2 - Currently offline</span>
            </a>
         </li>
         <li>
            <a href="#" class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-gray-200 hover:bg-gray-300 :hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">D3 - Currently offline</span>
            </a>
         </li>
         <li>
            <a href="#" class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-gray-200 hover:bg-gray-300 :hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">D4 - Currently offline</span>
            </a>
         </li>
         {/* <li>
            <a href="#" class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-red-200 hover:bg-gray-300 :hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">D4 - Currently offline</span>
            </a>
         </li> */}
         <li>
            <a href="#" class="flex items-center p-2 px-6 text-red-600 hover:text-gray-200 rounded-lg :text-white border-2 border-red-600 hover:bg-red-500  bottom-6 fixed :hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-800 bg-gray-200 rounded-lg transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Send Reponse Team</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64">
   <div class=" border-2 border-gray-200 border-dashed rounded-lg :border-gray-700">
      <img src="/vit.jpeg" alt="" className="rounded-xl border-gray-700 border w-full" />
   </div>
</div>
</>
    )
}