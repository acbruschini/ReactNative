import { createSlice } from "@reduxjs/toolkit";
import Products from "../../Assets/products.json"

export const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        value: {
            categorySelected: "",
            idSelected: "",
            allProducts: Products,
            selectedProducts: []
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.selectedProducts = state.value.allProducts.filter((product) => product.category === action.payload)
            state.value.categorySelected = action.payload
        },
        setIdSelected: (state, action) => {
            state.value.idSelected = action.payload
        }
    }
})

export const {setCategorySelected, setIdSelected} = shopSlice.actions
export default shopSlice.reducer