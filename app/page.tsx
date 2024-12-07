import Link from "next/link";
import { Button } from "@/components/ui/button";

const DEFAULT_ID_STUB = 1;

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8">User Management System</h1>
      <div className="space-y-4">
        <Button asChild className="w-full">
          <Link href={`/user/${DEFAULT_ID_STUB}`}>View Sample User</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/admin">Admin Panel</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
