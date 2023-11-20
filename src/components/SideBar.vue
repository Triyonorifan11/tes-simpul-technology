<script>
export default {
    data(){
        return {
            
        }
    },
    mounted() {
        // this.dropdown();
    },
    methods: {
        dropdown() {
            document.querySelector("#arrow").classList.toggle("rotate-180");
            document.querySelector("#submenu").classList.toggle("hidden");
        },

        openSidebar() {
            document.querySelector(".sidebar").classList.toggle("hidden");
        }
    },
}
</script>
<template>
    <div class="bg-primary">
                <span class="lg:hidden sm:block absolute text-white text-4xl top-1 right-1 cursor-pointer z-50" @click="openSidebar()">
                    <i class="bi bi-filter-left px-1 bg-gray-900 rounded-md"></i>
                </span>
                <div class="hidden lg:block md:block sidebar min-h-screen fixed lg:sticky top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 z-50">
                    <div class="text-gray-100 text-xl">
                        <div class="p-2.5 mt-1 flex items-center">
                            <h1 class="font-bold text-gray-200 text-[15px] ml-3">Simple Quicks</h1>
                            <i class="bi bi-x cursor-pointer ml-28 lg:hidden md:hidden" @click="openSidebar()"></i>
                        </div>
                        <div class="my-2 bg-gray-600 h-[1px]"></div>
                    </div>
                    <div class="p-2.5 flex lg:hidden items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white ">
                        <i class="bi bi-search text-sm"></i>
                        <input type="text" placeholder="Search" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
                    </div>
                    <ul>
                        <li>
                            <div
                                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white">
                                <i class="bi bi-house-door-fill"></i>
                                <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                            </div>
                        </li>
                        <li>
                            <div
                                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white">
                                <i class="bi bi-bookmark-fill"></i>
                                <span class="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
                            </div>
                        </li>
                        <div class="my-4 bg-gray-600 h-[1px]"></div>
                        <li>
                            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white"
                                @click="dropdown()" >
                                <i class="bi bi-chat-left-text-fill"></i>
                                <div class="flex justify-between w-full items-center">
                                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                                    <span class="text-sm " id="arrow" >
                                        <i class="bi bi-chevron-down"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
                                <h1 class="cursor-pointer p-2 hover:bg-primary rounded-md mt-1">
                                    Group
                                </h1>
                                <h1 class="cursor-pointer p-2 hover:bg-primary rounded-md mt-1">
                                    Friends
                                </h1>
                            </div>
                        </li>
                        <li>
                            <div
                                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white">
                                <i class="bi bi-box-arrow-in-right"></i>
                                <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
</template>