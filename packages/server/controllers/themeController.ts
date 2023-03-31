import { Theme } from '../models/theme';

class ThemeController {
  async get(req: any, res: { json: (arg0: Theme[]) => any }) {
    try {
      const users = await Theme.findAll();

      console.log(req);
      console.log(users);

      return res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

const themeController = new ThemeController();

export default themeController;
