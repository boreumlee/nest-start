import { Document } from 'mongoose';

export interface ShopeeModuleInterface extends Document {
  readonly module_id: number;
  readonly module_name: string;
  readonly items: {
    type: [
      {
        id: number;
        name: string;
      },
    ];
  };
}
