<template>
    <div>
        <nav class="bg-themebackground fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 lg:px-12 md:px-4 sm:px-4 xs:px-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="Group 2.svg" class="h-8" alt="Logo">
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button"
                        class="text-white bg-gradient-to-b from-btncolor-light to-btncolor-dark font-bold rounded-lg text-sm px-6 py-3 text-center">
                        Get A Quote</button>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <NuxtLink href="#" class="block py-2 md:p-0 px-3 font-bold text-navbarlink bg-blue-700 rounded md:bg-transparent md:text-blue-700" aria-current="page">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#" class="block py-2 px-3 md:p-0 font-normal text-navbarlink">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#" class="block py-2 px-3 md:p-0 font-normal text-navbarlink">Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#" class="block py-2 px-3 md:p-0 font-normal text-navbarlink">Our Fleet</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#" class="block py-2 px-3 md:p-0 font-normal text-navbarlink">Contact Us</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>

</script>