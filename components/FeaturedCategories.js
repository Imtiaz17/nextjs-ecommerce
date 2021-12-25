export const FeaturedCategories = (props) => {
    return (
        <div>
            {/* categories  */}
            <div class="container py-16">
                <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">Shop By Categories</h2>
                <div class="grid grid-cols-3 gap-3">
                    {/* single  category  */}
                    {props.cats.map(cat => {
                        return <div class="relative rounded-sm overflow-hidden group">
                            <img src="images/category/category-1.jpg" class="w-full" alt="" />
                            <a href="#"
                                class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center font-medium  text-white text-xl group-hover:bg-opacity-50 transition">{cat.name}</a>
                        </div>
                        {/* single  category  */ }
                    })}

                </div>
            </div>
            {/* categories  */}
        </div>
    )
}