type Json = string | number | boolean | null | {
    [key: string]: Json;
} | Json[];
interface Database {
    public: {
        Tables: {
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
        };
        Views: {};
        Functions: {};
        Enums: {};
    };
}

export { Database, Json };
