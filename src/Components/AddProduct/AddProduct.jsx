import React from "react";

const AddProduct = () => {
  const addProductItem = (e) => {
    e.preventDefault();
    const product = e.target.product.value;
    const price = e.target.price.value;
    console.log(product, price);
    fetch("http://localhost:4000/addproduct", {
      method: "POST",
      body: JSON.stringify({
         product,
        price,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <h1 className="text-center mt-20 text-4xl font-bold">
        Add Your Favourite Products
      </h1>
      <form
        onSubmit={addProductItem}
        className="text-center w-[500px] mx-auto mt-10 border border-gray-400 py-10 px-6"
      >
        <input
          className="block outline-none bg-gray-100 py-3 w-full mb-5 pl-3 text-black"
          type="text"
          name="product"
          placeholder="Product Name"
        />
        <input
          className="block outline-none bg-gray-100 py-3 w-full mb-5 pl-3 text-black"
          type="text"
          name="price"
          placeholder="Price"
        />
        <input
          className="bg-blue-500 text-lg rounded-md text-white py-2 px-5"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
