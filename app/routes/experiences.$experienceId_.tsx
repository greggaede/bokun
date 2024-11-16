import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, redirect } from "@remix-run/react";
import { Experience, GetExperience } from "~/data";
import EditIcon from '~/components/IconEdit';
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Experience Details" },
    { name: "description", content: "Welcome to my Bókun frontend assignment!" },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  if (params.experienceId) {
    return await GetExperience(params.experienceId);
  }

  throw redirect('/');
};

export default function ExperienceDetails() {
  const { id, title, rating, description, imageUrl } : Experience = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-5xl">
        <div className="flex justify-between gap-16">
          <div className="flex flex-col justify-between items-start">
            <div>
              <div className="flex flex-col gap-2">
                <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {title}
                </h1>
                <p><strong>Rating:</strong> {rating}</p>
                <p>{description}</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 w-full mt-10">
              <Button href={`/experiences/${id}/edit`}><EditIcon color="stroke-white" /> Edit Experience</Button>
              <Button href="/experiences">Back</Button>
            </div>
          </div>
          <div className="max-w-[500px]">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
