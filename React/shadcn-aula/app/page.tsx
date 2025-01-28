import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="h-screen  w-screen">
        <div className="p-2 fixed right-0 top-0">
          <ThemeToggle/>
        </div>
        <div className="flex justify-center items-center h-full">
            <LoginForm/>
            
        </div>

    </div>
  );
}
