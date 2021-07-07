import { createContext } from "react";
export const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
    const items = [
        {
            id: 1,
            name: "shoes",
            description: "running shoes",
            img: "https://source.unsplash.com/164_6wVEHfI",
            price: 200,
            quantity: 1

        },
        {
            id: 2,
            name: "phone",
            description: "working mobile phone",
            img: "https://source.unsplash.com/EwKkZu18HPo",
            price: 100,
            quantity: 1

        },
        {
            id: 3,
            name: "laptop",
            description: "laptop for work",
            img: "https://source.unsplash.com/1SAnrIxw5OY",
            price: 1000,
            quantity: 1

        },
        {
            id: 4,
            name: "bike",
            description: "bike for travelling",
            img: "https://source.unsplash.com/SvMlXH_eW6o",
            price: 2000,
            quantity: 1

        },
        {
            id: 5,
            name: "cup",
            description: "for drinking coffee",
            img: "https://source.unsplash.com/IuLgi9PWETU",
            price: 100,
            quantity: 0
        }, {
            id: 6,
            name: "bags",
            description: "bags for shopping",
            img: "https://source.unsplash.com/se3GNrXjtdQ",
            price: 500,
            quantity: 0
        },
        {
            id: 7,
            name: "watches",
            description: "watches in apparels",
            img: "https://source.unsplash.com/Vk3QiwyrAUA",
            price: 700,
            quantity: 0
        }, {
            id: 8,
            name: "jewellry",
            description: "gold jewellry",
            img: "https://source.unsplash.com/2zHQhfEpisc",
            price: 10000,
            quantity: 0
        },
        {
            id: 9,
            name: "vase",
            description: "flower vase",
            img: "https://source.unsplash.com/e8hVVG70vrU",
            price: 2000,
            quantity: 0
        },
        {
            id: 10,
            name: "perfume bottle",
            description: "bottle of perfume",
            img: "https://source.unsplash.com/qFsxwpoDIB4"
            , price: 1500
        }, {
            id: 11, name: "shades", description: "shades for bright day",
            img: "https://source.unsplash.com/dtOTQYmTEs0",
            price: 3000,
            quantity: 0
        },
        {
            id: 12,
            name: "sandals",
            description: "footwear for ladies",
            img: "https://source.unsplash.com/DPTFlJ1HhAw",
            price: 1700,
            quantity: 0
        }
    ]



    return (
        <ItemContext.Provider value={{ items }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider;