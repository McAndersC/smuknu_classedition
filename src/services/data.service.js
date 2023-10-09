
let productData = []

export const getProductData = async () => {
    
    const url = 'https://smuknu.webmcdm.dk/products';
    const response = await fetch(url);
    const data = await response.json();
    productData = data;

    return data;

    // return fetch('https://smuknu.webmcdm.dk/products').then((response) => {

    //     return response.json()

    // });

}

export const getProductById = async (id) => {

    console.log(productData)

    if(productData.length === 0) {

        await getProductData();

    }

    return productData.find((product) => product._id === id);


}

export const getProductDataMock = async () => {

    return [
        {
          "_id": "6418576e26d8eda8bbe16729",
          "title": "All purpose balm All 0",
          "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
          "price": 11169,
          "discountInPercent": 50,
          "recommended": true,
          "created": "2023-03-20T12:53:45.763Z",
          "__v": 0
        },
        {
          "_id": "6418576e26d8eda8bbe16728",
          "title": "All purpose balm 1",
          "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
          "price": 11169,
          "discountInPercent": 0,
          "recommended": true,
          "created": "2023-03-20T12:53:45.763Z",
          "__v": 0
        },  {
            "_id": "6418576e26d8eda8bbe167ddddd29",
            "title": "All purpose balm All 0",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 11169,
            "discountInPercent": 50,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
          },
          {
            "_id": "2332233423234423324243423",
            "title": "All purpose balm 1",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 11169,
            "discountInPercent": 0,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
          },  {
            "_id": "233423",
            "title": "All purpose balm All 0",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 11169,
            "discountInPercent": 50,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
          },
          {
            "_id": "23423423423",
            "title": "All purpose balm 1",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 11169,
            "discountInPercent": 0,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
          },  {
            "_id": "34234234423",
            "title": "All purpose balm All 0",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 11169,
            "discountInPercent": 50,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
          },
          {
            "_id": "23234234234234232344423",
            "title": "All purpose balm 1",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 11169,
            "discountInPercent": 0,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
          }
      ]
      


}

export const getMenuData = async () => {

    return  [
        {
            "path" : "/",
            "title" : "Forside"
        },
        {
            "path" : "/sundhed",
            "title" : "Sundhed"
        },
        {
            "path" : "/medlem",
            "title" : "Medlem"
        },  
        {
            "path" : "/produkter",
            "title" : "Produkter"
        },  
        {
            "path" : "/produkter",
            "title" : "Produkter1"
        },  
        {
            "path" : "/produkter",
            "title" : "Produkter2"
        }
    ]

}