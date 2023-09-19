export interface Product{
        id: number;
        categoryName: string;
        subCategoryName: string;
        categoryId: number;
        subCategoryId: number;
        name: string;
        brandId: number;
        modelId: number;
        description: string;
        content: string;
        nutritionalValues: string;
        usage: string;
        image: string;
        rank: number;
        price: number;
        taxRate: number;
        totalPrice: number;
        totalPriceTl: number;
        cost: number;
        barcode: string;
        unitCount: number;
        unitTypeId: number;
        supplier: number[];
        stockCount: number;
        isActive: true
}