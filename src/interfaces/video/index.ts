import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  length: number;
  content_creator_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content_creator_id?: string;
}
