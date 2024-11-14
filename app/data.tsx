export type Experience = {
  id: string;
  title: string;
  rating: number;
  imageUrl: string;
};

const API_DOMAIN = `https://demo.bokun.me/${process.env.assignmentID}`;

export const GetAllExperiences = async () => {
  const result = await fetch(`${API_DOMAIN}/experiences`);
  return await result.json();
}

export const GetExperience = async (experienceId : string) => {
  const result = await fetch(`${API_DOMAIN}/experiences/${experienceId}`);
  return await result.json();
}

export const SetExperience = async ({ id, title, rating, imageUrl } : Experience) => {
  const result = await fetch(`${API_DOMAIN}/experiences/${id}`, {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              rating: rating,
              imageUrl: imageUrl,
            }),
          });
  return await result.json();
}

export const RemoveExperience = async (experienceId : string) => {
  const result = await fetch(`${API_DOMAIN}/experiences/${experienceId}`, {method: 'DELETE'});
  return await result.json();
}

export const AddExperience = async ({ title, rating, imageUrl } : Experience) => {
  const result = await fetch(`${API_DOMAIN}/experiences`, {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              rating: rating,
              imageUrl: imageUrl,
            }),
          });
  return await result.json();
}
