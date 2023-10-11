import dbConnect from "@/lib/dbconnect";
import reviewModel from "@/lib/models/review.model";
import { NextResponse } from "next/server";

let reviewsMockData = [
    {
        "_id": "641ef53c979a9b182b0bfef4",
        "name": "Anders Larsen",
        "byline": "Tilfreds Kunde",
        "description": "Jeg døjer rigtig meget med uren hud, og har prøvet alt muligt. Jeg fik Honest produkter anbefalet som en 30 dags kur, hvor jeg KUN skulle bruge den morgen og aften. Det har jeg så prøvet nu, og jeg kan se en tydelig forskel. Et ekstra plus er, at den er dejlig fugtgivende.",
        "image": "https://smuknu.webmcdm.dk/reviews/641ef53c979a9b182b0bfef4.jpg",
        "created": "2023-03-25T13:17:01.647Z",
        "__v": 0
    },
    {
        "_id": "641ef595979a9b182b0bfefe",
        "name": "Kathrine Udgaard",
        "byline": "Tilfreds Kunde",
        "description": "Den hidtil bedste oplevelse med læbestifter! Jeg har fået så mange komplimenter, efter jeg er begyndt at gå med denne dagligt. Udover smuk farve, efterlader den læberne bløde og fugtige. Og det aller vigtigste - slet ikke klistret på den der ubehagelige måde, som nogen pomader kan. Den er et absolut \"must have\" i min håndtaske!!",
        "image": "https://smuknu.webmcdm.dk/reviews/641ef595979a9b182b0bfefe.jpg",
        "created": "2023-03-25T13:17:01.647Z",
        "__v": 0
    },
    {
        "_id": "641ef5a2979a9b182b0bff00",
        "name": "Michelle Donnersen",
        "byline": "Super Frisk Sudheds-guru",
        "description": "Fantastisk mascara! Jeg har prøvet mange forskellige, men jeg vender altid tilbage til 2000 calorie, da det simpelthen er den bedste mascara! Jeg har endda en dyr Lancome mascara liggende, men alligevel bruger jeg Honest 2000 calorie.. Den adskiller og giver længde og hvis man vil have ekstra 'wauw' effekt, skal man bare tilføje et ekstra lag.",
        "image": "https://smuknu.webmcdm.dk/reviews/641ef5a2979a9b182b0bff00.jpg",
        "created": "2023-03-25T13:17:01.647Z",
        "__v": 0
    },
    {
        "_id": "641ef5ab979a9b182b0bff02",
        "name": "Mary Petersen",
        "byline": "Tilfreds Kunde",
        "description": "Igen, har jeg brugt denne fantastiske shampoo i en uges tid, og selfølgelig kommer der ikke resultat så hurtigt! Men jeg har altid brugt Redken Extreme, og msn kan virkelig mærke hvor meget det går ind og hjælper håret og styrker det. deres emballages er også fine og prisen er ganske fin, alle kan være med på dette. Mary Petersen Kunde",
        "image": "https://smuknu.webmcdm.dk/reviews/641ef5ab979a9b182b0bff02.jpg",
        "created": "2023-03-25T13:17:01.647Z",
        "__v": 0
    },
    {
        "_id": "64ede4719caeee1d2c3062d0",
        "name": "Mary Petersen",
        "byline": "Tilfreds Kunde",
        "description": "<b>Igen</b>, har jeg brugt denne fantastiske shampoo i en uges tid, og selfølgelig kommer der ikke resultat så hurtigt! Men jeg har altid brugt Redken Extreme, og msn kan virkelig mærke hvor meget det går ind og hjælper håret og styrker det. deres emballages er også fine og prisen er ganske fin, alle kan være med på dette. Mary Petersen Kunde",
        "image": "https://smuknu.webmcdm.dk/reviews/fallback.jpg",
        "created": "2023-03-25T15:31:56.272Z",
        "__v": 0
    }
]

export async function GET() {

    await dbConnect();

    
    return reviewModel.find({}).then( (doc) => {

        return NextResponse.json(doc)

    })

}

export async function POST(request) {


    let body = await request.json()

    console.log(body)
    await dbConnect();

    return reviewModel.create(body).then( (doc) => {

        return NextResponse.json(doc)

    })
    





}