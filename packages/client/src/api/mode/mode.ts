import { backendAPISettings } from 'src/api';
import { getBackendURL } from 'src/api/common/utils/apiUtilts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logger } from 'src/utils/logger';
import type { ModeRequest } from 'src/api/mode/models';

const ROOT_MODE_URL = 'mode';

export const MODE_ENDPOINTS = {
  update: getBackendURL(ROOT_MODE_URL),
  get: getBackendURL(ROOT_MODE_URL),
};

export const getMode = createAsyncThunk('mode/get', async (userId: number) => {
  try {
    const response = await fetch(`${MODE_ENDPOINTS.get}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: backendAPISettings.credentials,
    });

    await response.json();
  } catch (e) {
    logger(`Failed to get mode: ${e}`, 'error');
  }
});

export const updateMode = async (data: ModeRequest) => {
  try {
    await fetch(MODE_ENDPOINTS.update, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: backendAPISettings.credentials,
      body: JSON.stringify(data),
    });
  } catch (e) {
    logger(`Failed to update mode: ${e}`, 'error');
  }
};
