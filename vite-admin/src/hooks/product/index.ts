import { getProductsAPI } from "@/api/products";

interface IHandleProductsApi {
	getProducts: () => any
}

export function handleProductsApi(): IHandleProductsApi {
	async function getProducts() {
		const data =  await getProductsAPI()
		return data
	}
	
	return {
		getProducts
	}
}