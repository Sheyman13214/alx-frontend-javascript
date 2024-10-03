import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

// Export the function for external use
export default asyncUploadUser;
