import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Experience, GetAllExperiences } from '~/data';
import EditIcon from '~/components/IconEdit';
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "All Experiences" },
    { name: "description", content: "Welcome to my Bókun frontend assignment!" },
  ];
};

export const loader = async () => {
  return await GetAllExperiences();
};

export default function Index() {
  const experiences : Array<Experience> = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-3xl font-bold text-orange-800 dark:text-orange-500">
            Welcome to my Bókun frontend assignment!
          </h1>
          <p className="text-orange-800 dark:text-orange-500">Pick your favorite experience below, or create your own!</p>
          <Button href="/experiences/new">Create New Experience</Button>
        </header>
        <ul className="flex items-center flex-wrap gap-3">
          {experiences.map(({id, title, rating, imageUrl }) => (
            <li key={id} className="relative">
              <a className="group flex flex-col items-center gap-3 p-3 w-80 bg-slate-700 dark:bg-slate-300 text-orange-500 dark:text-orange-800 rounded hover:translate-x-1 hover:-translate-y-1 transition-all shadow hover:shadow-lg dark:shadow-orange-500 hover:dark:shadow-orange-500" href={`/experiences/${id}`}>
                <div className="w-full h-52" style={{backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover'}}></div>
                <div className="flex flex-col items-start gap-2">
                  <span><strong>Name:</strong> {title}</span>
                  <span><strong>Rating:</strong> {rating}</span>
                </div>
              </a>
              <a href={`/experiences/${id}/edit`} className="absolute top-4 right-4 bg-orange-500 rounded-full p-2 hover:translate-x-1 hover:-translate-y-1 transition-all shadow hover:shadow-md dark:shadow-orange-500 hover:dark:shadow-orange-500">
                <EditIcon color="stroke-white" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
