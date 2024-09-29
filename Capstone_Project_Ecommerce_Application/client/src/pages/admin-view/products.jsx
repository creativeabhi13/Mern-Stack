// import ProductImageUpload from "@/components/admin-view/image-upload";
// import AdminProductTile from "@/components/admin-view/product-tile";
// import CommonForm from "@/components/common/form";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { useToast } from "@/components/ui/use-toast";
// import { addProductFormElements } from "@/config";
// import {
//   addNewProduct,
//   deleteProduct,
//   editProduct,
//   fetchAllProducts,
// } from "@/store/admin/products-slice";
// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const initialFormData = {
//   image: null,
//   title: "",
//   description: "",
//   category: "",
//   brand: "",
//   price: "",
//   salePrice: "",
//   totalStock: "",
//   averageReview: 0,
// };

// function AdminProducts() {
//   const [openCreateProductsDialog, setOpenCreateProductsDialog] =
//     useState(false);
//   const [formData, setFormData] = useState(initialFormData);
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");
//   const [imageLoadingState, setImageLoadingState] = useState(false);
//   const [currentEditedId, setCurrentEditedId] = useState(null);

//   const { productList } = useSelector((state) => state.adminProducts);
//   const dispatch = useDispatch();
//   const { toast } = useToast();



//   function onSubmit(event) {
//     event.preventDefault();
  
//     console.log(uploadedImageUrl, "uploadedImageUrl");
  
//     const slug = generateSlug(formData.title); // Generate slug based on title
  
//     currentEditedId !== null
//       ? dispatch(
//           editProduct({
//             id: currentEditedId,
//             formData: {
//               ...formData,
//               slug, // Include slug here
//               image: uploadedImageUrl || formData.image, // Retain old image if no new image is uploaded
//             },
//           })
//         ).then((data) => {
//           if (data?.payload?.success) {
//             dispatch(fetchAllProducts());
//             setFormData(initialFormData);
//             setOpenCreateProductsDialog(false);
//             setCurrentEditedId(null);
//           }
//         })
//       : dispatch(
//           addNewProduct({
//             ...formData,
//             slug, // Ensure slug is included
//             image: uploadedImageUrl, // Ensure this is not null
//           })
//         ).then((data) => {
//           if (data?.payload?.success) {
//             dispatch(fetchAllProducts());
//             setOpenCreateProductsDialog(false);
//             setImageFile(null);
//             setFormData(initialFormData);
//             toast({
//               title: "Product added successfully",
//             });
//           }
//         });
//   }
  
  

//   function handleDelete(getCurrentProductId) {
//     dispatch(deleteProduct(getCurrentProductId)).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchAllProducts());
//       }
//     });
//   }

//   function isFormValid() {
//     return Object.keys(formData)
//       .filter((currentKey) => currentKey !== "averageReview")
//       .map((key) => formData[key] !== "")
//       .every((item) => item);
//   }

//   useEffect(() => {
//     dispatch(fetchAllProducts());
//   }, [dispatch]);

//   console.log(formData, "productList");

//   return (
//     <Fragment>
//       <div className="mb-5 w-full flex justify-end">
//         <Button onClick={() => setOpenCreateProductsDialog(true)}>
//           Add New Product
//         </Button>
//       </div>
//       <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
//         {productList && productList.length > 0
//           ? productList.map((productItem) => (
//               <AdminProductTile
//                 setFormData={setFormData}
//                 setOpenCreateProductsDialog={setOpenCreateProductsDialog}
//                 setCurrentEditedId={setCurrentEditedId}
//                 product={productItem}
//                 handleDelete={handleDelete}
//               />
//             ))
//           : null}
//       </div>
//       <Sheet
//         open={openCreateProductsDialog}
//         onOpenChange={() => {
//           setOpenCreateProductsDialog(false);
//           setCurrentEditedId(null);
//           setFormData(initialFormData);
//         }}
//       >
//         <SheetContent side="right" className="overflow-auto">
//           <SheetHeader>
//             <SheetTitle>
//               {currentEditedId !== null ? "Edit Product" : "Add New Product"}
//             </SheetTitle>
//           </SheetHeader>
//           <ProductImageUpload
//             imageFile={imageFile}
//             setImageFile={setImageFile}
//             uploadedImageUrl={uploadedImageUrl}
//             setUploadedImageUrl={setUploadedImageUrl}
//             setImageLoadingState={setImageLoadingState}
//             imageLoadingState={imageLoadingState}
//             isEditMode={currentEditedId !== null}
//           />
//           <div className="py-6">
//             <CommonForm
//               onSubmit={onSubmit}
//               formData={formData}
//               setFormData={setFormData}
//               buttonText={currentEditedId !== null ? "Edit" : "Add"}
//               formControls={addProductFormElements}
//               isBtnDisabled={!isFormValid()}
//             />
//           </div>
//         </SheetContent>
//       </Sheet>
//     </Fragment>
//   );
// }

// export default AdminProducts;
import ProductImageUpload from "@/components/admin-view/image-upload";
import AdminProductTile from "@/components/admin-view/product-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { addProductFormElements } from "@/config";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "@/store/admin/products-slice";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    const slug = generateSlug(formData.title); 

    const finalImage = uploadedImageUrl || formData.image; 

    currentEditedId !== null
      ? dispatch(
          editProduct({
            id: currentEditedId,
            formData: {
              ...formData,
              slug,
              image: finalImage, 
            },
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            resetForm();
          }
        })
      : dispatch(
          addNewProduct({
            ...formData,
            slug,
            image: finalImage, // Ensure this is not null
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            resetForm();
            toast({
              title: "Product added successfully",
            });
          }
        });
  }

  function resetForm() {
    setFormData(initialFormData);
    setOpenCreateProductsDialog(false);
    setImageFile(null);
    setUploadedImageUrl('');
    setCurrentEditedId(null);
  }

  function handleDelete(productId) {
    dispatch(deleteProduct(productId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .filter((key) => key !== "averageReview")
      .every((key) => formData[key] !== "");
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                key={productItem._id}
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setCurrentEditedId={setCurrentEditedId}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={resetForm}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6">
            <CommonForm
            
            //  {/*  onSubmit={onSubmit}
            //   formData={formData}
            //   setFormData={setFormData}
            //   formElements={addProductFormElements}
            //   formControls={addProductFormElements} */}
            onSubmit={onSubmit}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText={currentEditedId !== null ? "Edit" : "Add"}
                           formControls={addProductFormElements}
                            isBtnDisabled={!isFormValid()}
             />
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={!isFormValid() || imageLoadingState}
            onClick={onSubmit}
          >
            {currentEditedId !== null ? "Update Product" : "Add Product"}
          </Button>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export default AdminProducts;