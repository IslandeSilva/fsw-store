import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react"
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({});

    return ( 
        <div className="p-5">
            <Badge className="gap-1 text-base uppercase border-2 border-primary px-3 py-[0.375rem]" variant="outline">
                <ShapesIcon size={16} />
                Catálogo
            </Badge>
        

        <div className="grid grid-cols-2 gap-8 pt-5 text-center justify-center">
            {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </div>
        </div>

     );
}
 
export default CatalogPage ;