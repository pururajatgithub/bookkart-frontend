// import {createClient} from "@supabase/supabase-js"
// import { Database } from "../types/supabase";


// const supa_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supa_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// export const SupaClient = createClient<Database>(supa_url,supa_key);

import axios from 'axios';

const apiurl = 'http://43.204.149.220:8000/';

export const RestClient = axios.create({
    baseURL:apiurl,
});

export const SupaClient = async () => {
    try {
        const response = await RestClient.get('book/');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// var data = new SupaClient();

// console.log();
export default SupaClient;