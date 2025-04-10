type Json = string | number | boolean | null | {
    [key: string]: Json;
} | Json[];
interface Database {
    public: {
        Tables: {};
        Views: {};
        Functions: {};
        Enums: {};
    };
}

export { Database, Json };
