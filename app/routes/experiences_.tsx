import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { RemoveExperience } from "~/data";

export const loader = async () => {
  throw redirect('/');
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get('id')?.toString();

  if (id) {
    await RemoveExperience(id);
    throw redirect('/');
  }
};

type ActionData = {
  success: boolean
}

export default function Experiences() {
  return null;
}
