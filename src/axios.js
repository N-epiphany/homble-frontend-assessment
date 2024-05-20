import axios from "axios";

//GET - get all products - /products
//GET - get product by ud - /products/:id
//POST - create product - /products - Content Type - "application/json"
//GET - get dashboard data - /dashboard

const envBaseUrl = "https://frontend-assessment-server.onrender.com/api";

const instance = axios.create({
  baseURL: envBaseUrl,
});

export const getRequest = async (url, params = {}, responseType = "json") => {
  return instance.get(url, {
    params,
    responseType,
  });
};

export const postRequest = async (url, data, options) => {
  if (options && options.contentType) {
    instance.defaults.headers["Content-Type"] =
      options.contentType === "multipart/form-data"
        ? undefined
        : options.contentType;
  }
  const response = await instance.post(url, data);
  instance.defaults.headers["Content-Type"] = "application/json";
  return response;
};

// Function to fetch all products
export const fetchAllProducts = async () => {
  try {
    // Fetch all products
    const response = await getRequest("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Function to fetch  products by ID
export const fetchProductById = async (id) => {
  try {
    const response = await getRequest(`/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
