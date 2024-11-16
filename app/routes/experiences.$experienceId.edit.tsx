import type { MetaFunction, LoaderFunction, ActionFunction } from "@remix-run/node";
import { Form, useLoaderData, redirect, useActionData } from "@remix-run/react";
import DeleteIcon from '~/components/IconDelete';
import Button from "~/components/Button";
import { Experience, GetExperience, RemoveExperience, SetExperience } from "~/data";
import { useState } from "react";
import Input from "~/components/Input";
import Dialog from "~/components/Dialog";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Experience" },
    { name: "description", content: "Welcome to my Bókun frontend assignment!" },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  if (params.experienceId) {
    return await GetExperience(params.experienceId);
  }

  throw redirect('/');
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get('id')?.toString();
  const title = formData.get('title')?.toString();
  const rating = formData.get('rating')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();

  if (rating && isNaN(parseFloat(rating))) {
    return { invalidRating: true };
  }

  if (id && title && rating && description && imageUrl) {
    await SetExperience({
      id,
      title,
      rating,
      description,
      imageUrl
    });
    throw redirect(`/experiences/${id}`);
  }

  return null;
};

type ActionData = {
  invalidRating: boolean
}

export default function ExperienceEdit() {
  const actionData = useActionData<ActionData>();
  const { id, title, rating, description, imageUrl } : Experience = useLoaderData<typeof loader>();
  const [titleEdit, setTitleEdit] = useState<string>(title);
  const [ratingEdit, setRatingEdit] = useState<string>(rating);
  const [descriptionEdit, setDescriptionEdit] = useState<string>(description);
  const [imageEdit, setImageEdit] = useState<string>(imageUrl);
  const [deleteDialogActive, setDeleteDialogActive] = useState<boolean>(false);

  const onOpenDeleteDialog = () => {
    setDeleteDialogActive(true);
  }

  const onCloseDeleteDialog = () => {
    setDeleteDialogActive(false);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="max-w-5xl">
        <Form method="post" action={`/experiences/${id}/edit`} className="flex justify-between gap-16">
          <Input name="id" value={id} type="hidden" />
          <div className="flex flex-col justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {titleEdit}
                </h1>
                <Input required={true} name="title" value={titleEdit} placeholder="Please enter title here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleEdit(e.target.value)} />
                <p><strong>Rating:</strong> {ratingEdit}</p>
                <Input required={true} name="rating" value={ratingEdit} placeholder="Please enter rating here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRatingEdit(e.target.value)} />
                {actionData && actionData.invalidRating && (
                  <span className="text-red-500">Please enter a valid number here</span>
                )}
                <label htmlFor="description"><strong>Description:</strong></label>
                <Input required={true} type="textarea" name="description" value={descriptionEdit} placeholder="Please enter description here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescriptionEdit(e.target.value)} />
              </div>
              <Button>Save changes</Button>
            </div>
          </div>
          <div className="flex-shrink-0 min-w-[242px] max-w-[500px] flex flex-col gap-2">
            <Input required={true} name="imageUrl" value={imageEdit} placeholder="Please enter image URL here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageEdit(e.target.value)} />
            <img src={imageEdit} alt={titleEdit} />
          </div>
        </Form>
        <div className="flex justify-between gap-2 mt-10">
          <Button href={`/experiences/${id}`}>Stop Editing Experience</Button>
          <Button href="/experiences">Back to Start</Button>
          <Button onClick={onOpenDeleteDialog} className="bg-red-600 hover:bg-red-400"><DeleteIcon color="fill-white" /> Delete Experience</Button>
        </div>
        <Dialog active={deleteDialogActive} onCloseDialog={onCloseDeleteDialog}>
          <div className="text-center">
            <div className="text-[32px] my-3 font-bold leading-title">
              Are you sure you want to delete this?
            </div>
          </div>
          <div className="flex gap-6 pt-10">
            <Form method="post" action="/experiences" className="flex-grow">
              <Input name="id" value={id} type="hidden" />
              <Button className="w-full">
                Yes
              </Button>
            </Form>
            <Button className="flex-grow" onClick={onCloseDeleteDialog && (() => onCloseDeleteDialog())}>
              No
            </Button>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
