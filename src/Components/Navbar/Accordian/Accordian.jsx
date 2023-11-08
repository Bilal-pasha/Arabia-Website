export default function AccordianComponent() {
  return (
    <>
      <div>
        <a href="/faculties">
          <div class="mt-[8px] border-[1px] border-[#ffbc00] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-[#f1bb21] hover:text-white cursor-pointer ">
            Faculties
          </div>
        </a>
        <a href="/About" class="hover:text-blue">
          <div class="mt-[8px] border-[1px] border-[#ffbc00] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-[#f1bb21] hover:text-white cursor-pointer">
            About us
          </div>
        </a>
        <a href="/contact" class="hover:text-blue">
          <div class="mt-[8px] border-[1px] border-[#ffbc00] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-[#f1bb21] hover:text-white cursor-pointer">
            Contact us
          </div>
        </a>
        <a href="/more" class="hover:text-blue">
          <div class="mt-[8px] border-[1px] border-[#ffbc00] text-black box-border font-bold text-[16px]  py-[20px] px-[32px] hover:bg-[#f1bb21] hover:text-white cursor-pointer">
            More
          </div>
        </a>
        <div className="flex flex-col space-y-5 px-2 py-4">
          <button class="relative px-4 py-2 overflow-hidden bg-green-900 text-white rounded-lg shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-green-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <span class="relative z-10">Sign in</span>
          </button>
          <button class="text-green-900 hover:before:bg-green-600 relative  px-4 py-2 overflow-hidden border  bg-white rounded-lg  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-50 hover:text-white hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Sign up</span>
          </button>
        </div>
      </div>
    </>
  );
}
