export const colo = [
    "white",
    "Black",
    "Red",
    "Green",
    "Yellow",
    "YellowGreen",
    "Purple",
    "Pink",
    "Orange",
    "Grey",
    "Blue",
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L', },

        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "₹159 to ₹399" },
            { value: "399-999", label: "₹399 to ₹999" },
            { value: "999-1999", label: "₹999 to ₹1999" },
            { value: "1999-2999", label: "₹1999 to ₹2999" },
            { value: "2999-4999", label: "₹2999 to ₹3999" },
        ], 
    },
    {
        id:"discount",  //disccout 
        name: "Discount Range", //Disccount Range
        options: [
            { value: "20", label: "20% and above"},
            { value: "30", label: "30% and above"},
            { value: "40", label: "40% and above"},
            { value: "50", label: "50% and above"},
            { value: "60", label: "60% and above"},
            { value: "70", label: "70% and above"},
            { value: "80", label: "80% and above"},
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in-stock", label: "In Stock" },
            { value: "out-of-stock", label: "Out of Stock" },
        ],
    },
];

