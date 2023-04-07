import { backendAPISettings } from 'src/api';
import { getBackendURL } from 'src/api/common/utils/apiUtilts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThemeRequest } from 'src/api/theme/models';
import { logger } from 'src/utils/logger';
import type { ThemeResponse } from 'src/api/theme/models';

const ROOT_THEME_URL = 'theme';

export const THEME_ENDPOINTS = {
  update: getBackendURL(ROOT_THEME_URL),
  get: getBackendURL(ROOT_THEME_URL),
};

export const getTheme = createAsyncThunk('theme/get', async (userId: number) => {
  try {
    const response = await fetch(`${THEME_ENDPOINTS.get}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: backendAPISettings.credentials,
    });

    const { theme }: ThemeResponse = await response.json();

    return theme;
  } catch (e) {
    logger(`Failed to get theme: ${e}`, 'error');
  }
});

export const updateTheme = async (data: ThemeRequest) => {
  try {
    await fetch(THEME_ENDPOINTS.update, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: backendAPISettings.credentials,
      body: JSON.stringify(data),
    });
  } catch (e) {
    logger(`Failed to update theme: ${e}`, 'error');
  }
};
