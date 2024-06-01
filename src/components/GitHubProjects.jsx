import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';

const RenderProjects = ({ item }) => {
    return (

        <a
            className="card shadow-lg compact bg-base-100 cursor-pointer"
            href={item.html_url}
            onClick={(e) => {
                e.preventDefault();
                window?.open(item.html_url, '_blank');
            }}>
            <div className="flex justify-between flex-col p-8 h-full w-full">
                <div>
                    <div className="flex items-center truncate">
                        <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                            <MdInsertLink className="my-auto" />
                            <span>{item.name}</span>
                        </div>
                    </div>
                    <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
                        {item.description}
                    </p>
                </div>
                <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
                    <div className="flex flex-grow">
                        <span className="mr-3 flex items-center">
                            <AiOutlineStar className="mr-0.5" />
                            <span>{item.stargazers_count}</span>
                        </span>
                        <span className="flex items-center">
                            <AiOutlineFork className="mr-0.5" />
                            <span>{item.forks_count}</span>
                        </span>
                    </div>
                    <div>
                        <span className="flex items-center">
                            <div
                                className="w-3 h-3 rounded-full mr-1 opacity-60"
                            />
                            <span>{item.language}</span>
                        </span>
                    </div>
                </div>
            </div>
        </a>
    )
};

function GithubProjects({ projects, userName, header }) {
    return (
        <div className="lg:col-span-2 col-span-1">
        <div className="grid grid-cols-1 gap-6">

        <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                    <div className="card compact bg-base-100 shadow bg-opacity-40">
                        <div className="card-body">
                            <div className="mx-3 flex items-center justify-between mb-2">
                                <h5 className="card-title">

                                    <span className="text-base-content opacity-70">
                                        {header}
                                    </span>

                                </h5>

                                <a
                                    href={`https://github.com/${userName}?tab=repositories`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-base-content opacity-50 hover:underline"
                                >
                                    See All
                                </a>

                            </div>
                            <div className="col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {console.log(projects)}
                                    {projects && projects.map((item, index) => (
                                        <RenderProjects
                                            key={index}
                                            item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
GithubProjects.RenderProjects = RenderProjects
export default GithubProjects;