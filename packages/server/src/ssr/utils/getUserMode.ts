import { ModeModel } from '../../../models/mode';

export const getUserMode = async (id: number | string) => {
  if (!id) {
    return null;
  }

  const data = await ModeModel.findOne({ where: { userId: Number(id) } });

  return data ? data.mode : null;
};
