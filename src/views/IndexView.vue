<script setup>
import IconSearch from '../components/icons/IconSearch.vue';
import IconThunder from '../components/icons/IconThunder.vue';
import IconChat from '../components/icons/IconChat.vue';
import IconChatactive from '../components/icons/IconChatactive.vue';
import IconItem from '../components/icons/IconItem.vue';

</script>
<script>
export default {
    data() {
        return {
            isChatBox: false,
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

        openChatbox() {
            const textthunder = document.querySelectorAll(".text-thunder")
            document.querySelector(".icon2").classList.remove("translate-x-14");
            document.querySelector(".icon1").classList.remove("translate-x-28");
            document.querySelector(".icon1").classList.toggle("translate-x-0");
            document.querySelector(".icon2").classList.toggle("translate-x-0");
            document.querySelector(".icon3").classList.toggle("hidden");
            textthunder.forEach(item => {
                item.classList.toggle('hidden')
            })
            this.isChatBox ? this.isChatBox = false : this.isChatBox = true
        }

    },
}
</script>

<template>
    <div class=" w-full overflow-auto">
        <div class="bg-grey sticky top-0 p-[19px] lg:block hidden">
            <div class="flex cursor-pointer">
                <IconSearch />
                <div class="w-full sm:w-[60%] lg:w-[50%] px-6">
                    <input type="search" class=" w-full bg-transparent outline-none border-b-2 border-gray-500 text-white"
                        placeholder="search">
                </div>
            </div>
        </div>
        <main class="mainContent h-[1000px] relative" id="mainContent">

        </main>
        <!-- button thunder -->
        <div class="relative font-lato">
            <div class="flex justify-center items-center fixed  right-5 bottom-5">
                <div class="bg-purple absolute min-w-[600px] bottom-20 right-0 min-h-[500px]  rounded-md px-5 py-2" v-if="isChatBox">p</div>
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


