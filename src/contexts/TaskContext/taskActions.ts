import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUP_TASK = 'INTERRUP_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionsWithPayLoad = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionsWithoutPayLoad =
  | {
      type: TaskActionTypes.INTERRUP_TASK;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };

export type TaskActionModel =
  | TaskActionsWithPayLoad
  | TaskActionsWithoutPayLoad;
