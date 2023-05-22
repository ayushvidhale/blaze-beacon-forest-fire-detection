import Humidity from "./realtime/humidity";
import Temperature from "./realtime/temperature";
import Gas from "./realtime/gas";
import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";
import { useEffect } from "react";
import Map from "../component/map";
import axios from "axios";


import { toast } from "react-toastify";

export default function VIT() {
  const address = "1600 Amphitheatre Parkway, Mountain View, CA";

  useEffect(() => {
    const $modalElement = document.querySelector("#modalEl");

    const modalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 bg-opacity-80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    const modal = new Modal($modalElement, modalOptions);

    // modal.show();

    const $modalElement2 = document.querySelector("#modalEl");

    const modalOptions2 = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 bg-opacity-80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    const modal2 = new Modal($modalElement2, modalOptions2);

    const $modalElement3 = document.querySelector("#modalEl");

    const modalOptions3 = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 bg-opacity-80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    const modal3 = new Modal($modalElement3, modalOptions3);
  }, []);

  const callTeam = () => {
    axios
      .post("http://localhost:5000/api/callTeam")
      .then((res) => {
         console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      toast.success("🔮 Call Sent", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
       });
  };

  const sendAlert = () => {
    axios
      .post(
        "https://maker.ifttt.com/trigger/forest_fire_alert/with/key/elX-jFqbsqbWjexR9f5A-D78v9fuO_NBjKg6rodK_Ow"
      )
      .then((res) => {
         console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      toast.success("🔮 Message Sent", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
       });
  };

  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 :bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="\"
                class="flex items-center p-2 text-gray-900 rounded-lg :text-white bg-sky-500 bg-gradient-to-r to-emerald-500 from-sky-500"
              >
                <svg
                  aria-hidden="true"
                  class="transform rotate-180 flex-shrink-0 w-6 h-6 text-gray-800 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-3">Go Back </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Warnings </span>
                <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full :bg-gray-700 :text-gray-300">
                  None
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Active Devices
                </span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full :bg-blue-900 :text-blue-300">
                  4
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-modal-target="modalEl"
                data-modal-toggle="modalEl"
                class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-green-200 hover:bg-green-400 :hover:bg-gray-700"
              >
                {/* <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                <span class="flex-1 ml-3 whitespace-nowrap flex">
                  D1 - Temp(32`C) & Humidity(68)
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-modal-target="modalEl2"
                data-modal-toggle="modalEl2"
                class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-gray-200 hover:bg-gray-300 :hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  D2 - Currently offline
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-modal-target="modalEl2"
                data-modal-toggle="modalEl2"
                class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-gray-200 hover:bg-gray-300 :hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  D3 - Currently offline
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-modal-target="modalEl2"
                data-modal-toggle="modalEl2"
                class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-gray-200 hover:bg-gray-300 :hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  D4 - Currently offline
                </span>
              </a>
            </li>
            {/* <li>
            <a href="#" class="text-sm flex items-center p-2 text-gray-900 rounded-lg :text-white bg-red-200 hover:bg-gray-300 :hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 transition duration-75 :text-gray-400 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">D4 - Currently offline</span>
            </a>
         </li> */}
            <li>
              <a
                href="#"
                data-modal-target="modalEl3"
                data-modal-toggle="modalEl3"
                class="flex items-center p-2 px-6 text-red-600 hover:text-gray-200 rounded-lg :text-white border-2 border-red-600 hover:bg-red-500  bottom-6 fixed :hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-800 bg-gray-200 rounded-lg transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Send Reponse Team
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class=" border-2 border-gray-200 border-dashed rounded-lg :border-gray-700">
          <img
            src="/vit.jpeg"
            alt=""
            className="rounded-xl border-gray-700 border w-full"
          />
        </div>
        <Map address={address} />
        <div
          id="modalEl"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-start justify-between p-5 border-b rounded-t ">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                  Device 1 - [Online]
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="p-6 space-y-6 flex">
                <iframe
                  width="450"
                  height="260"
                  className="mr-4 mt-6 p-2"
                  src="https://thingspeak.com/channels/2100842/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
                ></iframe>

                <iframe
                  width="450"
                  height="260"
                  className="mr-4  p-2"
                  src="https://thingspeak.com/channels/2100842/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Smoke&type=line"
                ></iframe>

                <iframe
                  width="450"
                  height="260"
                  className=" p-2"
                  src="https://thingspeak.com/channels/2100842/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line"
                ></iframe>
              </div>

              {/* <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
            </div> */}
            </div>
          </div>
        </div>
        <div
          id="modalEl2"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-start justify-between p-5 border-b rounded-t border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                  Device - [Currently offline]
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500">
                  This device is currently offline or may not have installed.
                  contact @BlazeBeaconTeam for any issues.
                </p>
              </div>

              {/* <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b border-gray-600">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">I accept</button>
                <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600">Decline</button>
            </div> */}
            </div>
          </div>
        </div>

        <div
          id="modalEl3"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow ">
              <div class="flex items-start justify-between p-5 border-b rounded-t border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
                  Send Response Team
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="p-6 space-y-6">
                <button
                  onClick={callTeam} data-modal-target="modalEl3"
                  data-modal-toggle="modalEl3"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    Call Response Team
                  </span>
                </button>

                <button
                  onClick={sendAlert} data-modal-target="modalEl3"
                  data-modal-toggle="modalEl3"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    Send Alert
                  </span>
                </button>
              </div>

              {/* <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b border-gray-600">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">I accept</button>
                <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600">Decline</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-KTOc4kbZozx8iKXKnrkZ_EQ3SDETTFk"
      ></script>
    </>
  );
}
