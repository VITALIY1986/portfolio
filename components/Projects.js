import Image from 'next/image';
import { projects } from '@/data/config';

export default function Projects() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className=" landingSectionTitle max-w-max mx-0 text-center  relative mb-4 md:w-max ">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className=" mt-8">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link}> <button className="mt-3 px-4 py-1 text-sm text-indigo-300 font-semibold rounded-full border border-indigo-300 hover:text-white hover:bg-indigo-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">view more</button></a>
              <div className="flex items-center flex-wrap -m-3 pt-5">
               
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}