import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import Button from "~/components/Button";
import { AddExperience } from "~/data";
import { useState } from "react";
import Input from "~/components/Input";

export const meta: MetaFunction = () => {
  return [
    { title: "New Experience" },
    { name: "description", content: "Welcome to my Bókun frontend assignment!" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get('title')?.toString();
  const rating = formData.get('rating')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  let success = false;

  if (title && rating && description && imageUrl) {
    await AddExperience(title, rating, description, imageUrl);
    success = true;
  }

  return { success: success };
};

type ActionData = {
  success: boolean
}

export default function ExperienceNew() {
  const actionData = useActionData<ActionData>();
  const [titleEdit, setTitleEdit] = useState<string>('');
  const [ratingEdit, setRatingEdit] = useState<string>('');
  const [descriptionEdit, setDescriptionEdit] = useState<string>('');
  const [imageEdit, setImageEdit] = useState<string>('');

  const displayFormMessage = () => {
    if (actionData && actionData.success) {
      return (
        <p>New experience created!</p>
      );
    } else if (actionData) {
      return (
        <p className="text-red-500">Something went wrong!</p>
      );
    }

    return null;
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="max-w-5xl">
        <Form method="post" action="/experiences/new" className="flex justify-between gap-16">
          <div className="flex flex-col justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {titleEdit}
                </h1>
                <Input name="title" value={titleEdit} placeholder="Please enter title here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleEdit(e.target.value)} />
                <p><strong>Rating:</strong> {ratingEdit}</p>
                <Input name="rating" value={ratingEdit} placeholder="Please enter rating here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRatingEdit(e.target.value)} />
                <label htmlFor="description"><strong>Description:</strong></label>
                <Input type="textarea" name="description" value={descriptionEdit} placeholder="Please enter description here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescriptionEdit(e.target.value)} />
              </div>
              <Button>Save changes</Button>
              {displayFormMessage()}
            </div>
          </div>
          <div className="flex-shrink-0 min-w-[242px] max-w-[500px] flex flex-col gap-2">
            <Input name="imageUrl" value={imageEdit} placeholder="Please enter image URL here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageEdit(e.target.value)} />
            <img src={imageEdit} alt={titleEdit} />
          </div>
        </Form>
        <div className="mt-10">
          <Button href="/experiences">Back to Start</Button>
        </div>
      </div>
    </div>
  );
}
