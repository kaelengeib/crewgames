"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";

export default function Login() {
    return (
        <main className="flex h-screen items-center justify-center">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </main>
    );
}
