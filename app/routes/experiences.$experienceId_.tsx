import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, redirect } from "@remix-run/react";
import { Experience, GetExperience, RemoveExperience } from "~/data";
import EditIcon from '~/components/IconEdit';
import DeleteIcon from '~/components/IconDelete';
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Experience Details" },
    { name: "description", content: "Welcome to my Bókun frontend assignment!" },
  ];
};

export const loader = async ({ params } : LoaderFunctionArgs) => {
  if (params.experienceId) {
    return await GetExperience(params.experienceId);
  }

  throw redirect('/');
};

export default function ExperienceDetails() {
  const { id, title, rating, imageUrl } : Experience = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex justify-between gap-16">
        <div className="flex flex-col justify-between items-start">
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h1>
              <p><strong>Rating:</strong> {rating}</p>
            </div>
          </div>
          <div className="flex justify-between gap-2 w-full">
            <Button href={`/experiences/${id}/edit`}><EditIcon color="stroke-white" /> Edit Experience</Button>
            <Button href="/experiences">Back</Button>
          </div>
        </div>
        <div className="max-w-[500px]">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
}
