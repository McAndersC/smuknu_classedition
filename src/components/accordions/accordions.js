import Accordion from "./accordion"
    
const Accordions = () => {

    // Henviser til en API-endepunkt som returnerer en liste med spørsmål og svar
    const getQuestionData = () => {

            return [
                {
                    "question": "Spørsmål 1",
                    "answer": "Svar 1"
                },
                {
                    "question": "Spørsmål 2",
                    "answer": "Svar 2"
                },
                {
                    "question": "Spørsmål 3",
                    "answer": "Svar 3"
                },
                {
                    "question": "Spørsmål 4",
                    "answer": "Svar 4"
                }
            ]


    }

    return <div>

        {getQuestionData().map((item, index) => {

            return <Accordion key={index} question={item.question} answer={item.answer}></Accordion>
            
        })}
        
    </div>  

}

export default Accordions