<script setup>
import IconSearch from '../components/icons/IconSearch.vue';
import IconThunder from '../components/icons/IconThunder.vue';
import IconChat from '../components/icons/IconChat.vue';
import IconChatactive from '../components/icons/IconChatactive.vue';
import IconItem from '../components/icons/IconItem.vue';
import IconGroup from '../components/icons/IconGroup.vue';
import IconLoading from '../components/icons/IconLoading.vue';
import IconPersonalchat from '../components/icons/IconPersonalchat.vue';

</script>
<script>
export default {
    data() {
        return {
            isChatBox: false,
            isLoading: false,
            chats: [],
            chatsFilter: [],
        }
    },
    mounted() {
        // this.dropdown();
        document.querySelector("#submenu").classList.toggle("hidden");
    },
    methods: {
        thunderOpen() {
            const textthunder = document.querySelectorAll(".text-thunder")
            document.querySelector(".icon1").classList.toggle("translate-x-28");
            document.querySelector(".icon2").classList.toggle("translate-x-14");
            textthunder.forEach(item => {
                item.classList.toggle('hidden')
            })
        },

        async openChatbox() {
            const textthunder = document.querySelectorAll(".text-thunder")
            document.querySelector(".icon2").classList.remove("translate-x-14");
            document.querySelector(".icon1").classList.remove("translate-x-28");
            document.querySelector(".icon1").classList.toggle("translate-x-0");
            document.querySelector(".icon2").classList.toggle("translate-x-0");
            document.querySelector(".icon3").classList.toggle("hidden");
            textthunder.forEach(item => {
                item.classList.toggle('hidden')
            })
            
            if(this.isChatBox){
                this.isChatBox = false;
            }else{
                await this.getChat();
                this.isChatBox = true;
            }
        },

        async getChat(){
            this.isLoading=true;
            const response = await fetch('data/chat.json');
            const result = await response.json();
            setTimeout(() => {
                this.isLoading=false;
                this.chats = result.data;
                this.chatsFilter = result.data;
                
            }, 200)
        },

        filterItem(){
            const dataChat = this.chats;
            const search_chat = document.querySelector('#search_chat').value;
            const filter = dataChat.filter(item => {
                return item.from_chat.toLowerCase().includes(search_chat.toLowerCase())
            })
            this.chatsFilter = filter;
        }


    },
}
</script>

<template>
    <div class=" w-full overflow-auto">
        <div class="bg-grey sticky top-0 p-[19px] lg:block hidden">
            <div class="flex cursor-pointer">
                <IconSearch fill="#F2F2F2" />
                <div class="w-full sm:w-[60%] lg:w-[50%] px-6">
                    <input type="search" class=" w-full bg-transparent outline-none border-b-2 border-gray-500 text-white"
                        placeholder="search">
                </div>
            </div>
        </div>
        <main class="mainContent h-[1000px] relative bg-slate-200" id="mainContent">

        </main>
        <!-- button thunder -->
        <div class="relative font-lato">
            <div class="flex justify-center items-center fixed  right-5 bottom-5">
                <!-- box chat -->
                <div class="bg-white absolute lg:w-[49vw] md:w-[63vw] w-[90vw] bottom-20 right-0 h-[540px]  rounded-md overflow-y-scroll no-scrollbar"
                    v-if="isChatBox">
                    <div class="w-full px-5 py-5">
                        <div class="py-1 px-10 rounded-md border-grey border flex max-h-10 justify-center items-center">
                            <input type="text" name="search_chat" id="search_chat" placeholder="search"
                                class="w-full outline-none bg-transparent text-black placeholder-black" @keyup="filterItem">
                            <div>
                                <IconSearch fill="#333333" class="h-5 text-black" />
                            </div>
                        </div>
                        <div class="py-1 w-full" v-if="isLoading">
                            <div class="w-[100%] h-[450px] flex justify-center flex-wrap">
                                <IconLoading class="self-end animate-spin block w-full"/>
                                <span class="block">Loading Chat...</span>
                            </div>
                        </div>
                        <div class="py-1 " v-if="!isLoading">
                            <ul v-for="item in chatsFilter">
                                <li class="border-b-2">
                                    <div href="#" class="flex items-center mt-3 pb-6 cursor-pointer">
                                        <IconGroup v-if="item.is_group"/>
                                        <IconPersonalchat v-if="!item.is_group" :initial="item.from_chat.charAt(0)"/>
                                        <div class="pl-3 w-[89%]">
                                            <div class="flex items-start">
                                                <h5 class="text-base font-bold text-primary max-w-[80%]">{{ item.from_chat }}</h5>
                                                <span class="ml-3 text-sm">{{item.last_date_chat}}</span>
                                            </div>
                                            <span class="font-bold text-grey block text-sm" v-if="item.is_group">{{ item.last_chat.from }}:</span>
                                            <span class="text-sm">{{ item.last_chat.chat }}</span>
                                        </div>
                                        <div class="isNew h-3 w-3 bg-danger rounded-full" v-if="!item.is_read"></div>
                                    </div>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div class="flex">
                    <div class="relative w-14 flex justify-center  transition-all ease-in-out translate-x-28  icon1">
                        <p class="absolute -top-5 hidden text-thunder">Task</p>
                        <IconItem class="w-14" />
                    </div>
                    <div class="w-14 relative flex justify-center transition-all ease-in-out translate-x-14 icon2"
                        @click="openChatbox()">
                        <p class="absolute -top-5 hidden text-thunder">Inbox</p>
                        <IconChat class="relatvive w-14 z-0" v-if="!isChatBox" />
                        <IconChatactive class="relatvive w-14 z-0" v-if="isChatBox" />
                    </div>
                    <div class="w-14 z-50 relative -translate-y-1 transition-all ease-in-out icon3" @click="thunderOpen()">
                        <IconThunder class="w-14" />
                    </div>
                </div>
            </div>
        </div>
        <footer class="w-full bg-primary p-3 text-white text-xs">
            <div class="flex justify-center">
                <p>Copyright &copy; riyo</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>


