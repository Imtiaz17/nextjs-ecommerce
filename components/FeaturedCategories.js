export const FeaturedCategories = () => {
    return (
        <div>
            {/* categories  */}
            <div class="container py-16">
                <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">Shop By Categories</h2>
                <div class="grid grid-cols-3 gap-3">
                    {/* single  category  */}
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="images/category/category-1.jpg" class="w-full" alt="" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">Bedroom</a>
                    </div>
                    {/* single  category  */}
                    {/* single  category  */}
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="images/category/category-2.jpg" class="w-full" alt="" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">Mattress</a>
                    </div>
                    {/* single  category  */}
                    {/* single  category  */}
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="images/category/category-3.jpg" class="w-full" alt="" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">Office
                            Furniture</a>
                    </div>
                    {/* single  category  */}
                    {/* single  category  */}
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="images/category/category-4.jpg" class="w-full" alt="" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">Outdoor</a>
                    </div>
                    {/* single  category  */}
                    {/* single  category  */}
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="images/category/category-5.jpg" class="w-full" alt="" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">Lounges
                            & Sofas</a>
                    </div>
                    {/* single  category  */}
                    {/* single  category  */}
                    <div class="relative rounded-sm overflow-hidden group">
                        <img src="images/category/category-6.jpg" class="w-full" alt="" />
                        <a href="#"
                            class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">Living
                            & Dining</a>
                    </div>
                    {/* single  category  */}
                </div>
            </div>
            {/* categories  */}
        </div>
    )
}