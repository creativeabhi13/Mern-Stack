export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "gaming", label: "Gaming" },
      { id: "ultrabook", label: "Ultrabook" },
      { id: "business", label: "Business" },
      { id: "2in1", label: "2-in-1" },
      { id: "budget", label: "Budget" },
      { id: "student", label: "Student" },
      { id: "workstation", label: "Workstation" },
      { id: "chromebook", label: "Chromebook" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "apple", label: "Apple" },
      { id: "dell", label: "Dell" },
      { id: "hp", label: "HP" },
      { id: "lenovo", label: "Lenovo" },
      { id: "asus", label: "ASUS" },
      { id: "acer", label: "Acer" },
      { id: "microsoft", label: "Microsoft Surface" },
      { id: "msi", label: "MSI" },
      { id: "razer", label: "Razer" },
      { id: "samsung", label: "Samsung" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "gaming",
    label: "Gaming",
    path: "/shop/listing",
  },
  {
    id: "ultrabook",
    label: "Ultrabook",
    path: "/shop/listing",
  },
  {
    id: "business",
    label: "Business",
    path: "/shop/listing",
  },
  {
    id: "2in1",
    label: "2-in-1",
    path: "/shop/listing",
  },
  {
    id: "budget",
    label: "Budget",
    path: "/shop/listing",
  },
  {
    id: "student",
    label: "Student",
    path: "/shop/listing",
  },
  {
    id: "workstation",
    label: "Workstation",
    path: "/shop/listing",
  },
  {
    id: "chromebook",
    label: "Chromebook",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  gaming: "Gaming",
  ultrabook: "Ultrabook",
  business: "Business",
  "2in1": "2-in-1",
  budget: "Budget",
  student: "Student",
  workstation: "Workstation",
  chromebook: "Chromebook",
};

export const brandOptionsMap = {
  apple: "Apple",
  dell: "Dell",
  hp: "HP",
  lenovo: "Lenovo",
  asus: "ASUS",
  acer: "Acer",
  microsoft: "Microsoft Surface",
  msi: "MSI",
  razer: "Razer",
  samsung: "Samsung",
};

export const filterOptions = {
  category: [
    { id: "gaming", label: "Gaming" },
    { id: "ultrabook", label: "Ultrabook" },
    { id: "business", label: "Business" },
    { id: "2in1", label: "2-in-1" },
    { id: "budget", label: "Budget" },
    { id: "student", label: "Student" },
    { id: "workstation", label: "Workstation" },
    { id: "chromebook", label: "Chromebook" },
  ],
  brand: [
    { id: "apple", label: "Apple" },
    { id: "dell", label: "Dell" },
    { id: "hp", label: "HP" },
    { id: "lenovo", label: "Lenovo" },
    { id: "asus", label: "ASUS" },
    { id: "acer", label: "Acer" },
    { id: "microsoft", label: "Microsoft Surface" },
    { id: "msi", label: "MSI" },
    { id: "razer", label: "Razer" },
    { id: "samsung", label: "Samsung" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];


export const contactFormControls = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",

  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
   
  },
  {
    label:"Phone",
    name:"phone",
    type:"text",
    placeholder:"Enter your phone number",

  },
  {
    label: "Subject",
    name: "subject",
    type: "text",
    placeholder: "Enter the subject",
  
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Write your message",

  },
];
