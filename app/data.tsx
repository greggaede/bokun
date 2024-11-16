export type Experience = {
  id: string;
  title: string;
  rating: string;
  description: string;
  imageUrl: string;
};

const API_DOMAIN = 'https://demo.bokun.me/';

export const GetAllExperiences = async () => {
  const result = await fetch(`${API_DOMAIN}${process.env.assignmentID}/experiences`);
  return await result.json();
}

export const GetExperience = async (experienceId: string) => {
  const result = await fetch(`${API_DOMAIN}${process.env.assignmentID}/experiences/${experienceId}`);
  return await result.json();
}

export const SetExperience = async ({ id, title, rating, description, imageUrl } : Experience) => {
  const requestBody = JSON.stringify({
    id: id,
    title: title,
    rating: parseFloat(rating),
    description: description,
    imageUrl: imageUrl,
  });

  const result = await fetch(`${API_DOMAIN}${process.env.assignmentID}/experiences/${id}`, {
    method: 'PUT',
    body: requestBody,
  });
  return await result.json();
}

export const RemoveExperience = async (experienceId: string) => {
  const result = await fetch(`${API_DOMAIN}${process.env.assignmentID}/experiences/${experienceId}`, {method: 'DELETE'});
  return await result.json();
}

export const AddExperience = async (title: string, rating: string, description: string, imageUrl: string) => {
  const requestBody = JSON.stringify({
    title: title,
    rating: parseFloat(rating),
    description: description,
    imageUrl: imageUrl,
  });

  const result = await fetch(`${API_DOMAIN}${process.env.assignmentID}/experiences`, {
    method: 'POST',
    body: requestBody,
  });
  return await result.json();
}
