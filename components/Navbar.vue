<template>
    <div>
        <nav class="bg-themebackground fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 lg:px-16 px-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="Group 2.svg" class="h-8" alt="Logo">
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="font-montserrat text-white bg-gradient-to-b from-btncolor-light to-btncolor-dark
                        shadow-lg font-bold rounded-lg text-sm px-6 py-3 text-center">
                        Get A Quote</button>
                    <button type="button" class="inline-flex items-center p-2 w-10 h-10 
                        rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2">
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
                            <NuxtLink to="/"
                                class="block py-2 md:p-0 px-3 font-vadodara font-bold text-navbarlink bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                                aria-current="page">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="block py-2 px-3 md:p-0 font-vadodara font-normal text-navbarlink">
                                About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services"
                                class="block py-2 px-3 md:p-0 font-vadodara font-normal text-navbarlink">
                                Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#" class="block py-2 px-3 md:p-0 font-vadodara font-normal text-navbarlink">Our
                                Fleet</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#" class="block py-2 px-3 md:p-0 font-vadodara font-normal text-navbarlink">
                                Contact Us</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="w-full bg-themebackground" v-if="show == true">
            <div class="mt-24 p-4">
               
            </div>
        </div>
        <NuxtPage />
    </div>
</template>
<script setup>
const show = false;
const pagesLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Our Services", link: "/services" },
    { title: "Our Fleet", link: "/fleet" },
    { title: "Contact Us", link: "/contactUs" },
]
</script>
