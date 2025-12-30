import PlayOption from './PlayOption.jsx';

function PlayCard( { question } ) { 
    return (
        <>
        <div className="question-form w-full items-start flex  mx-auto p-4">
        <div className="quiz-title text-lg">{question.text}</div>
        {
            question.options.map((option) => (
                <PlayOption key={option.id} option={option} id={question.id} onChange='' />
            ))
        }
        </div>
        </>
    );
}

export default PlayCard;