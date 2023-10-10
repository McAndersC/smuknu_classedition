import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";


export async function GET() {



    let mockData = [
        {
            "_id": "6418576e26d8eda8bbe16729",
            "title": "All purpose balm",
            "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
            "price": 169,
            "discountInPercent": 20,
            "recommended": true,
            "created": "2023-03-20T12:53:45.763Z",
            "__v": 0
        }
    ]


    return NextResponse.json(mockData[0])


}