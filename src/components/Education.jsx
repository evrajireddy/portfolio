// import config from '../../config.json'

const ListItem = ({ time, degree, institution }) => {
    return (
    <li className="mb-5 ml-4">
        <div className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"></div>
        <div className="my-0.5 text-xs">{time}</div>
        <h3 className="font-semibold">{degree}</h3>
        <div className="mb-4 font-normal">{institution}</div>
    </li>
    
    )
}
// import ListItem from './ListItem'

function Education({ educations }) {
    console.log("Hi", educations);
    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">
                <div className="mx-3">
                    <h5 className="card-title">
                        <span className="text-base-content opacity-70">Education</span>
                    </h5>
                </div>
                <div className="text-base-content text-opacity-60">
                    <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                        {console.log("inside the education")}
                        {console.log(educations)}
                        {educations.map((education, index) =>
                            <ListItem
                                key={index}
                                time={`${education.from} - ${education.to}`}
                                degree={education.degree}
                                institution={education.institution}
                            />)}
                    </ol>
                </div>
            </div>
        </div>
    )
}
Education.ListItem = ListItem

export default Education;