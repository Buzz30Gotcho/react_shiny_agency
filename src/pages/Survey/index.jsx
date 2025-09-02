import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {

    const { question_number } = useParams();
    const number=parseInt(question_number,10);

    const prevQuestionNumber = number === 1 ? 1 : number - 1
    const nextQuestionNumber = number + 1
    

  return (
    <div>

    
      <h1>Questionnaire 🧮</h1>
      <h2>Question {question_number}</h2>


      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>

      {number === 10 ? (
        <Link to="/resultats">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}

    </div>
  )
}


export default Survey;

// const prevQuestionNumber = number === 1 ? 1 : number - 1;
// condition ? valeur_si_vrai : valeur_si_faux
