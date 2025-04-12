export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      // Example table structure
      users: {
        row: {
          id: string;
          email: string;
          created_at: string;
        };
        insert: {
          email: string;
        };
        update: {
          email?: string;
        };
        relationships: [];
      };
      // Add other tables below...
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
