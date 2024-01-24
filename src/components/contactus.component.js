import React from 'react';
import './contactus.css'
const ContactUs = () => {
  return (
    <div class="container mt-32 mx-auto px-2 md:px-4 contactusedit">

    <section class="">

        <div class="flex justify-center">
            <div class="text-center md:max-w-xl lg:max-w-3xl">
                <h2 class="mb-12 px-6 text-3xl font-bold">
                    Contact us
                </h2>
            </div>
        </div>

        <div class="flex flex-wrap items-center justify-around makeitaround">

            <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Name
                    </label>
                    <input type="text" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Name" />
                </div>

                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Email
                    </label>
                    <input type="email" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                            placeholder="Enter your email address" />
                </div>
                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Phone Number
                    </label>
                    <input type="number" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                            placeholder="Enter Phone Number" />
                </div>

                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Message
                    </label>
                    <textarea class="px-2 py-2 border rounded-[5px] w-full outline-none" name="" id=""></textarea>
                </div>

                <button type="button"
                        class="mb-6 inline-block w-full rounded buttonaboutus">
                        Send
                </button>

            </form>

            <div class="w-full shrink-0 grow-0 basis-auto lg:w-1/2">
            <iframe className='w-full manageIframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15139.05542243947!2d73.8687765!3d18.449028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91fd5c6d489%3A0x954fefd0b60cba12!2sDreamz%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1681883790875!5m2!1sen!2sin" width="100&amp;" height="250" allowfullscreen="allowfullscreen"></iframe>
                <div class="flex flex-wrap">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class=" font-bold">
                                Address
                                </p>
                                <p class="text-neutral-500 ">
                                Office No 27, DNK Business Bay, Katraj – Kondhwa Rd, Rajas Society, Katraj, Pune, Maharashtra 411046
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class=" font-bold ">
                                    Call
                                </p>
                                <p class="text-neutral-500 ">
                                +91 99606 85666
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="align-start flex">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="font-bold ">Email</p>
                                <p class="text-neutral-500 ">
                                info@dreamztechnology.com
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="align-start flex">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold">
                                    Bug report
                                </p>
                                <p class="text-neutral-500 ">
                                    bugs@example.com
                                </p>
                                <p class="text-neutral-500">
                                    +1 234-567-89
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    </section>
</div>
  );
};

export default ContactUs;
