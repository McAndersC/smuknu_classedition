import dbConnect from "@/lib/dbconnect";
import productModel from "@/lib/models/product.model";
import { NextResponse } from "next/server";


export async function GET() {

    await dbConnect();

    return productModel.find({}).then( (doc) => {

        return NextResponse.json(doc)

    } )


}

export async function POST(request) {

    let data = await request.json();

    await dbConnect();

    return productModel.create(data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}