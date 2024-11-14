import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, redirect } from "@remix-run/react";
import EditIcon from '~/components/IconEdit';
import DeleteIcon from '~/components/IconDelete';
import Button from "~/components/Button";
import { Experience, GetExperience, RemoveExperience } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Experience" },
    { name: "description", content: "Welcome to my Bókun frontend assignment!" },
  ];
};

export const loader = async ({ params } : LoaderFunctionArgs) => {
  if (params.experienceId) {
    return await GetExperience(params.experienceId);
  }

  throw redirect('/');
};

export default function ExperienceEdit() {
  const { id, title, rating, imageUrl } : Experience = useLoaderData<typeof loader>();

  const deleteExperience = () => {
    RemoveExperience(id);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex justify-between gap-16">
        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h1>
              <p><strong>Rating:</strong> {rating}</p>
            </div>
            <Button onClick={deleteExperience} className="bg-red-600 hover:bg-red-400"><DeleteIcon color="fill-white" /> Delete Experience</Button>
          </div>
          <div className="flex justify-between gap-2 w-full">
            <Button href={`/experiences/${id}`}>Stop Editing Experience</Button>
            <Button href="/experiences">Back to Start</Button>
          </div>
        </div>
        <div className="max-w-[500px]">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
}
